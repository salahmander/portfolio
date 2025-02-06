import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";

const Repositories = () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <ProfileOverview />
        </div>
        <div className="relative w-full max-w-4xl mx-auto lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll">
          <NavigationBar />
          <div className="my-8 w-full max-w-3xl md:grid grid-cols-2 gap-3">

          </div>
        </div>
      </div>
    </main>
  );
};

export default Repositories;
