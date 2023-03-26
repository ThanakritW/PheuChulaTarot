import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
const Game7 = ({
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
            <motion.h2 className='m-0' variants={item}>"{name}!! เค้าเจอคนที่แอบชอบด้วย!"</motion.h2>
            <motion.h2 className='m-0' variants={item}>เสียงที่คุนหูดังขึ้น เสียงนั้นก็คือเพื่อนสนิทของ{name}นี่เอง</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"รู้แล้วหน่าว่าตื่นเต้น ไหนอาการเป็นยังไง เล่ามาซิ"} toPage={8} setPage={setPage} type={'TF'} value={-2}></GameButton>
                <GameButton content={"ห๊าาา ที่ไหน เกิดอะไรขึ้น"} toPage={8} setPage={setPage} type={'TF'} value={-1}></GameButton>
                <GameButton content={"แกเป็นไงบ้าง ยังอยู่ดีมั้ยหรือใจลอยไปกับเขาแล้ว >~<"} toPage={8} setPage={setPage} type={'TF'} value={1}></GameButton>
                <GameButton content={"หึ้ยย โอกาสมาแล้ว เข้าไปจีบเลยๆๆ"} toPage={8} setPage={setPage} type={'TF'} value={2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game7;