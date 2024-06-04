import { Segment } from "@mui/icons-material";
import Image from "next/image";

export default function Navbar(){
    return(
        <div className="flex items-center justify-between mt-4">
            {/* logo */}
            <div className="flex items-center cursor-pointer">
                <Image src={"/images/nike-logo.png"} alt="nike-logo" width={100} height={24} className="object-contain"/>
            </div>
            {/* nav links */}
            <div>
                <ul className="flex items-center gap-x-14">
                    <li className="text-lg cursor-pointer">Home</li>
                    <li className="text-lg cursor-pointer">About Us</li>
                    <li className="text-lg cursor-pointer">Products</li>
                </ul>
            </div>
            {/* image */}
            <div>
                <Segment className="segment cursor-pointer"/>
            </div>
        </div>
    )
}