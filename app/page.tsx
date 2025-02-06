import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";

import Motorway from "@/components/JobCard/Companies/Motorway";
import LevelPrime from "@/components/JobCard/Companies/LevelPrime";
import BullionByPost from "@/components/JobCard/Companies/BullionByPost";
import Faurecia from "@/components/JobCard/Companies/Faurecia";
import UmbraCreations from "@/components/JobCard/Companies/UmbraCreations";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

const HomePage = () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="flex flex-col items-center relative w-full lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 w-full self-start max-w-xl space-y-10">
            {/* TODO: Create feature - Create CRUD Backend to handle markdown */}
            <UmbraCreations />
            <Motorway />
            <LevelPrime />
            <BullionByPost />
            <Faurecia />
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
