import React from "react";
import SectionHeading from "@/components/ui/PageHeading";

const MyStory: React.FC = ()=> {
  return (
    <section className="mb-16">
      <SectionHeading title="My Story" />
      <div className="space-y-4">
        <div className="bg-white border-2 border-orange-300 dark:bg-white/5 dark:border-rose-600 py-8 px-8 rounded-lg">
          <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-2 space-y-4 text-gray-600 dark:text-gray-400">
            <li>
              Throughout my academic journey and early career, I successfully
              complete my first higher education in Computer Science, serve as
              a Microsoft Student Partner, and participate in and win many
              coding challenges (hackathons).
            </li>
            <li>
              I consistently develop my own projects and contribute my skills
              and knowledge to various projects with exceptional teams.
            </li>
            <li>
              In my free time, I engage in open-source and freelance web
              development projects, further fueling my love for crafting
              exceptional web experiences and expanding my practical
              knowledge.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
