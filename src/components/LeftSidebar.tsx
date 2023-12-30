import classNames from "classnames";
import { Link, Outlet, useLocation } from "react-router-dom";
import componentsData from "../data/componentsData.js";

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <section className="w-full flex">
      <div className="hidden md:block bg-yellow-200 fixed top-20 left-0 w-[360px] h-screen overflow-y-scroll p-24">
        <ul className="flex flex-col">
          <div className="pb-8">
            <label className="text-lg font-bold block mb-4">
              Getting started
            </label>
            <li
              className={classNames(
                "inliine-block hover:underline hover:underline-offset-8 mb-4",
                {
                  "font-bold underline underline-offset-8":
                    location.pathname.includes("overview"),
                }
              )}
            >
              <Link to={"/overview"}>Overview</Link>
            </li>
          </div>
          <div className="pb-4">
            <label className="text-lg font-bold block mb-4">Components</label>
            {componentsData.map((data, index) => {
              return (
                <div className="flex items-center mb-4 gap-2">
                  <li
                    className={classNames(
                      "inliine-block hover:underline hover:underline-offset-8",
                      {
                        "font-bold underline underline-offset-8":
                          location.pathname.includes(data.path),
                      }
                    )}
                    key={index}
                  >
                    <Link to={`/components/${data.path}`}>{data.name}</Link>
                  </li>
                  {data.new && (
                    <span className="text-xs bg-violet-200 px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </ul>
      </div>
      <div
        className={classNames(
          "bg-cyan-200 w-full md:w-[calc(100vw-360px)] md:ml-[360px] p-5 md:p-24 min-h-screen max-h-full"
        )}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default LeftSidebar;
