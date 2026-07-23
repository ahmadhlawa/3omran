import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusiness, Camera, Music2, Play } from 'lucide-react';

export interface SocialLink {
  name: string;
  handle: string;
  url: string | null;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: 'إنستغرام',
    handle: '@USERNAME',
    url: null,
    icon: Camera,
  },
  {
    name: 'تيك توك',
    handle: '@USERNAME',
    url: null,
    icon: Music2,
  },
  {
    name: 'يوتيوب',
    handle: '@USERNAME',
    url: null,
    icon: Play,
  },
  {
    name: 'لينكدإن',
    handle: '/in/USERNAME',
    url: null,
    icon: BriefcaseBusiness,
  },
];
