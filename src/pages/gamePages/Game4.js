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
            <motion.h2 variants={item}>เฮ้อ ไหน ๆ ก็ตื่นแล้ว ทำอะไรดีนะ...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"อยู่บ้านนอนเล่น"} toPage={5} setPage={setPage} type={'IE'} value={-1}></GameButton>
                <GameButton content={"ออกไปเดินเล่นดีกว่า"} toPage={6} setPage={setPage} type={'IE'} value={1}></GameButton>
                <GameButton content={"กลับไปนอนต่อก็ไม่เลวนะ"} toPage={5} setPage={setPage} type={'IE'} value={-2}></GameButton>
                <GameButton content={"โทรชวนเพื่อนไปเที่ยว"} toPage={6} setPage={setPage} type={'IE'} value={2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game4;