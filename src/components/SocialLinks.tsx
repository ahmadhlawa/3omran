import React from 'react';
import { Instagram, Youtube, Linkedin, Video } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'إنستغرام',
      url: 'https://instagram.com/USERNAME',
      icon: Instagram,
      hoverClass: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10',
    },
    {
      name: 'تيك توك',
      url: 'https://tiktok.com/@USERNAME',
      icon: Video,
      hoverClass: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10',
    },
    {
      name: 'يوتيوب',
      url: 'https://youtube.com/@USERNAME',
      icon: Youtube,
      hoverClass: 'hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10',
    },
    {
      name: 'لينكد إن',
      url: 'https://linkedin.com/in/USERNAME',
      icon: Linkedin,
      hoverClass: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialPlatforms.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`تابع منصة حلول عمرانية ذكية على ${platform.name}`}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 font-bold text-xs transition-all duration-200 ${platform.hoverClass} focus-ring`}
          >
            <IconComponent className="w-4 h-4 shrink-0" />
            <span>{platform.name}</span>
          </a>
        );
      })}
    </div>
  );
};
