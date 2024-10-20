import { Button } from "./ui/button"
import hero from '../assets/hero.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";


const Header = () => {
  return (
    <div className="w-[80%] m-auto py-36">
        <div className="flex justify-between flex-col sm:flex-row gap-6 ">
          <div className="w-full space-y-3">
            <h1 className="font-bold text-2xl leading-snug sm:text-5xl">Powerful <span className="text-[#FF885B]">Resume</span> Builder for Your Next Career Move</h1>
            <p>Craft Your Professional Future with Ease</p>
            <Button className="bg-[#FF885B] text-xl p-6">Build Resume</Button>
            <p className="text-sm">Loved by interviewers at</p>
            <div className="flex gap-4 text-xl">
            <FaGoogle />
            <FaFacebook />
            <FaApple />
            <SiTesla />
            </div>
          </div>
          <div className="basis-1/2">
            <img src={hero} alt="" className="w-[300px] m-auto sm:w-full"/>
          </div>
        </div>
    </div>
  )
}

export default Header