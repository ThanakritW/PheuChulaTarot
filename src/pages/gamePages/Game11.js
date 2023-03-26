import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
const Game11 = ({
    page,
    setPage,
    variants,
    container,
    item,
    name
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
            <motion.h2 className='m-0' variants={item}>"{name} ไปด้วยกันมั้ยย"<br />ใจของคุณเต้นแรง ก่อนที่จะตอบเพื่อนไปว่า...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"ไปสิ! ถ้าคนนั้นไปด้วย เราไปอยู่แล้วว"} toPage={13} setPage={setPage} type={'IE'} value={2}></GameButton>
                <GameButton content={"ไปก็ได้ เผื่อจะได้ช่วยเธอจีบคนนั้นไง >~<"} toPage={13} setPage={setPage} type={'IE'} value={1}></GameButton>
                <GameButton content={"ไหนๆ เธอก็ชวนแล้ว ไปก็ได้"} toPage={13} setPage={setPage} type={'IE'} value={-1}></GameButton>
                <GameButton content={"ไม่น่าได้ไปอ่า ต้องอ่านหนังสือ"} toPage={12} setPage={setPage} type={'IE'} value={-2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game11;