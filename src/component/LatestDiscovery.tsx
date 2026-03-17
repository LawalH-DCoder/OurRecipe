import { ChevronRight } from "lucide-react";
import { discoveryData } from "../data/discoveryData";
import DiscoveryCard from "./DiscoveryCard";

const LatestDiscovery = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[clamp(1.8rem,4vw,1.5rem)] font-[700] tracking-[-2px] leading-none text-[var(--text-primary)]">
            Latest <em className="not-italic italic">Discovery</em>
          </h2>
        </div>

        <a
          href="/explore"
          className="hidden sm:inline-flex items-center gap-1.5 text-md font-semibold pb-0.5 border-b text-[var(--text-secondary)] border-[var(--border-medium)]"
        >
          View all <ChevronRight className="w-6 h-6" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {discoveryData.map((meal) => (
          <DiscoveryCard key={meal.id} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default LatestDiscovery;
