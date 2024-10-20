import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { BiColumns } from "react-icons/bi";


const featuresData = [
  {
    icon: <IoCheckmarkDoneCircleSharp/>,
    label: "ATS-friendly professionally designed resumes",
  },
  {
    icon: <IoIosColorPalette/>,
    label: "Change the font, color and background combinations",
  },
  {
    icon: <BiColumns/>,
    label: "Two-column, single-column, and multi-page layouts",
  },
];

const Features = () => {
  return (
    <div className="w-full py-12">
      <h2 className="font-semibold text-2xl text-center">Features</h2>
      <div className="design w-12"></div>
      <div className="w-[80%] m-auto flex gap-8">
        {featuresData.map((feature, index) => {
          return (
            <div key={index} className="p-6 bg-[#ff875b19] flex flex-col items-center gap-3 rounded-md basis-1/3">
                <div className="text-2xl text-[#FF885B]">{feature.icon}</div>
              <h2 className="text-center font-medium">{feature.label}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
