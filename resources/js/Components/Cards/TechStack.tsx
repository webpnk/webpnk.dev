import { motion } from 'framer-motion';
import { FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import pug from '../../../images/pug.webp';

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

export default function TechStack() {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring' }}
            className="group relative h-full origin-bottom-right rounded-3xl bg-gradient-to-br from-neon-carrot/90 to-neon-carrot-500/90 p-6 text-white"
        >
            <div>
                <h3 className="mb-3 text-4xl font-bold text-neon-carrot-50">
                    <span className="text-neon-carrot-800">
                        Ultimate expert
                    </span>{' '}
                    with
                </h3>
                <ul className="space-y-1 text-2xl text-neon-carrot-50">
                    <li>
                        <FaPhp className="inline" size={32} /> Laravel & PHP
                    </li>
                    <li>
                        <FaReact className="inline" size={32} /> React & Next.js
                    </li>
                    <li>
                        <SiTypescript className="inline" size={32} /> TypeScript
                    </li>
                    <li>
                        <FaNodeJs className="inline" size={32} /> Node.js
                    </li>
                </ul>
            </div>

            <motion.img
                variants={imageVariants}
                transition={{ type: 'spring' }}
                src={pug}
                alt="Tech Stack"
                className="w-54 absolute -bottom-[18px] -right-[36px] h-72 origin-bottom object-cover drop-shadow-xl"
            />
        </motion.div>
    );
}
