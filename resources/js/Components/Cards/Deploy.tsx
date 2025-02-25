import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import ship from '../../../images/ship.webp';

const cardVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
    },
};

const imageVariants = {
    initial: {
        scale: 1.05,
        rotate: 0,
    },
    hover: {
        // scale: 1.04,
        rotate: -4,
    },
};

export default function Deploy() {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring' }}
            className="group relative h-full origin-bottom-left rounded-3xl bg-gradient-to-tl from-indigo-500/90 to-indigo-600/90 p-6 text-white"
        >
            <div className="flex h-full flex-col justify-end">
                <h3 className="mb-3 text-4xl font-bold">Ship to</h3>
                <div className="space-y-1 text-lg text-white/80">
                    <p>AWS • Vercel • Cloudflare • Docker</p>
                    <p>CI/CD • Microservices • Scaling</p>
                </div>
            </div>

            <motion.img
                variants={imageVariants}
                transition={{
                    type: 'spring',
                    repeatType: 'mirror',
                    repeat: 999,
                }}
                src={ship}
                alt="Shipping"
                className={twMerge(
                    'w-54 absolute -right-[16px] -top-[80px] h-72 origin-bottom object-cover drop-shadow-xl',
                )}
            />
        </motion.div>
    );
}
