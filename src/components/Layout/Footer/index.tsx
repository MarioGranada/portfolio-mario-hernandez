'use client';

import React from 'react';
import {
  LinkedIn,
  GitHub,
  Gmail,
  DailyDev,
  Spotify,
  Sparkles,
  ThemeSwitcher,
} from '../../BrandIcons';
import IconLink from './IconLink';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 w-full flex justify-center z-50">
      <div className="backdrop-blur-md bg-[rgba(40,40,40,0.6)] border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex gap-6">
        <ul className=" flex gap-4">
          <IconLink Icon={LinkedIn} label="LinkedIn" />
          <IconLink Icon={GitHub} label="GitHub" />
          <IconLink Icon={Gmail} label="Email me" />
          <IconLink Icon={DailyDev} label="Daily.dev" />
          <IconLink Icon={Spotify} label="Spotify" />
          <ThemeSwitcher />
          <div className="w-0.5 h-full rounded-box bg-neutral-content" />
          <IconLink
            Icon={Sparkles}
            label="AI Chat"
            as="button"
            onClick={() => {
              console.log('in here oe AI chat');
            }}
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
