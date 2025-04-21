
import React from "react";

export const SocialFooter = () => (
  <div className="flex justify-center space-x-8 mb-4">
    <a
      href="https://www.instagram.com/doomwhisperers/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
      aria-label="Instagram"
    >
      <img
        src="/lovable-uploads/2a3957e1-adad-443f-9f94-14fc86ad8d50.png"
        alt="Instagram"
        className="w-10 h-10 object-cover"
      />
    </a>
    <a
      href="https://www.tiktok.com/@doomwhisperers/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
      aria-label="TikTok"
    >
      <img
        src="/lovable-uploads/e6a08d55-4e1e-446e-aebc-86a466d6f74b.png"
        alt="TikTok"
        className="w-10 h-10 object-cover"
      />
    </a>
    <a
      href="https://discord.gg/3seekyxNVA"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
      aria-label="Discord"
    >
      <img
        src="/lovable-uploads/f422a25e-3b07-4427-9357-c237be8347cb.png"
        alt="Discord"
        className="w-10 h-10 object-cover"
      />
    </a>
  </div>
);
