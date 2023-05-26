import {v4 as uuidV4} from "uuid";

const routers = [
  {
    path: "/",
    label: "Home",
    blank: false,
  },
  {
    path: "/about",
    label: "About",
    blank: false,
  },
  {
    path: "/contact",
    label: "Contact",
    blank: false,
  },
]
export const Header = () => {
  return (
    <div data-aos="fade-down" className="bg-gray-100">
      <div className="w-screen mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-gray-600">React + TypeScript + Webpack</h1>
       
       <div className="flex items-center">
        {routers.map((router, i) => {
          return (
            <a key={i} href={router.path}
            target={router.blank ? "_blank" : "_self"}
            className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {router.label}
          </a>
          )
        })}
          </div>
      </div>
    </div>
  );
};