import { FC } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface lMyProfileProps {}
const MyProfile: FC<lMyProfileProps> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/login");
  };
  return (
    <div className="flex flex-col text-sm">
      <div className="flex gap-4 items-center border-b pb-[6px] cursor-pointer">
        <FaRegUser size={12} />
        <p className="hover:underline">My Profile</p>
      </div>
      <div
        className="flex gap-4 items-center pt-[6px] cursor-pointer"
        onClick={handleLogout}
      >
        <IoMdLogOut size={12} />
        <p className="hover:underline">Logout</p>
      </div>
    </div>
  );
};

export default MyProfile;
