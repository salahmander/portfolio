import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";
import RepositoryCard from "@/components/RepositoryCard/RepositoryCard";

const Repositories = () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="relative w-full lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array(9).fill(<RepositoryCard />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Repositories;
