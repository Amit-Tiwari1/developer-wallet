import { ReactNode, useState } from "react";
import {
  sizeClasses,
  radiusClasses,
  variantClasses,
  colorClasses,
  errorClasses,
  disabledClasses,
} from "./ComponentStyles";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  id?: string;
  icon?: ReactNode;
  iconSide?: "left" | "right";
  onIconClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  isRequired?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  isDisabled?: boolean;
}

const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  id,
  value,
  icon,
  iconSide = "right",
  onIconClick,
  size = "md",
  variant = "flat",
  color = "default",
  radius = "md",
  minLength,
  maxLength,
  errorMessage,
  onChange,
  isRequired,
  isDisabled = false,
}: InputProps) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type;

  const handleIconClick = () => {
    if (isPassword) {
      setShowPassword((prev) => !prev);
    }
    onIconClick?.();
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm text-zinc-400 capitalize">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && iconSide === "left" && (
          <button
            type="button"
            onClick={handleIconClick}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
          >
            {icon}
          </button>
        )}

        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          name={name}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          disabled={isDisabled}
          className={`
            w-full outline-none transition-all
            ${sizeClasses[size]}
            ${radiusClasses[radius]}
            ${variantClasses[variant]}
            ${colorClasses[color]}
            ${icon ? (iconSide === "left" ? "pl-10" : "pr-10") : ""}
            ${errorMessage ? errorClasses : ""}
            ${isDisabled ? disabledClasses : ""}
          `}
        />

     
        {(icon || isPassword) && iconSide === "right" && (
          <button
            type="button"
            onClick={handleIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
          >
            {isPassword ? (
              showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />
            ) : (
              icon
            )}
          </button>
        )}
      </div>


      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
