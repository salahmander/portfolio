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
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <ProfileOverview />
        </div>
        <div className="relative w-full max-w-4xl mx-auto lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll">
          <NavigationBar />
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
            <div className="w-full max-w-xl space-y-10">
              {/* TODO: Create feature - Create CRUD Backend to handle markdown */}
              <UmbraCreations />
              <Motorway />
              <LevelPrime />
              <BullionByPost />
              <Faurecia />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
