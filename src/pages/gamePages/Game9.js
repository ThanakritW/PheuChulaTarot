import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game9 = ({
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
            <motion.h2 className='m-0'>หลังจากฟังเพื่อนของคุณเล่าจบ คุณก็เลยถามว่า...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"เปลี่ยนเรื่อง : \"ว่าแต่สอบที่ผ่านมาเป็นยังไงบ้างง\""} toPage={10} setPage={setPage} type={'NS'} value={2}></GameButton>
                <GameButton content={"รายละเอียด : \"นี่ๆ เล่าเหตุการณ์เพิ่มเติมหน่อย อยากฟังง\""} toPage={10} setPage={setPage} type={'NS'} value={1}></GameButton>
                <GameButton content={"สนับสนุน : \"เหยย แล้วเมื่อไหร่จะเข้าไปจีบเขาหล่ะ!\""} toPage={10} setPage={setPage} type={'NS'} value={-2}></GameButton>
                <GameButton content={"เหตุผล : \"เอ.. สงสัยจังเลย ทำไมเธอถึงชอบเขานะ\""} toPage={10} setPage={setPage} type={'NS'} value={-1}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game9;