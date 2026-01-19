// Centralized games data + assets so we can preload and reuse consistently.

import gameVideoPlaceholderCure from '@/assets/game-placeholder-cure.png';
import gameVideoPlaceholderRaptor from '@/assets/game-placeholder-raptor.png';
import gameVideoPlaceholderImposter from '@/assets/game-placeholder-imposter.png';

import cureInfection1 from '@/assets/cure-infection-screenshot-1.png';
import cureInfection2 from '@/assets/cure-infection-screenshot-2.png';
import cureInfection3 from '@/assets/cure-infection-screenshot-3.png';
import cureInfection4 from '@/assets/cure-infection-screenshot-4.png';
import cureInfection5 from '@/assets/cure-infection-screenshot-5.png';
import cureInfection6 from '@/assets/cure-infection-screenshot-6.png';

import raptorHunter1 from '@/assets/raptor-hunter-screenshot-1.png';
import raptorHunter2 from '@/assets/raptor-hunter-screenshot-2.png';
import raptorHunter3 from '@/assets/raptor-hunter-screenshot-3.png';
import raptorHunter4 from '@/assets/raptor-hunter-screenshot-4.png';
import raptorHunter5 from '@/assets/raptor-hunter-screenshot-5.png';
import raptorHunter6 from '@/assets/raptor-hunter-screenshot-6.png';

import findImposter1 from '@/assets/find-imposter-screenshot-1.png';
import findImposter2 from '@/assets/find-imposter-screenshot-2.png';
import findImposter3 from '@/assets/find-imposter-screenshot-3.png';
import findImposter4 from '@/assets/find-imposter-screenshot-4.png';
import findImposter5 from '@/assets/find-imposter-screenshot-5.png';
import findImposter6 from '@/assets/find-imposter-screenshot-6.png';

import findImposterIcon from '@/assets/find-the-imposter-icon.png';
import cureInfectionIcon from '@/assets/cure-infection-icon.png';
import raptorHunterIcon from '@/assets/raptor-hunter-icon.png';

export type Game = {
  id: number;
  title: string;
  genre: string;
  description: string;
  icon: string;
  previewVideo: string;
  previewPlaceholder: string;
  link: string;
  trailerVideoId: string;
  btsVideo?: string;
  screenshots: string[];
};

export const games: Game[] = [
  {
    id: 0,
    title: 'Cure and Infection',
    genre: 'Survival Shooting',
    description:
      'A survival FPS developed in just six days, where you help Dr. Cure and his nurse fight a viral outbreak caused by his brother.',
    icon: cureInfectionIcon,
    previewVideo: '/videos/cure-infection.mp4',
    previewPlaceholder: gameVideoPlaceholderCure,
    link: 'https://goncal0.itch.io/cure-and-infection',
    trailerVideoId: 'Xmvg2rPg59Q',
    screenshots: [
      cureInfection1,
      cureInfection2,
      cureInfection3,
      cureInfection4,
      cureInfection5,
      cureInfection6,
    ],
  },
  {
    id: 2,
    title: 'Raptor Hunter',
    genre: 'Shooter',
    description:
      'Armed with a shotgun and pistol, you must hunt fast and relentless raptors in a survival challenge.',
    icon: raptorHunterIcon,
    previewVideo: '/videos/raptor-hunter.mp4',
    previewPlaceholder: gameVideoPlaceholderRaptor,
    link: 'https://raptorbot.itch.io/raptor-hunter',
    trailerVideoId: 'vbHF9V5M4Dk',
    screenshots: [
      raptorHunter1,
      raptorHunter2,
      raptorHunter3,
      raptorHunter4,
      raptorHunter5,
      raptorHunter6,
    ],
  },
  {
    id: 4,
    title: 'Find The Imposter',
    genre: 'Role-Playing / Social Deduction',
    description:
      'Uncover and eliminate the imposter before they eliminate the crew. (Among Us Fan-Game)',
    icon: findImposterIcon,
    previewVideo: '/videos/find-imposter.mp4',
    previewPlaceholder: gameVideoPlaceholderImposter,
    link: 'https://raptorbot.itch.io/find-the-imposter',
    trailerVideoId: 'tg1A09S3Puo',
    btsVideo: '/videos/find-the-imposter-bts.mkv',
    screenshots: [
      findImposter1,
      findImposter2,
      findImposter3,
      findImposter4,
      findImposter5,
      findImposter6,
    ],
  },
];

export const criticalGameVideoUrls: string[] = [
  '/videos/cure-infection.mp4',
  '/videos/raptor-hunter.mp4',
  '/videos/find-imposter.mp4',
];

export const criticalGameScreenshotUrls: string[] = games.flatMap((g) => g.screenshots.slice(0, 6));
