import Instagram from "@/public/nstagram.png";
import Dribble from "@/public/dribbble.png";
import Discord from "@/public/discord.png";
import Behance from "@/public/behance.png";
import Facebook from "@/public/facebook.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" px-[30px] lg:px-[100px] 2xl:px-[250px] bg-white">
      <div className="h-[2px] bg-[#CCCCCC]"></div>
      <div className="flex flex-col pb-[30px] py-[70px] lg:flex-row justify-center gap-x-[80px] ">
        <div className="flex flex-col ">
          <div className="text-[#2D2D2D]">
            <h1 className="font-semibold text-[32px] max-w-[180px]">
              Lets work together
            </h1>
            <p className="text-[17px] mt-[40px] ">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
          <div className="flex gap-x-[13px] mt-[60px]">
            <Image src={Discord} alt="Discord" />
            <Image src={Facebook} alt="Facebook" />
            <Image src={Dribble} alt="Dribble" />
            <Image src={Instagram} alt="Instagram" />
            <Image src={Behance} alt="Behance" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px] w-full">
          <input
            type="email"
            placeholder="Name"
            className=" px-[30px] py-[21px] text-[#2D2D2D] placeholder:text-[#2D2D2D] placeholder:text-[17px] bg-[#F3F3F3]"
          />
          <input
            type="email"
            placeholder="Email"
            className=" px-[30px] py-[21px] text-[#2D2D2D] placeholder:text-[#2D2D2D] placeholder:text-[17px] bg-[#F3F3F3]"
          />
          <input
            type="text"
            placeholder="Type your message here"
            className=" h-[200px] pb-[126px] pl-[21px] text-[#2D2D2D] placeholder:text-[#2D2D2D] placeholder:text-[17px] hover:placeholder:hidden bg-[#F3F3F3]"
          />
          <button className="bg-[#2d2d2d] w-[80%] py-[25px]  font-semibold text-[20px] text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
