import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts"
import MyProfile from "./MyProfile";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null)
  const close = async () => {
    setShowDropDown(false)
  }
  useOnClickOutside(divRef, close)

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("name");
    if (userData && token) {
      setUser(userData);
    }
  }, []);

  return (
    <div className="sticky top-0 w-full border-b-[1px] bg-white z-50">
      <nav className="py-6 w-[80%] m-auto flex justify-between relative">
        <h1 className="font-bold text-3xl">
          Swift<span className="text-[#FF885B]">cv</span>
        </h1>
        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-black">
                Hello, <b>{user.split(" ")[0]}</b>
              </span>
              <FaRegUserCircle
                size={30}
                onClick={() => setShowDropDown(!showDropDown)}
                className="cursor-pointer"
              />
            </div>
          ) : (
            <>
              <Button
                className="border-[1px] bg-transparent text-black border-black hover:bg-transparent rounded-sm hover:border-[#FF885B] hover:text-[#FF885B]"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                className="bg-[#FF885B] rounded-sm"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        {showDropDown && (
          <div className="absolute right-4 bg-white top-16 p-2 px-3 border rounded-lg" ref={divRef}>
            <MyProfile />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
