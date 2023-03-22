import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';

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
    toPage,
    setPage,
    type,
    value,
    content
}) => {
    const [score, setScore] = useContext(ScoreContext);
    const handleClick = (e) => {
        setPage(toPage);
        setScore({
            ...score,
            [type]: score[type] + value,
        });
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
