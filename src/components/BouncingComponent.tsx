import { motion } from 'framer-motion';

function BouncingComponent({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0], // Moves up and down
            }}
            transition={{
                duration: 1, // Duration of one bounce
                repeat: Number.POSITIVE_INFINITY, // Makes it repeat
                repeatType: 'loop', // Ensures a smooth loop
            }}
        >
            {children}
        </motion.div>
    );
}

export default BouncingComponent;
