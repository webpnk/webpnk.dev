import Aws from '@/Components/Icons/Aws';
import Cloudflare from '@/Components/Icons/Cloudflare';
import Laravel from '@/Components/Icons/Laravel';
import Next from '@/Components/Icons/Next';
import React from '@/Components/Icons/React';
import Tailwind from '@/Components/Icons/Tailwind';
import Typescript from '@/Components/Icons/Typescript';
import Vercel from '@/Components/Icons/Vercel';
import FancyLayout from '@/Layouts/FancyLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ComponentProps, ReactNode, useMemo } from 'react';
import { FaEnvelope, FaSuitcase } from 'react-icons/fa';
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
                'motion-duration-300 motion-loop-once max-sm:motion-preset-stretch-lg sm:motion-preset-bounce',
                motionDelay,
                className,
            )}
            {...props}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-6xl max-sm:text-8xl">{icon}</div>
                <h3 className="text-2xl font-bold max-sm:text-4xl">{title}</h3>
                <p className="text-gray-700 max-sm:text-2xl">{description}</p>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <Head>
                <title>My Skills & Tech Stack</title>
            </Head>
            <div className="w-full">
                <h2 className="mb-16 text-center text-6xl font-extrabold">
                    Things I'm really{' '}
                    <span className="text-neon-carrot">strong at</span>
                </h2>

                <div className="mb-16 grid grid-cols-1 gap-6 max-sm:px-4 md:grid-cols-2 lg:grid-cols-4">
                    {technologies.map((tech, index) => (
                        <TechCard className="" key={index} {...tech} />
                    ))}
                </div>

                <div className="flex w-full justify-center gap-x-4 max-sm:flex-col max-sm:gap-y-4 max-sm:px-2">
                    <Link className="btn text-2xl" href="/my-work">
                        <FaSuitcase />
                        See my work
                    </Link>

                    <a
                        className="btn btn-secondary text-2xl"
                        href="mailto:webpnk.dev@gmail.com"
                    >
                        <FaEnvelope />
                        Contact Me!
                    </a>
                </div>
            </div>
        </>
    );
};

Skills.layout = (page: ReactNode) => <FancyLayout>{page}</FancyLayout>;

export default Skills;
