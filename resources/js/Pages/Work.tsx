import LazyVideo from '@/Components/LazyVideo';
import FancyLayout from '@/Layouts/FancyLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { FaAsterisk, FaExternalLinkAlt } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import chartsDemo from '../../assets/charts/demo.mp4';
import earneoDemo from '../../assets/earneo/demo.mp4';
import hushmysantaDemo from '../../assets/hushmysanta/demo.mp4';

const getTechColor = (tech: string) => {
    const colors = [
        { bg: 'bg-blue-100', text: 'text-blue-800' },
        { bg: 'bg-green-100', text: 'text-green-800' },
        { bg: 'bg-purple-100', text: 'text-purple-800' },
        { bg: 'bg-pink-100', text: 'text-pink-800' },
        { bg: 'bg-yellow-100', text: 'text-yellow-800' },
        { bg: 'bg-indigo-100', text: 'text-indigo-800' },
        { bg: 'bg-red-100', text: 'text-red-800' },
        { bg: 'bg-teal-100', text: 'text-teal-800' },
    ];

    // Create a simple hash of the technology name
    const hash = tech
        .split('')
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colorIndex = hash % colors.length;

    return colors[colorIndex];
};

interface ProjectProps {
    title: string;
    description: string;
    longDescription?: string;
    challenges?: string[];
    feedback?: {
        text: Array<{
            content: string;
            highlight?: boolean;
        }>;
        author: string;
        position: string;
    };
    video?: string;
    videoCaption?: string;
    technologies: string[];
    url?: string;
}

