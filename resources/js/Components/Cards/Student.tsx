import { motion } from 'framer-motion';
import graduate from '../../../images/graduate.webp';

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
        scale: 1,
    },
    hover: {
        scale: 1.04,
    },
};

export default function Student() {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring' }}
            className="group relative h-full origin-bottom-right rounded-3xl bg-gradient-to-br from-violet-500/90 to-violet-600/90 p-6 text-white"
        >
            <div>
                <h3 className="mb-3 text-4xl font-bold">Education</h3>
                <p className="text-2xl font-semibold text-violet-100">
                    Master Degree
                </p>
                <p className="text-2xl font-semibold text-violet-100 sm:max-w-36 lg:max-w-none">
                    in{' '}
                    <span className="break-words text-neon-carrot-200">
                        Computer Science
                    </span>
                </p>
            </div>

            <motion.img
                variants={imageVariants}
                transition={{ type: 'spring' }}
                src={graduate}
                alt="Education"
                className="absolute right-0 origin-bottom object-cover drop-shadow-xl max-sm:hidden sm:-bottom-[18px] sm:h-56 sm:w-32 lg:-bottom-[24px] lg:h-72 lg:w-48"
            />
        </motion.div>
    );
}
