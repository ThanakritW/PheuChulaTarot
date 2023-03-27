import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game14 = ({
    variants,
    container,
}) => {
    const [page, setPage] = useContext(PageContext);
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
            <motion.h2 className='m-0'>"เอ... จะใส่ชุดไหนดีนะ ชุดเยอะแยะไปหมดเลย...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"ชุดที่เคยใส่ไปงานปาร์ตี้ก่อน แล้วคนชมว่าปังมาก!"} toPage={15} setPage={setPage} type={'NS'} value={2}></GameButton>
                <GameButton content={"ชุดที่ซื้อมาเมื่อนานมาแล้ว แต่ยังไม่เคยได้ลองใส่เลย ลองเปลี่ยนลุคบ้าง!"} toPage={15} setPage={setPage} type={'NS'} value={-2}></GameButton>
                <GameButton content={"ชุดหรูหรา ใส่ไปงานรับรองว่าใครก็ต้องจับตามอง!"} toPage={15} setPage={setPage} type={'NS'} value={1}></GameButton>
                <GameButton content={"ชุดที่แสดงออกถึงความเป็นตัวของเราเองนี่แหละดีสุดแล้ว!"} toPage={15} setPage={setPage} type={'NS'} value={-1}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game14;