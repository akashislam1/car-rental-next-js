const PickForm = () => {
  return (
    <form className="flex flex-col space-y-4 bg-blue-500 p-4 rounded-md">
      <label
        htmlFor="pickup-location"
        className="text-lg font-medium text-white"
      >
        PICK-UP LOCATION
      </label>
      <input
        type="text"
        id="pickup-location"
        name="pickup-location"
        placeholder="City, Airport, Station, etc"
        className="border  rounded-md py-2 px-3 bg-transparent placeholder-white focus:outline-[#01d28e]"
      />

      <label
        htmlFor="drop-off-location"
        className="text-lg font-medium text-white"
      >
        DROP-OFF LOCATION
      </label>
      <input
        type="text"
        id="drop-off-location"
        name="drop-off-location"
        placeholder="City, Airport, Station, etc"
        className="border  rounded-md py-2 px-3 bg-transparent placeholder-white focus:outline-[#01d28e]"
      />

      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <label
            htmlFor="pickup-date"
            className="text-lg font-medium text-white"
          >
            PICK-UP DATE
          </label>
          <input
            type="date"
            id="pickup-date"
            name="pickup-date"
            className="border  w-full rounded-md py-2 px-3 bg-transparent placeholder-white focus:outline-[#01d28e]"
          />
        </div>

        <div>
          <label
            htmlFor="drop-off-date"
            className="text-lg font-medium text-white"
          >
            DROP-OFF DATE
          </label>
          <input
            type="date"
            id="drop-off-date"
            name="drop-off-date"
            className="border  w-full rounded-md py-2 px-3 bg-transparent placeholder-white focus:outline-[#01d28e]"
          />
        </div>
      </div>

      <label htmlFor="pickup-time" className="text-lg font-medium text-white">
        PICK-UP TIME
      </label>
      <input
        type="time"
        id="pickup-time"
        name="pickup-time"
        className="border  rounded-md py-2 px-3 bg-transparent placeholder-white focus:outline-[#01d28e]"
      />

      <button
        type="submit"
        className="bg-[#01d28e] text-white font-medium py-2 px-4 rounded-md"
      >
        Rent A Car Now
      </button>
    </form>
  );
};

export default PickForm;
