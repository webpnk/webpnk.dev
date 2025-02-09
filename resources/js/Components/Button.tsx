import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button className={twMerge('btn', className)} {...props}>
            {children}
        </button>
    );
}
