import React, { ReactNode } from "react";
import {
  buttonSizeClasses,
  buttonRadiusClasses,
  buttonColorClasses,
  buttonDisabledClasses,
  buttonLoadingClasses,
} from "./ComponentStyles";

interface IButton {
  name?: string;
  icon?: ReactNode;
  iconside?: "left" | "right";
  loading?: boolean;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  disable?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  name,
  icon,
  iconside = "left",
  loading = false,
  onclick,
  size = "md",
  color = "default",
  radius = "md",
  disable = false,
  type = "button",
}: IButton) {
  const isDisabled = disable || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onclick}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium transition-all outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
        ${buttonSizeClasses[size]}
        ${buttonRadiusClasses[radius]}
        ${buttonColorClasses[color]}
        ${isDisabled ? buttonDisabledClasses : ""}
        ${loading ? buttonLoadingClasses : ""}
      `}
    >
      {/* Left Icon */}
      {icon && iconside === "left" && !loading && (
        <span className="flex items-center">{icon}</span>
      )}

      {/* Loading spinner */}
      {loading && (
        <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      )}

      {/* Button text */}
      {name && <span>{name}</span>}

      {/* Right Icon */}
      {icon && iconside === "right" && !loading && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}
