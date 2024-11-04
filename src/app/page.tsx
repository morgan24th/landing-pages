import Image from "next/image";
import Navbar from "./components/Navbar";
import {
  ArrowBack,
  ArrowForward,
  Facebook,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import ShoeCard from "./components/ShoeCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-secondary-background-color flex items-center justify-center w-[85vw] mx-auto rounded-xl shadow-md">
        <div className="w-full mx-[5vw] relative">
          {/* navbar */}
          <div>
            <Navbar />
          </div>

          {/* nike and social icons */}
          <div className="flex items-center justify-evenly">
            <div>
              <Image
                src={"/images/nike-air.png"}
                alt="nike-air.png"
                width={850}
                height={24}
                className="object-contain hover:-rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="absolute right-0 mt-[12vh]">
              <ul className="text-white">
                <li className="icons">
                  <Facebook />
                </li>
                <li className="my-4 icons">
                  <Twitter />
                </li>
                <li className="icons">
                  <WhatsApp />
                </li>
              </ul>
            </div>
          </div>

          {/* mini shoes */}
          <div className="flex items-center justify-center my-20">
            <div className="mr-2">
              <ArrowBack />
            </div>
            <div className="flex items-center justify-center">
              <ShoeCard
                shoeImageURL="/images/nike-air-lemon.png"
                shoeName="Nike Air Lemon"
                shoePrice={7000}
              />
              <ShoeCard
                shoeImageURL="/images/nike-air-striped.png"
                shoeName="Nike Air Striped"
                shoePrice={9000}
              />
            </div>
            <div className="!ml-2">
              <ArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
