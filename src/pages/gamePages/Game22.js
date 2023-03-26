import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game22 = ({
    variants,
    container,
    item,
    name
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage(page + 1)}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h2 variants={item}>เมื่อถึงงานแล้ว คุณก็เลยเอาของขวัญไปให้เจ้าของวันเกิด</motion.h2>
                <motion.h1 variants={item}>"{name}!" เสียงเพื่อนสนิทคุณดังขึ้น</motion.h1>
                <motion.h2 variants={item}> คุณหันไปทักทายแต่ว่า...</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game22;