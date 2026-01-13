import Input from "./UI/Input";
import Button from "./UI/Button";
import { IoMdMail } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";

export default function RegisterPage() {
  return (
    <div className="space-y-5">
      <Input label="Email" placeholder="Enter email" icon={<IoMdMail />} />
      <Input label="Mobile" placeholder="Enter mobile number" icon={<FaMobileRetro />} />
      <Input label="Password" type="password" placeholder="Create password" />
      <Button name="Register" />
    </div>
  );
}
