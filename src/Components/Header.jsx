import logo from "./../assets/images/disneylogo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 1,
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      id: 2,
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      id: 3,
      name: "ORIGINALS",
      icon: HiStar,
    },

    {
      id: 4,
      name: "Series",
      icon: HiTv,
    },
    {
      id: 5,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
  ];

  return (
    <div className="flex items-center w-screen justify-between p-3.5">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.id} />
          ))}
        </div>

        {/* When screen size medium hide this */}
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem name={""} Icon={item.icon} key={item.id} />
              )
          )}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {isOpen ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icon}
                        key={item.id}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="http://plugins.svn.wordpress.org/user-avatar-reloaded/assets/icon-128x128.png"
        alt="user-avatar"
        className=" w-[50px] rounded-full "
      />
    </div>
  );
}

export default Header;
