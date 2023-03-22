import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
const Game4 = ({
    page,
    setPage,
    variants,
    container,
    item
}) => {
    return (
        <motion.div className="App color-white"
            style={{ display: "flex", flexDirection: 'column' }}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.h1 variants={item}>เฮ้อ ไหน ๆ ก็ตื่นแล้ว ทำอะไรดีนะ</motion.h1>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"อยู่บ้านนอนเล่น"} toPage={1} setPage={setPage} type={'IE'} value={1}></GameButton>
                <GameButton content={"โทรชวนเพื่อนไปเที่ยว"} toPage={2} setPage={setPage} type={'IE'} value={2}></GameButton>
                <GameButton content={"ออกไปเดินเล่นดีกว่า"} toPage={3} setPage={setPage} type={'IE'} value={3}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game4;