import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-5">
      <Input
        label="Email"
        placeholder="Enter your email"
        icon={<IoMdMail />}
      />

      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        icon={showPassword ? <HiEyeOff /> : <HiEye />}
        onIconClick={() => setShowPassword(p => !p)}
      />

      <Button name="Login" />
    </div>
  );
}
