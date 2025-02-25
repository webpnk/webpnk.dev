import Deploy from '@/Components/Cards/Deploy';
import Student from '@/Components/Cards/Student';
import TechStack from '@/Components/Cards/TechStack';
import Wizard from '@/Components/Cards/Wizard';
import FancyLayout from '@/Layouts/FancyLayout';
import { Head, Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import {
    FaCode,
    FaEnvelope,
    FaFilePdf,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import me from '../../images/me.webp';

const Welcome = () => {
    return (
        <>
            <Head>
                <title>Dmytro Shatrov</title>
            </Head>
            <div className="flex flex-col items-center gap-y-16">
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

                            <div className="mb-6 aspect-square h-60 overflow-hidden rounded-full bg-indigo-50 ring-4 ring-neon-carrot-700 ring-offset-4 sm:hidden">
                                <img
                                    src={me}
                                    alt="Dmytro Shatrov"
                                    className="h-full w-full object-cover motion-rotate-in-[360deg] motion-ease-spring-bouncier"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-6 sm:flex-row">
                                <a
                                    href="/cv"
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
                                        href="https://www.linkedin.com/in/dshatrovua/"
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
                        <div className="aspect-square h-60 overflow-hidden rounded-full bg-indigo-50 ring-4 ring-neon-carrot-700 ring-offset-4 max-sm:hidden sm:h-80">
                            <img
                                src={me}
                                alt="Dmytro Shatrov"
                                className="h-full w-full object-cover motion-rotate-in-[360deg] motion-ease-spring-bouncier"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="mb-16 text-center text-6xl font-extrabold">
                        Why you probably should{' '}
                        <span className="text-neon-carrot">hire me</span>
                    </h2>

                    <div className="mx-auto mb-16 grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-6 lg:grid-cols-12">
                        <div className="col-span-full sm:col-span-4 lg:col-span-5">
                            <Student />
                        </div>

                        <div className="col-span-full sm:col-span-2 lg:col-span-7">
                            <Wizard />
                        </div>

                        <div className="col-span-full sm:col-span-3 lg:col-span-7">
                            <TechStack />
                        </div>

                        <div className="col-span-full sm:col-span-3 lg:col-span-5">
                            <Deploy />
                        </div>
                    </div>

                    <div className="flex w-full justify-center gap-x-4">
                        <Link className="btn text-2xl" href="/skills">
                            <FaCode />
                            Explore my skills
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
            </div>
        </>
    );
};

Welcome.layout = (page: ReactNode) => <FancyLayout>{page}</FancyLayout>;

export default Welcome;