const Project = ({
    title,
    description,
    longDescription,
    challenges,
    video,
    videoCaption,
    technologies,
    feedback,
    url,
    className,
    ...props
}: ProjectProps & ComponentProps<typeof motion.div>) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={twMerge(
            'grid grid-cols-1 items-start gap-16 lg:grid-cols-2',
            className,
        )}
        {...props}
    >
        <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-5xl font-bold text-gray-800">{title}</h2>
            <p className="mb-4 text-xl text-gray-600">{description}</p>
            {longDescription && (
                <p className="mb-8 text-lg text-gray-500">{longDescription}</p>
            )}

            {challenges && challenges.length > 0 && (
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold text-gray-700">
                        Technical Challenges
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-lg text-gray-600">
                        {challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mb-8 flex flex-wrap gap-2">
                {technologies.map((tech, index) => {
                    const { bg, text } = getTechColor(tech);
                    return (
                        <span
                            key={index}
                            className={`rounded-lg px-3 py-1 text-lg font-medium ${bg} ${text}`}
                        >
                            {tech}
                        </span>
                    );
                })}
            </div>

            {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary self-start"
                >
                    View Project
                    <FaExternalLinkAlt size={14} />
                </a>
            )}
        </div>

        <div className="flex flex-col gap-8">
            {video && (
                <div className="flex flex-col gap-2">
                    <LazyVideo
                        src={video}
                        className="h-full w-full object-cover"
                    />
                    {videoCaption && (
                        <p className="inline-flex gap-2 text-sm italic text-gray-500">
                            <span className="pt-1 font-bold text-red-500">
                                <FaAsterisk size={8} />
                            </span>
                            {videoCaption}
                        </p>
                    )}
                </div>
            )}

            {feedback && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-neon-carrot flex flex-col justify-center rounded-xl border-4 bg-gray-800 p-8"
                >
                    <p className="border-l-neon-carrot mb-6 border-l-4 pl-3 text-xl font-extrabold leading-relaxed text-white">
                        {feedback.text.map((segment, index) => (
                            <span
                                key={index}
                                className={
                                    segment.highlight
                                        ? 'text-neon-carrot-400'
                                        : ''
                                }
                            >
                                {segment.content}
                            </span>
                        ))}
                    </p>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-white">
                            {feedback.author}
                        </span>
                        {feedback.position && (
                            <span className="text-base text-gray-400">
                                {feedback.position}
                            </span>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    </motion.div>
);

const projects: ProjectProps[] = [
    {
        title: 'Earneo.tube',
        description:
            'A blockchain-powered video hosting platform that rewards both creators and viewers',
        longDescription:
            'Developed a decentralized video platform where users earn RNO tokens for watching content and creators get rewarded for publishing. Built with a robust AWS infrastructure utilizing ElasticBeanstalk, Aurora DB, SQS for queue management, Elasticache for performance optimization, and Storj distributed storage for media content.',
        challenges: [
            'Optimizing high-load performance for thousands of concurrent users',
            'Complex SQL query optimization for efficient data retrieval',
            'Implementation of efficient load balancing across multiple servers',
            'Setting up distributed storage system for media content',
        ],
        video: earneoDemo,
        technologies: [
            'Laravel',
            'React',
            'TypeScript',
            'Express.js',
            'AWS ElasticBeanstalk',
            'Aurora DB',
            'AWS SQS',
            'Elasticache',
            'Storj',
        ],
        feedback: {
            text: [
                { content: 'Thanks for all the work', highlight: true },
                {
                    content:
                        ' you have done for Earneo. We would not have been where we are right now, ',
                },
                { content: 'without you', highlight: true },
                { content: '.' },
            ],
            author: 'Damien',
            position: 'CEO Earneo',
        },
    },
    {
        title: 'HushMySanta.com',
        description:
            'A modern Secret Santa organizer that makes holiday gift exchanges magical and stress-free',
        longDescription:
            'Developed a user-friendly platform for organizing Secret Santa events with a strong focus on SEO performance and user experience. Built with Laravel and React, utilizing server-side rendering for optimal search engine visibility and enhanced performance. The platform features comprehensive analytics integration and a powerful admin panel for content management.',
        challenges: [
            'Implementing SSR with Laravel and Inertia.js for optimal SEO performance',
            'Developing keyword-driven content strategy based on analytics data',
            'Creating an efficient admin interface with Filament for content management',
            'Setting up containerized infrastructure with Coolify and Docker',
        ],
        technologies: [
            'Laravel',
            'React',
            'Inertia.js',
            'Typescript',
            'tailwindcss',
            'Node.js',
            'Docker',
            'Coolify',
            'Filament',
            'PostHog',
        ],
        video: hushmysantaDemo,
        url: 'https://hushmysanta.com',
    },
    {
        title: 'Music Charts CMS (NDA)',
        description:
            'Enterprise-level content management system for music charts with microservices architecture',
        longDescription:
            'Built a comprehensive CMS platform with distributed architecture, featuring internal tools, service workers, and API gateway. Led the frontend team in developing modern client applications while implementing robust backend services and scheduled jobs.',
        challenges: [
            'Designing and implementing microservices architecture with multiple interconnected systems',
            'Building scalable API gateway for handling internal and public endpoints',
            'Leading frontend team and establishing development workflows',
            'Setting up infrastructure as code using Terraform',
            'Implementing real-time data processing with service workers',
        ],
        video: chartsDemo,
        videoCaption:
            "This is a v0-generated basic UI replica, the actual project demo can not be shared in order to keep client's privacy",
        technologies: [
            'PHP',
            'Laravel',
            'Livewire',
            'Next.js',
            'React',
            'TypeScript',
            'Terraform',
            'AWS',
            'tailwindcss',
        ],
        feedback: {
            text: [
                { content: 'We are going to miss ', highlight: false },
                { content: 'Dmytro', highlight: true },
                { content: ", he's been ", highlight: false },
                { content: 'invaluable to the project', highlight: true },
                { content: '!', highlight: false },
            ],
            author: 'Ted',
            position: 'VP of Engineering',
        },
    },
    // Add more projects...
];

export default function Work() {
    return (
        <FancyLayout>
            <Head>
                <title>My Work</title>
            </Head>
            <h1 className="mb-24 text-6xl font-extrabold">
                Experience &{' '}
                <span className="text-neon-carrot-500">Projects</span>
            </h1>

            <div className="flex flex-col gap-y-20">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </FancyLayout>
    );
}
