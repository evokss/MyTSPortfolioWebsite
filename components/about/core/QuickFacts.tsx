import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { quickFacts } from "../utils/quickFactsData"

const QuickFacts: React.FC = () => {
  return (
    <section className="mb-16">
      <SectionHeading title="Quick Facts" />
      <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-400">
        {quickFacts.map((fact, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              {fact.icon}
              <p>{fact.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickFacts;
