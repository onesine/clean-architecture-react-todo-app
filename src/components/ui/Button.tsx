import { cn } from "@libs/style.ts";
import Loading from "@ui/Loading.tsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    disabled?: boolean;
    withAuto?: boolean;
}

const Button = (props: Props) => {
    const { loading, withAuto = false, disabled = false, className, children, ...rest } = props;

    return (
        <button
            {...rest}
            disabled={disabled}
            className={cn({
                "flex items-center font-medium justify-center px-6 text-base rounded-md": true,
                "w-full rounded-md space-x-3 disabled:cursor-not-allowed": true,
                "bg-blue-600 text-white": true,
                "focus:outline-none focus:ring": true,
                "focus:border-blue-600 focus:ring-blue-600/20": true,
                "cursor-not-allowed": disabled || loading,
                "bg-blue-700": disabled || loading,
                "w-auto": withAuto,
                "py-2": true,
                [className || ""]: true
            })}
        >
            {loading && (
                <Loading
                    className={cn({
                        "-mr-2": true
                    })}
                />
            )}
            <span>{children}</span>
        </button>
    );
};

export default Button;
