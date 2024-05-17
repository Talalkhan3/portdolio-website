import Menu from "@/public/Menu.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="px-[50px] py-[25px] flex justify-between bg-white xl:px-[200px]">
      <div>
        <h1 className="font-semibold text-[20px]">LOGO</h1>
      </div>
      <div className="flex gap-[50px] text-[17px] max-lg:hidden ">
        <h1 className="cursor-pointer">About</h1>
        <h1 className="cursor-pointer">Work</h1>
        <h1 className="cursor-pointer">Contact</h1>
      </div>
      <Image src={Menu} alt="MENU" className="lg:hidden" />
    </div>
  );
};

export default Navbar;
