import { Outlet } from "react-router";
import Header from "./header";
import useUiTheme from "../hooks/context/useTheme";

const RootLayout = () => {
  const { T } = useUiTheme();
  return (
    <div className=" w-full">
      <div
        className={` relative w-full min-h-screen ${
          T ? "bg-ui-light-secondary" : "bg-ui-dark-secondary"
        }`}
      >
        {/* side bar */}
        <div className=" w-full lg:pl-[250px]">
          <Header />
          <div className=" w-full p-5 sm:p-7 md:p-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
