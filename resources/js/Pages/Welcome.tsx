import FeatureCard from '@/Components/FeatureCard';
import FancyLayout from '@/Layouts/FancyLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import graduate from '../../images/graduate.webp';
import me from '../../images/me.webp';
import pug from '../../images/pug.webp';
import ship from '../../images/ship.webp';
import wise from '../../images/wise.webp';

const Welcome = ({ cvUrl }: { cvUrl: string }) => {
    return (
        <>
            <Head>
                <title>Dmytro Shatrov</title>
            </Head>
            <div className="flex flex-col items-center">
                <div className="mb-16 flex w-full flex-col items-start px-4 sm:px-8">
                    <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl text-center max-sm:flex max-sm:flex-col max-sm:items-center lg:text-left">
                            <p className="motion-preset-shake mb-4 text-xl text-gray-500 sm:text-2xl">
                                Hey there 👋
                            </p>

                            <h1 className="mb-4 text-4xl font-extrabold sm:text-6xl">
                                I'm{' '}
                                <span className="text-neon-carrot-500">
                                    Dmytro Shatrov
                                </span>
                            </h1>
                            <h2 className="mb-6 text-2xl font-bold sm:text-4xl">
                                a Software Engineer who{' '}
                                <span className="text-fuchsia-500">cares</span>
                            </h2>

                            <div className="ring-neon-carrot-700 mb-6 aspect-square h-60 overflow-hidden rounded-full bg-indigo-50 ring-4 ring-offset-4 sm:hidden">
                                <img
                                    src={me}
                                    alt="Dmytro Shatrov"
                                    className="motion-rotate-in-[360deg] motion-ease-spring-bouncier h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-6 sm:flex-row">
                                <a
                                    href={cvUrl}
                                    target="_blank"
                                    className="btn w-full sm:w-auto"
                                    rel="noreferrer"
                                >
                                    <FaFilePdf /> Download CV
                                </a>

                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://x.com/webpnk_dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaXTwitter size={32} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/tommyromanhater/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaLinkedin size={32} />
                                    </a>
                                    <a
                                        href="https://github.com/webpnk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaGithub size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="ring-neon-carrot-700 aspect-square h-60 overflow-hidden rounded-full bg-indigo-50 ring-4 ring-offset-4 max-sm:hidden sm:h-80">
                            <img
                                src={me}
                                alt="Dmytro Shatrov"
                                className="motion-rotate-in-[360deg] motion-ease-spring-bouncier h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 px-4 max-sm:px-12 sm:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        className="rotate-2 border-pink-700 bg-pink-300"
                        heading={
                            <>
                                <span className="text-pink-700">10 years</span>{' '}
                                in web development
                            </>
                        }
                        image={
                            <motion.img
                                initial={{ rotate: -3, scale: 1.2 }}
                                whileHover={{ rotate: 0, scale: 1.4 }}
                                src={wise}
                                alt="Location"
                                className="mt-4 w-full"
                            />
                        }
                    />

                    <FeatureCard
                        className="-rotate-3 border-yellow-700 bg-yellow-200"
                        heading={
                            <>
                                Master's Degree in{' '}
                                <span className="text-yellow-800">CS</span>
                            </>
                        }
                        image={
                            <motion.img
                                initial={{
                                    rotate: -3,
                                    scale: 1.4,
                                }}
                                whileHover={{ rotate: 0, scale: 1.6 }}
                                src={graduate}
                                alt="Graduate"
                                className="mt-6 w-full"
                            />
                        }
                    />

                    <FeatureCard
                        className="-rotate-1 border-lime-700 bg-lime-200"
                        heading={
                            <>
                                <span className="text-lime-900">
                                    Ultimate expert with
                                </span>{' '}
                                Laravel, React, Next.js
                            </>
                        }
                        image={
                            <motion.img
                                initial={{ rotate: -3 }}
                                whileHover={{ rotate: 0, scale: 1.2 }}
                                src={pug}
                                alt="Location"
                                className="w-full"
                            />
                        }
                    />

                    <FeatureCard
                        className="rotate-[4deg] border-fuchsia-700 bg-fuchsia-200"
                        heading={
                            <>
                                Shipping to{' '}
                                <span className="text-fuchsia-900">
                                    AWS, Vercel, Cloudflare, VPS
                                </span>{' '}
                            </>
                        }
                        image={
                            <motion.img
                                initial={{ rotate: -3, scale: 1.2 }}
                                whileHover={{ rotate: 0, scale: 1.4 }}
                                src={ship}
                                alt="Location"
                                className="w-full"
                            />
                        }
                    />
                </div>
            </div>
        </>
    );
};

Welcome.layout = (page: ReactNode) => <FancyLayout>{page}</FancyLayout>;

export default Welcome;
