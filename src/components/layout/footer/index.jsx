import { BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-12">

        <div className="py-8 max-w-2xl mx-auto flex gap-6">
          <div className="mx-auto relative w-full border-2 border-orange-700 shadow-lg rounded">
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              <FaSearch className="w-4 h-4" color="white"/>
            </div>
            <input
              type="text"
              className="p-2 pl-9 w-full text-white bg-transparent rounded text-base placeholder-white"
              placeholder="Search..."
            />
          </div>

          <button className="bg-orange-600 rounded px-8 font-semibold">
            GO
          </button>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 px-4 pb-8">
          <div>
            <span className="font-bold text-xl underline">Company</span>
            <ul className="font-medium pt-2">
              <li className="cursor-pointer hover:text-orange-500">About Us</li>
              <li className="cursor-pointer hover:text-orange-500">Carrers</li>
              <li className="cursor-pointer hover:text-orange-500">
                Case Studies
              </li>
              <li className="cursor-pointer hover:text-orange-500">Others</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-xl underline">Utility Links</span>
            <ul className="font-medium pt-2">
              <li className="cursor-pointer hover:text-orange-500">Link 1</li>
              <li className="cursor-pointer hover:text-orange-500">Link 2</li>
              <li className="cursor-pointer hover:text-orange-500">Link 3</li>
              <li className="cursor-pointer hover:text-orange-500">Support</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-xl underline">Follow Us</span>
            <ul className="font-medium pt-2">
              <li className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
                <BsFacebook color="#1877F2"/>
                Facebook
              </li>
              <li className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
                <BsTwitter color="#1D9BF0"/>
                Twitter
              </li>
              <li className="cursor-pointer hover:text-orange-500 flex items-center gap-2">
                <BsGithub color="white"/> GitHub
              </li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-xl underline">
              Browse Furnitures
            </span>
            <ul className="font-medium pt-2">
              <li className="cursor-pointer hover:text-orange-500">
                Home Furnitures
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Work Furnitures
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Outdoor Furnitures
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-orange-700 text-sm italic text-center py-8">2022 T-Developers | Designed & Built</div>
      </div>
    </footer>
  );
};

export default FooterComponent;

