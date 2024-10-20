import { FC } from "react"
import { SiTicktick } from "react-icons/si";
import { MdError } from "react-icons/md";
import { twMerge } from 'tailwind-merge'
interface lToastProps{
    isSuccess?:boolean;
    message:string
}
const Toast:FC<lToastProps> = ({isSuccess=true,message}) => {
  return (
    <div>
        <div className={twMerge("flex gap-3 absolute top-24 right-4  items-center px-3 py-2 rounded-md text-white",isSuccess?"bg-green-600":"bg-red-600")}>
                <div>{isSuccess?<SiTicktick/>:<MdError/>}</div>
                <div>
                    <p className="text-sm font-medium">{message}</p>
                </div>
        </div>
    </div>
  ) 
}

export default Toast