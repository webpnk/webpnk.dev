import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FeatureCardProps = {
    heading: ReactNode;
    image: ReactNode;
};

export default function FeatureCard({
    heading,
    image,
    className,
    ...props
}: ComponentProps<'div'> & FeatureCardProps) {
    return (
        <div
            className={twMerge(
                'flex transform flex-col rounded-lg border-2 border-amber-800 bg-amber-100 p-6 shadow-lg',
                className,
            )}
            {...props}
        >
            <h2 className="text-3xl font-extrabold text-gray-900">{heading}</h2>
            <div className="flex justify-center">{image}</div>
        </div>
    );
}
