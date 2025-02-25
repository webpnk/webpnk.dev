import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import wise from '../../../images/wise.webp';

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
        scale: 1.03,
    },
};

export default function Wizard() {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring' }}
            className="group relative h-[300px] origin-bottom-left rounded-3xl bg-gradient-to-br from-pink-500/90 to-pink-600/90 px-6 pt-3 text-white"
        >
            <div>
                <h3 className="text-4xl font-bold text-lime-200">6+ years</h3>
                <h3 className="mb-6 text-4xl font-bold text-pink-100">
                    in the industry
                </h3>

                <div className="space-y-4">
                    <ul className="space-y-1 text-pink-100">
                        <li className="text-2xl">
                            <FaCheck className="inline text-lime-200" /> Backend
                            Development
                        </li>
                        <li className="text-2xl">
                            <FaCheck className="inline text-lime-200" /> Full
                            Stack Development
                        </li>
                        <li className="text-2xl">
                            <FaCheck className="inline text-lime-200" /> Team
                            Leadership
                        </li>
                    </ul>
                </div>
            </div>

            <motion.img
                transition={{ type: 'spring' }}
                variants={imageVariants}
                src={wise}
                alt="Experience"
                className="absolute -bottom-[36px] -right-[24px] w-80 origin-bottom object-cover drop-shadow-xl"
            />
        </motion.div>
    );
}
