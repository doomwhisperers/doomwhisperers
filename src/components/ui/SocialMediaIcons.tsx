
import React from "react";

const ICONS = [
  {
    src: "/lovable-uploads/675386da-cbc9-4b9f-9571-f0544e9f64dc.png", // Instagram
    alt: "Instagram",
    href: "https://www.instagram.com/doomwhisperers/",
  },
  {
    src: "/lovable-uploads/f73f8562-6de7-4799-b646-8306fbac85c4.png", // TikTok
    alt: "TikTok",
    href: "https://www.tiktok.com/@doomwhisperers/",
  },
  {
    src: "/lovable-uploads/ef9194ee-51e9-46e6-af45-7c43c345c9b4.png", // Discord
    alt: "Discord",
    href: "https://discord.gg/3seekyxNVA",
  },
];

export function SocialMediaIcons({ className = "" }: { className?: string }) {
  // Wszystkie ikony mają tę samą szerokość, wysokość, padding, spójna ramka
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
            style={{ minWidth: 48, minHeight: 48 }}
          />
        </a>
      ))}
    </div>
  );
}
