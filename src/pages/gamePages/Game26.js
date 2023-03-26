import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game26 = ({
    variants,
    container,
    name,
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
            <motion.h2 className='m-0'>"นี่ๆ เราอยากรู้จัก{name}มากขึ้นอ่ะ ช่วยเล่าเรื่องตัวเองให้ฟังหน่อย" คุณก็เลยเล่าเกี่ยวกับเรื่อง...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"ชีวิตในวัยเด็ก"} toPage={27} setPage={setPage} type={'NS'} value={2}></GameButton>
                <GameButton content={"งานอดิเรกที่ชอบทำ"} toPage={27} setPage={setPage} type={'NS'} value={1}></GameButton>
                <GameButton content={"มุมมองต่อความรัก"} toPage={27} setPage={setPage} type={'NS'} value={-1}></GameButton>
                <GameButton content={"เป้าหมายของชีวิต"} toPage={27} setPage={setPage} type={'NS'} value={-2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game26;