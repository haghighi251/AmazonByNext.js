import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header>
            {/* Top Nav */}
           <div className="flex items_center bg-amazon_blue p-1 flex-grow py-2">
               <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                   <Image
                   src='/amazon.png'
                   width={150}
                   height={40}
                   objectFit='contain'
                   className='cursor-pointer'
                   />
               </div>

               {/* Search bar*/}
               <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 mr-4">
                   <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"  />
                   <SearchIcon className="h-12 p-4" />
               </div>

               {/* The third column in top nav bar */}
               <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap mr-4" >
                   <div className="" >
                     <p>Hi</p>
                     <p className="font-extrabold md:text-sm">account & List</p>
                   </div>

                   <div className="" >
                       <p>Return</p>
                       <p className="font-extrabold md:text-sm">0 Orders</p>
                   </div>

                   <div className="relative link flex items-center" >
                       <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                       <ShoppingCartIcon className="h-10" />
                       <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                   </div>
               </div>

           </div>

            {/* Bottom Nav */}
           <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
               <p className="link flex items-center">
                   <MenuIcon className="h-6 mr-1" />
                   All
               </p>

               <p className="link">Prime video</p>
               <p className="link">Amazon business</p>
               <p className="link">Today's deals</p>
               <p className="link hidden lg:inline-flex">Electronic</p>
               <p className="link hidden lg:inline-flex">Food & Grocery</p>
               <p className="link hidden lg:inline-flex">Price</p>
               <p className="link hidden lg:inline-flex">Buy again</p>
               <p className="link hidden lg:inline-flex">Health & Personal</p>

           </div>
        </header>
    );
}

export default Header;
