import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  slots: { base: "flex flex-row rounded-lg py-4 px-6 gap-2" },
  variants: {
    buttonType: {
      primary: "bg-primary-color-400",
      secondary: "bg-surface-secondary",
    },
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export const Button = ({
  buttonType = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const { base } = button({ buttonType });

  return (
    <button className={`${base()} ${className}`} {...props}>
      {children}
    </button>
  );
};
