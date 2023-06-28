import { FaMapMarkedAlt, FaRegHandshake } from "react-icons/fa";
import PickForm from "../PickForm";
import Image from "next/image";
import car from "@/pictures/car-rental.png";

const PickUp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  min-h-screen -mt-28 z-50 ">
      <div className="md:w-[400px] px-3 md:px-0">
        <PickForm></PickForm>
      </div>
      <div className="py-20 space-y-10 px-3 md:px-0">
        <div className="bg-slate-100 rounded-r-md px-3 md:px-10 py-14">
          <h3 className="text-3xl font-semibold">
            Better Way to Rent Your Perfect Cars
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="space-y-4">
              <FaMapMarkedAlt className="h-24 w-24 border mx-auto text-blue-400 rounded-full p-3"></FaMapMarkedAlt>
              <p className="text-xl">Choose Your Pickup Location</p>
            </div>
            <div className="space-y-4">
              <FaRegHandshake className="h-24 w-24 border mx-auto text-blue-400 rounded-full p-3"></FaRegHandshake>
              <p className="text-xl">Select the Best Deal</p>
            </div>
            <div className="space-y-4">
              <Image
                className="h-24 w-24 border mx-auto  rounded-full p-3"
                src={car}
                alt="car"
              />
              <p className="text-xl">Reserve Your Rental Car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
