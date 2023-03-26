import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game25 = ({
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
                <motion.h1 variants={item}>เขายิ้มให้คุณอย่างอบอุ่นก่อนที่จะชวนคุณคุยด้วย</motion.h1>
                <motion.h2 variants={item}>คุณก็แอบหุบยิ้มไม่ได้เลยเวลาที่เขายิ้มให้</motion.h2>
                <motion.h2 variants={item}>สายตาที่มองมาทำให้ใจคุณเต้นไม่หยุด</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game25;