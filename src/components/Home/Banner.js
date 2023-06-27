const Banner = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col relative -z-20 ">
      <div className="w-full h-screen bg-[url('../pictures/banner/bg_1.jpg')] bg-cover bg-center">
        <div className="w-full h-full md:flex  justify-center items-center backdrop-brightness-50">
          <div className="text-white space-y-4 md:w-1/2 text-center px-3 py-28 md:py-0">
            <h3 className="font-bold text-4xl">
              Fast & Easy Way To Rent A Car
            </h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
