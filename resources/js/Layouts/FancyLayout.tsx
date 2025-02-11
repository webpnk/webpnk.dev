import { Tab, Tabs } from '@heroui/tabs';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { FaCode, FaCompass, FaTwitter, FaUser } from 'react-icons/fa';

const tabs = [
    { name: 'General Info', icon: <FaUser size={20} />, href: '/' },
    { name: 'Skills', icon: <FaCode size={20} />, href: '/skills' },
    {
        name: 'My Work',
        icon: <FaCompass size={20} />,
        href: '/my-work',
    },
    { name: 'Tweets', icon: <FaTwitter size={20} />, href: '/tweets' },
];

export default function FancyLayout({ children }: PropsWithChildren) {
    const path = usePage().url;

    return (
        <div className="mx-auto min-h-screen max-w-[1200px] pb-20">
            <div className="mx-auto flex flex-col items-center justify-center gap-y-8 px-4 py-4 pb-16 max-sm:px-0 sm:pl-6 lg:px-8">
                <div className="scrollbar-hide flex w-full justify-center overflow-x-auto max-sm:justify-start">
                    {/*<div className="min-w-fit">*/}
                    <Tabs
                        selectedKey={path}
                        aria-label="Options"
                        classNames={{
                            tabList:
                                'py-4 bg-transparent flex-nowrap max-sm:px-4 max-sm:motion-preset-wobble-sm max-sm:-motion-translate-x-loop-[20px] max-sm:motion-delay-500 max-sm:motion-loop-twice',
                            tab: 'btn data-[selected]:bg-white data-[hover]:opacity-100 px-6 py-5 whitespace-nowrap',
                            tabContent:
                                'text-neon-carrot-900 text-medium max-sm:text-xl',
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
                    {/*</div>*/}
                </div>
            </div>

            {children}
        </div>
    );
}
