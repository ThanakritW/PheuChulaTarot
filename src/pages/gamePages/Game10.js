import { easeOut, motion } from 'framer-motion';
import { PageContext } from '../component/PageContext';
import { useContext } from 'react';
const Game10 = ({
    variants,
    name,
    container,
    item
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage((page => page + 1))}
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
                <motion.h2 variants={item}>เพื่อนของ{name}กำลังเล่าเรื่องให้เกนฟังอยู่ก่อนที่จู่ๆ สายก็ตัดไป</motion.h2>
                <motion.h2 variants={item}>สักครู่หนึ่ง เพื่อนก็ทักแชทมาหาคุณใหม่</motion.h2>
                <motion.h2 variants={item}>"{name}!! เขามาชวนเราไปปาร์ตี้วันเกิดตอนเที่ยงด้วย!!"</motion.h2>
                <motion.h1 variants={item}>"แถมคนที่{name}ชอบก็จะไปด้วยเหมือนกันนะ"</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game10;