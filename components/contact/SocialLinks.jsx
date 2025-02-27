import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <img src="/icons/gmail.png" className="w-8 h-8" alt="Gmail icon" />,
      name: "Gmail",
      link: "mailto:ekoss.prog@gmail.com",
    },
    {
      icon: (
        <img
          src="/icons/telegram.png"
          className="w-8 h-8"
          alt="Telegram icon"
        />
      ),
      name: "Telegram",
      link: "https://t.me/evokss",
    },
    {
      icon: (
        <img
          src="/icons/linkedin.png"
          className="w-8 h-8"
          alt="LinkedIn icon"
        />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/evakoss/",
    },
    {
      icon: (
        <img src="/icons/github.png" className="w-8 h-8" alt="GitHub icon" />
      ),
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
          {social.icon}
          <span className="mt-2 text-sm">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
