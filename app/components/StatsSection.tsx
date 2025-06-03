import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#00620F] to-[#4C8C3F]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-y-6 md:gap-y-0 md:gap-14">
          {/* Box 1 */}
          <div className="border border-white rounded-lg px-6 py-4 text-white flex items-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide flex-1">
              EXPECTED NUMBERS
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-right w-16">
              35
            </div>
          </div>

          {/* Box 2 */}
          <div className="border border-white rounded-lg px-6 py-4 text-white flex items-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide flex-1">
              SPONSORS
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-right w-16">
              03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
