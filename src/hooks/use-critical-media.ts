import { useEffect, useState } from 'react';
import heroCharacter from '@/assets/hero-character-new.png';
import { criticalGameScreenshotUrls, criticalGameVideoUrls } from '@/data/games';

const ALOSAURUS_VIDEO_URL = '/videos/3d-model-alosaurus.mp4';

const addPreloadHint = (href: string, as: 'image' | 'video', fetchpriority?: 'high' | 'low' | 'auto') => {
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = href;
    if (fetchpriority) {
      (link as any).fetchpriority = fetchpriority;
    }
    document.head.appendChild(link);
  } catch {
    // ignore
  }
};

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

// Downloads the resource to HTTP cache without buffering the full file in memory.
const fetchToCache = async (url: string) => {
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) return;

    if (!res.body) {
      // Fallback (older browsers)
      await res.arrayBuffer();
      return;
    }

    const reader = res.body.getReader();
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done } = await reader.read();
      if (done) break;
    }
  } catch {
    // ignore
  }
};

export const useCriticalMediaReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // 1) Hero image
      addPreloadHint(heroCharacter, 'image', 'high');
      await preloadImage(heroCharacter);
      if (cancelled) return;

      // 2-4) Game videos (sequential)
      for (let i = 0; i < criticalGameVideoUrls.length; i++) {
        const url = criticalGameVideoUrls[i];
        addPreloadHint(url, 'video', i === 0 ? 'high' : 'auto');
        await fetchToCache(url);
        if (cancelled) return;
      }

      // 5) Game screenshots
      // Hint low priority so videos still win the connection if still downloading.
      criticalGameScreenshotUrls.forEach((src) => addPreloadHint(src, 'image', 'low'));
      await Promise.all(criticalGameScreenshotUrls.map((src) => preloadImage(src)));
      if (cancelled) return;

      // 6) Featured 3D model video (alosaurus)
      addPreloadHint(ALOSAURUS_VIDEO_URL, 'video', 'auto');
      await fetchToCache(ALOSAURUS_VIDEO_URL);
      if (cancelled) return;

      setReady(true);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
};
