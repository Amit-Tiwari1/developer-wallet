'use client'
import Input from "./components/UI/Input";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <Input
          label="Email"
          placeholder="Enter your email"
          icon={<IoMdMail size={18} />}
          iconSide="right"
          size="lg"
          variant="flat"
          radius="lg"
          color="primary"
          isRequired
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          size="lg"
          variant="flat"
          radius="lg"
          color="secondary"
          isRequired
        />
      </div>
    </div>
  );
}
