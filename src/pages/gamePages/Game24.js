import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game24 = ({
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
                <motion.h1 variants={item}>"{name}!" เสียงดังขึ้นอีกครั้ง</motion.h1>
                <motion.h2 variants={item}>แต่ครั้งนี้เป็นเสียงของคนที่คุณชอบแหละ!</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game24;