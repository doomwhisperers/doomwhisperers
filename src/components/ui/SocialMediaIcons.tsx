
import React from "react";

const ICONS = [
  {
    src: "/lovable-uploads/bc484f01-4c63-4c5a-9974-6ab8105d8304.png", // Instagram (user provided)
    alt: "Instagram",
    href: "https://www.instagram.com/doomwhisperers/",
  },
  {
    src: "/lovable-uploads/b39ac149-b8e3-4bf2-858f-e7df8660909e.png", // TikTok (user provided)
    alt: "TikTok",
    href: "https://www.tiktok.com/@doomwhisperers/",
  },
  {
    src: "/lovable-uploads/d5dc8395-e604-47ac-8aca-73104d05eecf.png", // Discord (user provided)
    alt: "Discord",
    href: "https://discord.gg/3seekyxNVA",
  },
];

export function SocialMediaIcons({ className = "" }: { className?: string }) {
  // Poprawione: identyczna szerokość, wysokość i padding niezależnie od obrazka
  return (
    <div className={`flex justify-center items-center space-x-6 ${className}`}>
      {ICONS.map((icon, i) => (
        <a
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="inline-flex items-center justify-center transition-transform hover:scale-110"
          style={{ width: 48, height: 48 }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-12 h-12 object-contain"
            style={{ minWidth: 48, minHeight: 48, maxWidth: 48, maxHeight: 48 }}
          />
        </a>
      ))}
    </div>
  );
}
