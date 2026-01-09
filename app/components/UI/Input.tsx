import { ReactNode } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  value: string;
  icon: ReactNode;
  iconSide: "left" | "right";
  onChange: (e: any) => void;
  size: "sm" | "md" | "lg" | "xl";
  variant: "flat" | "bordered" | "faded" | "underlined";
  isRequired: boolean;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius: "none" | "sm" | "md" | "lg" | "full";
  errorMessage: string;
  minLength: number;
  maxLength: number;
  isDisabled:boolean
}

const colorClasses = {
    default:"bg-[#27272a] text-white",
    primary:"bg-[#012e63] text-white",
    secondary:"bg-[#301050] text-white",
    success:"bg-[#0a5028], text-white",
    warning:"bg-[#63430d] text-white",
    danger:"bg-[#620727] text-white"
}
const sizeClasses = {
    default:"bg-[#27272a] text-white",
    primary:"bg-[#012e63] text-white",
    secondary:"bg-[#301050] text-white",
    success:"bg-[#0a5028], text-white",
    warning:"bg-[#63430d] text-white",
    danger:"bg-[#620727] text-white"
}
const variantClasses = {
    default:"bg-[#27272a] text-white",
    primary:"bg-[#012e63] text-white",
    secondary:"bg-[#301050] text-white",
    success:"bg-[#0a5028], text-white",
    warning:"bg-[#63430d] text-white",
    danger:"bg-[#620727] text-white"
}
const radiusClasses = {
    default:"bg-[#27272a] text-white",
    primary:"bg-[#012e63] text-white",
    secondary:"bg-[#301050] text-white",
    success:"bg-[#0a5028], text-white",
    warning:"bg-[#63430d] text-white",
    danger:"bg-[#620727] text-white"
}


const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  icon,
  iconSide,
  size,
  variant,
  color = "default",
  radius = "none",
  minLength,
  maxLength,
  errorMessage,
  onChange,
  isRequired,
  isDisabled=false
  
}: InputProps) => {
  {label ? (<label className=''></label>) : ''}
};

export default Input;
