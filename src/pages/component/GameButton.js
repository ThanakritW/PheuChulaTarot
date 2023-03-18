import { motion } from 'framer-motion';

const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const GameButton = ({
    score,
    setScore,
    toPage,
    setPage,
    content
}) => {

    const handleClick = event => {
        setPage(toPage);
    };

    return (
        <motion.button
            className="game-button"
            variants={item}
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            onClick={handleClick}
        >
            {content}
        </motion.button >
    );
}

export default GameButton;
