import Portraite from "@/public/Image.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="px-[30px] py-[120px] bg-[#F9E6F0] grid grid-cols-1 lg:grid-cols-2 gap-y-[80px] lg:px-[200px] lg:items-center 2xl:px-[350px] ">
      <div className="flex flex-col gap-y-[20px] max-w-[195px]">
        <Image
          src={Portraite}
          alt="Image"
          className=" border-2 border-[#000] max-w-[195px]"
        />
        <div className="max-w-[195px]">
          <h1 className="font-bold text-[17px] underline">Pablo Designero</h1>
          <p>Designer & Developer</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[17px]">Bio:</h1>
        <p>
          Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember
          it. I often get asked where I get my inspiration from: in everydays
          lil details. And sometimes in leftover food I find in my beard.
        </p>
      </div>
    </div>
  );
};

export default Hero;
