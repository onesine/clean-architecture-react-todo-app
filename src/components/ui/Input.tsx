import { cn } from "@libs/style.ts";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const Input = (props: Props) => {
    const { type = "text", className, ...rest } = props;
    return (
        <input
            {...rest}
            type={type}
            className={cn({
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50":
                    true,
                [className || ""]: true
            })}
        />
    );
};

export default Input;
