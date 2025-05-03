import React from 'react';
import Link from 'next/link';
import LinkedIn from '../../BrandIcons/LinkedIn';
import GitHub from '../../BrandIcons/GitHub';
import Gmail from '../../BrandIcons/Gmail';
import DailyDev from '../../BrandIcons/DailyDev';
import Spotify from '../../BrandIcons/Spotify';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 w-full flex justify-center z-50">
      <div className="backdrop-blur-md bg-[rgba(40,40,40,0.6)] border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex gap-6">
        <ul className=" flex gap-4">
          <li>
            <Link href="/" className="group relative">
              <LinkedIn className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <GitHub className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <Gmail className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Email me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <DailyDev className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Daily.dev
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <Spotify className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Spotify
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <Spotify className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Switch Theme
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="group relative">
              <Spotify className="text-2xl transition-transform duration-200 ease-out transform-gpu group-hover:scale-125" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                AI Chat
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
