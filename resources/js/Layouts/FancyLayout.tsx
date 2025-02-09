import { Tab, Tabs } from '@heroui/tabs';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { FaFolder, FaGraduationCap, FaTwitter, FaUser } from 'react-icons/fa';

const tabs = [
    { name: 'General Info', icon: <FaUser />, href: '/' },
    { name: 'Education', icon: <FaGraduationCap />, href: '/education' },
    { name: 'Project History', icon: <FaFolder />, href: '/projects' },
    { name: 'Tweets', icon: <FaTwitter />, href: '/tweets' },
];

export default function FancyLayout({ children }: PropsWithChildren) {
    const path = usePage().url;

    return (
        <div className="mx-auto min-h-screen max-w-[1200px] pb-20">
            <div className="mx-auto flex flex-col items-center justify-center gap-y-8 px-4 py-4 pb-16 sm:px-6 lg:px-8">
                <Tabs
                    selectedKey={path}
                    aria-label="Options"
                    classNames={{
                        tabList: 'py-4 bg-transparent',
                        tab: 'btn data-[selected]:bg-white data-[hover]:opacity-100 px-6 py-5',
                        tabContent: 'text-neon-carrot-900 text-medium',
                    }}
                    disableAnimation
                >
                    {tabs.map((t) => (
                        <Tab
                            as={Link}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            prefetch="mount"
                            key={t.href}
                            href={t.href}
                            title={
                                <div className="flex items-center space-x-2">
                                    {t.icon}
                                    <span>{t.name}</span>
                                </div>
                            }
                        />
                    ))}
                </Tabs>
            </div>

            {children}
        </div>
    );
}
