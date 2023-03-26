import { easeOut, motion } from 'framer-motion';
const Game8 = ({
    page,
    setPage,
    variants,
    name,
    container,
    item
}) => {
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
                <motion.h2 variants={item}>เพื่อนสนิทเล่าเรื่องให้ฟังด้วยน้ำเสียงตื้นเต้น</motion.h2>
                <motion.h2 variants={item}>คุณเองก็แอบอดยิ้มไม่ได้กับเรื่องที่ได้ยิน</motion.h2>
                <motion.h1 variants={item}>"เฮ้อ ถ้าหากว่าเราเจอเหตุการณ์แบบนี้บ้างก็คงดี"</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game8;