import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game23 = ({
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
            <motion.h2 className='m-0'>เพื่อนของคุณเดินมาพร้อมกับคนที่คุณชอบแหละ! คุณเลย...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"ทักเพื่อนสนิทของคุณ แล้วแกล้งทำเป็นไม่สนใจคนที่คุณชอบเพราะเขิน"} toPage={24} setPage={setPage} type={'IE'} value={-1}></GameButton>
                <GameButton content={"ทักเพื่อนสนิทก่อน แล้วค่อยทักคนที่คุณชอบ"} toPage={25} setPage={setPage} type={'IE'} value={1}></GameButton>
                <GameButton content={"เขินมากเลยทำเนียนเป็นไม่ได้ยินดีกว่า"} toPage={24} setPage={setPage} type={'IE'} value={-2}></GameButton>
                <GameButton content={"ยิ้มให้คนที่คุณชอบ แล้วก็เนียนทำความรู้จักซะเลย"} toPage={25} setPage={setPage} type={'IE'} value={2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game23;