
export const sizeClasses = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-base px-3",
  lg: "h-12 text-lg px-4",
  xl: "h-14 text-xl px-5",
};


export const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};


export const variantClasses = {
  flat: `
    border border-transparent
    bg-opacity-100
    focus:ring-2
  `,

  bordered: `
    border border-zinc-600
    bg-opacity-0
    focus:border-current
  `,

  faded: `
    border border-zinc-700
    bg-opacity-70
  `,

  underlined: `
    border-b border-zinc-600
    bg-opacity-0
    rounded-none
    px-0
  `,
};


export const colorClasses = {
  default: `
    bg-[#27272a]
    text-white
    placeholder-zinc-400
    focus:ring-zinc-500
    focus:border-zinc-500
  `,

  primary: `
    bg-[#002e63]
    text-white
    placeholder-blue-200
    focus:ring-blue-500
    focus:border-blue-500
  `,

  secondary: `
    bg-[#301050]
    text-white
    placeholder-purple-200
    focus:ring-purple-500
    focus:border-purple-500
  `,

  success: `
    bg-[#0a5028]
    text-white
    placeholder-green-200
    focus:ring-green-500
    focus:border-green-500
  `,

  warning: `
    bg-[#63430d]
    text-black
    placeholder-yellow-900
    focus:ring-yellow-500
    focus:border-yellow-500
  `,

  danger: `
    bg-[#620727]
    text-white
    placeholder-red-200
    focus:ring-red-500
    focus:border-red-500
  `,
};


export const errorClasses = `
  border-red-500
  bg-red-600/10
  text-white
  placeholder-red-300
  focus:ring-red-500
`;

export const disabledClasses = `
  opacity-50
  cursor-not-allowed
  bg-zinc-700
`;
