import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import template1 from '../assets/template1.png';
import { Button } from "./ui/button";
import { useNavigate, useNavigation } from "react-router-dom";

const ResumeTemplates = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/500x400",
    "https://via.placeholder.com/400x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/500x400",
    "https://via.placeholder.com/400x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/500x400",
    "https://via.placeholder.com/400x400",
  ];
const navigate=useNavigate()
  return (
    <div className="w-[80%] m-auto py-6 ">
      <h2 className=" font-semibold text-2xl text-center">Choose a Resume Template</h2> 
      <div className="design w-16"></div>
      <Slider {...settings}>
        {images.map((image: string, index) => (
          <div key={index} className="px-6">
            <div className="w-[250px] relative bg-[#ff875b40] p-4  rounded group">
              <div className="overflow-hidden">
                <img 
                  src={template1} 
                  alt="" 
                  className="rounded transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <Button className="bg-[#FF885B] rounded-none hover:bg-[#FF885B]" onClick={()=>navigate(`/resume/template/${index}`)}>Choose Template</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResumeTemplates;
