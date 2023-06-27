import NavBer from "@/components/Navber";

const withLayout = ({ children }) => {
  return (
    <div className="">
      <NavBer></NavBer>
      <div className=" md:min-h-[calc(100vh-100px)]">{children}</div>
      <div>footer</div>
    </div>
  );
};

export default withLayout;
