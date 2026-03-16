import Image from "next/image";
import { 
  FlagIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon
 } from "@heroicons/react/24/outline";  

 
function Header() {
  return (
    <div>
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
          <input className="flex ml-2 items-center bg-transparent outline-none placeholder:text-gray-500" type="text" placeholder="Search Facebook" />
          </div>  


        {/* center */}
        <div className="flex justify-center flex-grow">
          <div>
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
        {/* Right - Icons */}
        </div>
      
   </div>)
}

export default Header
