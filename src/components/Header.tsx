import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { 
  BellIcon,

  MagnifyingGlassIcon,
 } from "@heroicons/react/24/outline";  

 import {
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  BellIcon as BellIconSolid,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  ViewColumnsIcon
} from "@heroicons/react/24/solid";
 
function Header() {
  return (  
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/* left */}
        <div className="flex items-center gap-2">
          <Image 
            src="https://links.papareact.com/5me"
            alt="Search Icon"
            width={40}
            height={40}
            layout="fixed"
          />

        <div className="flex ml-2 items-center rounded-full bg-gray-100">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder:text-gray-500 flex-shrink-0" type="text" placeholder="Search Facebook" />
          </div> 
        </div> 

        {/* center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* Profile Pic */}
          <p className="whitespace-nowrap font-semibold pr-3">WaMashina</p>
            <ViewColumnsIcon className="icon" />
            <ChatBubbleOvalLeftEllipsisIcon className="icon" />
            <BellIconSolid className="icon" />
            <ChevronDownIcon className="icon" />
        </div>
    </div>
  )
}

export default Header
