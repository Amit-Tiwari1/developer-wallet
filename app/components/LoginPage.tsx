import React from 'react'
import Input from "./UI/Input";
import { IoMdMail } from "react-icons/io";
import Button from './UI/Button';

export default function LoginPage() {
  return (
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
        <Button name='Register'/>
      </div>
      
  )
}
