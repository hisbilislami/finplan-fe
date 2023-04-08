import React, { useState } from "react";
import {
  AiFillMoneyCollect,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineInbox,
  AiOutlineLogout,
  AiOutlineProfile,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

import { Pacifico } from "@next/font/google";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const Sidebar = (props: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      submenu: true,
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineInbox /> },
    { title: "Profile", spacing: true, icon: <AiOutlineProfile /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <>
      <div
        className={`invisible md:visible bg-bill-white min-h-screen p-5 pt-8 relative duration-300 ${
          props.open ? "w-1/5" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`text-white bg-bill-oxford-blue text-3xl rounded-full absolute -right-4 top-5 border border-bill-oxford-blue cursor-pointer ${
            !props.open && "rotate-180"
          } ${!props.open && "right-6 top-5"}`}
          onClick={() => props.setOpen(!props.open)}
        />

        <div
          className={`${!props.open && "border-t"} ${
            props.open ? "hidden" : "show"
          } w-full h-1 mt-10 duration-300`}
        >
          &nbsp;
        </div>

        <div
          className={`inline-flex place-items-center ${
            !props.open ? "mt-5" : "mt-8"
          }`}
        >
          <AiFillMoneyCollect
            className={`text-bill-imperial-red bg-bill-misty-rose text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              !props.open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`${
              pacifico.className
            } text-bill-imperial-red text-3xl duration-300 ${
              !props.open && "hidden"
            }`}
          >
            FinPlan
          </h1>
        </div>

        <div
          className={`flex place-items-center bg-bill-misty-rose mt-8 py-2 ${
            !props.open && "justify-center w-9 h-9"
          } ${props.open ? "px-4 rounded-md" : "rounded-full"}`}
        >
          <BsSearch
            className={`text-bill-imperial-red block float-left cursor-pointer ${
              props.open && "mr-2"
            } ${!props.open && "text-md"}`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-bill-imperial-red focus:outline-none ${
              !props.open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2 mt-5">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-bill-french-gray text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-bill-misty-rose hover:text-bill-imperial-red rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                onClick={() =>
                  menu.submenu && props.open && setSubmenuOpen(!submenuOpen)
                }
              >
                <span className={`text-2xl block float-left`}>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base duration-300 font-medium flex-1 ${
                    !props.open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} duration-300`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && props.open && (
                <ul
                  className={`${
                    submenuOpen && props.open ? "show" : "hidden"
                  } duration-300`}
                >
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      className={`text-bill-french-gray text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-bill-misty-rose hover:text-bill-imperial-red rounded-md`}
                      key={index}
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
