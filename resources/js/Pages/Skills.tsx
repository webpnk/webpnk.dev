import Aws from '@/Components/Icons/Aws';
import Cloudflare from '@/Components/Icons/Cloudflare';
import Laravel from '@/Components/Icons/Laravel';
import Next from '@/Components/Icons/Next';
import React from '@/Components/Icons/React';
import Tailwind from '@/Components/Icons/Tailwind';
import Typescript from '@/Components/Icons/Typescript';
import Vercel from '@/Components/Icons/Vercel';
import FancyLayout from '@/Layouts/FancyLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ComponentProps, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface TechCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    borderColor: string;
}

const delays = [
    '',
    '',
    'motion-delay-75',
    'motion-delay-75',
    'motion-delay-100',
    'motion-delay-150',
];

const technologies = [
    {
        icon: <Laravel className="text-8xl" />,
        title: 'Laravel',
        description:
            'PHP framework for building robust web applications with elegant syntax',
        color: 'bg-red-50',
        borderColor: 'border-red-700',
    },
    {
        icon: <React className="text-8xl" />,
        title: 'React',
        description: 'JavaScript library for building dynamic user interfaces',
        color: 'bg-blue-50',
        borderColor: 'border-blue-700',
    },
    {
        icon: <Next className="text-8xl" />,
        title: 'Next.js',
        description: 'React framework for production-grade applications',
        color: 'bg-gray-50',
        borderColor: 'border-gray-700',
    },
    {
        icon: <Typescript className="text-8xl" />,
        title: 'TypeScript',
        description: 'Typed superset of JavaScript for safer code',
        color: 'bg-blue-50',
        borderColor: 'border-blue-700',
    },
    {
        icon: <Tailwind className="text-8xl" />,
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development',
        color: 'bg-teal-50',
        borderColor: 'border-teal-700',
    },
    {
        icon: <Aws className="text-8xl" />,
        title: 'AWS',
        description: 'Cloud computing services for modern applications',
        color: 'bg-yellow-50',
        borderColor: 'border-yellow-700',
    },
    {
        icon: <Vercel className="text-8xl" />,
        title: 'Vercel',
        description: 'Platform for frontend frameworks and static sites',
        color: 'bg-gray-50',
        borderColor: 'border-gray-700',
    },
    {
        icon: <Cloudflare className="text-8xl" />,
        title: 'Cloudflare',
        description: 'Edge computing and security services',
        color: 'bg-orange-50',
        borderColor: 'border-orange-700',
    },
];

const TechCard = ({
    icon,
    title,
    description,
    color,
    borderColor,
    className,
    ...props
}: TechCardProps & ComponentProps<typeof motion.div>) => {
    const motionDelay = useMemo(() => {
        return delays[Math.floor(Math.random() * delays.length)];
    }, []);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={twMerge(
                `${color} rounded-xl border-2 p-6 ${borderColor} shadow-lg`,
                'motion-preset-bounce',
                motionDelay,
                className,
            )}
            {...props}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-6xl">{icon}</div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <FancyLayout>
            <Head>
                <title>My Skills & Tech Stack</title>
            </Head>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {technologies.map((tech, index) => (
                    <TechCard className="" key={index} {...tech} />
                ))}
            </div>
        </FancyLayout>
    );
}
