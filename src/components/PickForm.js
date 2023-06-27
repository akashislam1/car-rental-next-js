const PickForm = () => {
  return (
    <form className="flex flex-col space-y-4 bg-blue-500 p-4 rounded-md">
      <label htmlFor="pickup-location" className="text-lg font-medium">
        PICK-UP LOCATION
      </label>
      <input
        type="text"
        id="pickup-location"
        name="pickup-location"
        placeholder="City, Airport, Station, etc"
        className="border rounded-md py-2 px-3"
      />

      <label htmlFor="drop-off-location" className="text-lg font-medium">
        DROP-OFF LOCATION
      </label>
      <input
        type="text"
        id="drop-off-location"
        name="drop-off-location"
        placeholder="City, Airport, Station, etc"
        className="border rounded-md py-2 px-3"
      />

      <label htmlFor="pickup-date" className="text-lg font-medium">
        PICK-UP DATE
      </label>
      <input
        type="date"
        id="pickup-date"
        name="pickup-date"
        className="border rounded-md py-2 px-3"
      />

      <label htmlFor="drop-off-date" className="text-lg font-medium">
        DROP-OFF DATE
      </label>
      <input
        type="date"
        id="drop-off-date"
        name="drop-off-date"
        className="border rounded-md py-2 px-3"
      />

      <label htmlFor="pickup-time" className="text-lg font-medium">
        PICK-UP TIME
      </label>
      <input
        type="time"
        id="pickup-time"
        name="pickup-time"
        className="border rounded-md py-2 px-3"
      />

      <input
        type="submit"
        value="Make Reservation"
        className="bg-white text-blue-500 font-medium py-2 px-4 rounded-md"
      />
    </form>
  );
};

export default PickForm;
