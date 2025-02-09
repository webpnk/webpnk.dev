import FeatureCard from '@/Components/FeatureCard';
import FancyLayout from '@/Layouts/FancyLayout';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import me from '../../images/me.gif';
import planet from '../../images/planet.png';
import pug from '../../images/pug.png';
import ship from '../../images/ship.png';
import wise from '../../images/wise.png';

export default function Welcome() {
    return (
        <FancyLayout>
            <div className="flex flex-col items-center">
                <div className="/max-w-5xl mb-16 flex w-full flex-col items-start px-8">
                    <div className="flex w-full items-center justify-between">
                        <div className="max-w-2xl text-gray-800">
                            <p className="motion-preset-shake mb-4 text-2xl text-gray-500">
                                Hey there 👋
                            </p>

                            <h1 className="mb-4 text-6xl font-extrabold">
                                I'm{' '}
                                <span className="text-neon-carrot-500">
                                    Dmytro Shatrov
                                </span>
                            </h1>
                            <h2 className="mb-6 text-4xl font-bold">
                                a Software Engineer who{' '}
                                <span className="text-fuchsia-500">cares</span>
                            </h2>

                            <div className="flex items-center gap-6">
                                <button className="btn">
                                    <FaFilePdf /> Download CV
                                </button>

                                <div className="flex items-center gap-3">
                                    <a
                                        href="#"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaXTwitter size={32} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaLinkedin size={32} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-700 transition-opacity hover:opacity-90"
                                    >
                                        <FaGithub size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="ring-neon-carrot-700 aspect-square h-80 overflow-hidden rounded-full bg-indigo-50 ring-4 ring-offset-4">
                            <img
                                src={me}
                                alt="Dmytro Shatrov"
                                className="motion-rotate-in-[360deg] motion-ease-spring-bouncier h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-8 px-4 md:grid-cols-4">
                    <FeatureCard
                        className="-rotate-3"
                        heading={
                            <>
                                📍Based in{' '}
                                <span className="text-red-700">Ukraine</span>
                            </>
                        }
                        image={
                            <motion.img
                                initial={{ rotate: -3, scale: 1.4 }}
                                whileHover={{ rotate: 0, scale: 1.6 }}
                                src={planet}
                                alt="Location"
                                className="mt-6 w-full"
                            />
                        }
                    />
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
        </FancyLayout>
    );
}
