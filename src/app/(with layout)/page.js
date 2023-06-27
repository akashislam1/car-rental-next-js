import Banner from "@/components/Home/Banner";
import PickUp from "@/components/Home/PickUp";

const HomePage = () => {
  return (
    <main className="">
      <Banner></Banner>
      <div className="w-full sm:w-11/12 mx-auto">
        <PickUp></PickUp>
      </div>
    </main>
  );
};
export default HomePage;
