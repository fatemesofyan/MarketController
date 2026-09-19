export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  shape = "pill",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-2"+
     "text-base font-medium transition-all duration-200 cursor-pointer";

  const variantClasses = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-hover",

    secondary:
      "bg-surface-card text-brand-primary "+
      "border-2 border-brand-primary hover:bg-brand-primary hover:text-white",
   
      outline:
      "bg-transparent text-brand-primary border-1 border-brand-primary"+
       "hover:bg-surface-section",

    ghost:
      "bg-transparent text-brand-primary border border-brand-primary "+
      "hover:bg-brand-primary hover:text-white",
  };

  const shapeClasses = {
    rounded: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none",
  };

  const hoverScale = "hover:scale-105";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${shapeClasses[shape]} ${hoverScale} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
