import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const useToast = (duration = 3000) => {
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (message: string, success: boolean) => {
    setToastMessage(message);
    setIsSuccess(success);
    setShowToast(true);
    setTimeout(() => setShowToast(false), duration);
  };

  return { toastMessage, isSuccess, showToast, triggerToast };
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toastMessage, isSuccess, showToast, triggerToast } = useToast();
  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      if (response.data.isSuccess) {
        triggerToast("Loggedin Successfully", true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('name', response.data.user.name);
        navigate("/");
        window.location.reload();
      } else {
        alert(response.data.message);
        triggerToast("Loggedin failed", true);
      }
    } catch (err) {}
  };
  return (
    <div className=" flex  h-[60vh]">
      <Card className="w-[400px] m-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-3">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="bg-orange text-white w-full" onClick={handleLogin}>
            Login
          </Button>
          <div className="flex gap-1">
            <p className="text-xs">Not a user ?</p>
            <Link
              to={"/signup"}
              className="text-orange text-xs font-medium underline"
            >
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
      {showToast && <Toast message={toastMessage} isSuccess={isSuccess} />}
    </div>
  );
};

export default Login;
