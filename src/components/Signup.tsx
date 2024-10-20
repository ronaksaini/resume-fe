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
import { FC, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "./Toast";

// Helper to manage toast
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

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toastMessage, isSuccess, showToast, triggerToast } = useToast();

  const handleSignUp = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/send-verification-otp",
        { emailId },
        { withCredentials: true }
      );

      if (data.isSuccess) {
        setCurrentStep(2);
        triggerToast("OTP sent successfully", true);
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch {
      triggerToast("Something went wrong", false);
    }
  };

  return (
    <div className="flex h-[70vh]">
      {currentStep === 1 && (
        <Card className="w-[400px] m-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-3">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Ronak Tanwar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="abc@gmail.com"
                  value={emailId}
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
            <Button
              className="bg-orange text-white w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <div className="flex gap-1">
              <p className="text-xs">Already a user?</p>
              <Link
                to="/login"
                className="text-orange text-xs font-medium underline"
              >
                Sign In
              </Link>
            </div>
          </CardFooter>
        </Card>
      )}
      {currentStep === 2 && (
        <OtpModal email={emailId} name={name} password={password} />
      )}
      {showToast && <Toast message={toastMessage} isSuccess={isSuccess} />}
    </div>
  );
};

interface OtpModalProps {
  email: string;
  name: string;
  password: string;
}

const OtpModal: FC<OtpModalProps> = ({ email, name, password }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(10);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const { toastMessage, isSuccess, showToast, triggerToast } = useToast();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const userInputOtp = otp.join("");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/verify-otp",
        { userInputOtp },
        { withCredentials: true }
      );

      if (data.isSuccess) {
        try {
          axios.post("http://localhost:3000/api/signup", {
            name,
            email,
            password,
          });
          triggerToast("Signed up successfully", true);
        } catch {
          alert("djvdb");
        }
        setTimeout(() => navigate("/"), 3000);
      } else {
        triggerToast("Invalid OTP", false);
      }
    } catch {
      alert("Something went wrong");
    }
  };

  const handleResendOtp = () => {
    console.log("Resend OTP");
    setTimeLeft(10);
  };

  return (
    <Card className="w-[400px] m-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">OTP Verification</CardTitle>
        <p className="text-center text-xs">
          Verify OTP sent to {email.replace(/(.{3}).*(@.*)/, "$1*********$2")}
        </p>
      </CardHeader>
      <CardContent>
        <form className="flex w-full gap-3 mx-auto justify-center">
          {otp.map((digit, index) => (
            <Input
              key={index}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputs.current[index] = el)}
              className="w-12 h-12 text-center font-bold text-base caret-transparent"
            />
          ))}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="bg-orange text-white w-full"
          onClick={handleVerifyOtp}
        >
          Verify
        </Button>
        <div className="flex items-center gap-2 pt-2">
          {timeLeft > 0 ? (
            <p className="text-sm">Resend OTP in {timeLeft}</p>
          ) : (
            <p
              className="text-semibold text-sm text-orange cursor-pointer"
              onClick={handleResendOtp}
            >
              Resend OTP
            </p>
          )}
        </div>
      </CardFooter>
      {showToast && <Toast message={toastMessage} isSuccess={isSuccess} />}
    </Card>
  );
};

export default Signup;
