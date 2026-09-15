export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  ...props
}) {
  const baseClasses =
    "w-full rounded-full py-3 pr-5 pl-5 " +
    "bg-surface-card text-right text-text-primary placeholder:text-text-muted " +
    "border border-border-default " +
    "transition-all duration-200 " +
    "focus:outline-none focus:border-brand-primary " +
    "focus:ring-2 focus:ring-brand-primary/20 " +
    "disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}