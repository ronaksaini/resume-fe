import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { RiLink } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Template1 = ({ userData }) => {
  console.log("userdata---", userData);
  return (
    <div className="h-[842px] w-[594px]  m-auto p-8 border-2 bg-red-200">
      <div className=" bg-white">
        <div className="pb-4">
          <h2 className="font-bold text-[32px] leading-none">RONAK SAINI</h2>
          <p className="font-medium text-lg">Frontend Developer</p>
          <div className="flex gap-x-4 gap-y-1 justify-between flex-wrap text-[10px] font-medium">
            <div className="flex gap-1 items-center ">
              <FaPhoneAlt />
              <p>+91 8094017212</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdAlternateEmail />
              <p>ronaktanwar0508@gmail.com</p>
            </div>
            <div className="flex gap-1 items-center ">
              <GrLocation />
              <p>Jaipur, Rajasthan</p>
            </div>
            <div className="flex gap-1 items-center ">
              <RiLink />
              <p>https://www.google.com</p>
            </div>
            <div className="flex gap-1 items-center ">
              <RiLink />
              <p>https://www.google.com</p>
            </div>
            <div className="flex gap-1 items-center ">
              <RiLink />
              <p>https://www.google.com</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="basis-3/5">
            {/* objective */}
            <div className="pb-5">
              <h2 className="border-b-4 text-lg font-semibold border-black mb-1">
                OBJECTIVE
              </h2>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sint delectus, consequuntur, iste tempore commodi pariatur illo
                vel quisquam aperiam est eaque quos ex cumque quod quasi
                laboriosam aliquid voluptatum?
              </p>
            </div>
            <div className="pb-2 border-b-2 border-dotted ">
              <h2 className="border-b-4 text-lg font-semibold border-black">
                EXPERIENCE/INTERNSHIP
              </h2>
              <h3 className="text-sm font-medium">Software Engineer Intern</h3>
              <h1 className="text-sm font-semibold">Orufy Technologies</h1>
              <div>
                <div className="flex text-[10px] items-center gap-1">
                  <FaCalendarAlt />
                  <p className="">02/2024 - 08/2024</p>
                </div>
              </div>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sint delectus, consequuntur, iste tempore commodi pariatur illo
                vel quisquam aperiam est eaque quos ex cumque quod quasi
                laboriosam aliquid voluptatum?
              </p>
            </div>
            <div className="pb-2 border-b-2 border-dotted ">
              <h3 className="text-sm font-medium">Software Engineer Intern</h3>
              <h1 className="text-sm font-semibold">Orufy Technologies</h1>
              <div>
                <div className="flex text-[10px] items-center gap-1">
                  <FaCalendarAlt />
                  <p className="">02/2024 - 08/2024</p>
                </div>
              </div>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sint delectus, consequuntur, iste tempore commodi pariatur illo
                vel quisquam aperiam est eaque quos ex cumque quod quasi
                laboriosam aliquid voluptatum?
              </p>
            </div>
            <h2 className="border-b-4 text-lg font-semibold border-black my-1">
                SKILLS
              </h2>
              <div className="flex gap-x-4 w-full flex-wrap text-sm">
                <p className="border-b-2">HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
                <p>HTML5</p>
              </div>
          </div>
          <div className="basis-2/5 "></div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
