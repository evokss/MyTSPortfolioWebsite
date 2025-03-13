import React from "react";
import Image from "next/image";

interface SocialLink {
  imageSrc: string;
  name: string;
  link: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      imageSrc: "/icons/gmail.png",
      name: "Gmail",
      link: "mailto:ekoss.prog@gmail.com",
    },
    {
      imageSrc: "/icons/telegram.png",
      name: "Telegram",
      link: "https://t.me/evkosse",
    },
    {
      imageSrc: "/icons/linkedin.png",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/evakoss/",
    },
    {
      imageSrc: "/icons/github.png",
      name: "GitHub",
      link: "https://github.com/evokss",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in-out"
        >
          <div className="relative w-8 h-8">
            <Image
              src={social.imageSrc}
              alt={`${social.name} icon`}
              fill
              sizes="2rem"
              className="object-contain"
              priority={index < 2} // Load first two icons with priority
            />
          </div>
          <span className="mt-2 text-sm">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
