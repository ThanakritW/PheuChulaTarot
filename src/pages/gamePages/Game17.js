import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game17 = ({
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
            <motion.h2 className='m-0'>แล้วเราซื้ออะไรให้เป็นของขวัญดีนะ...</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"เซ็ทเครื่องเขียนเรียบง่าย"} toPage={18} setPage={setPage} type={'TF'} value={-2}></GameButton>
                <GameButton content={"นาฬิกาข้อมือสวยหรู"} toPage={19} setPage={setPage} type={'TF'} value={2}></GameButton>
                <GameButton content={"ตุ๊กตาแมวน่ารักๆ"} toPage={20} setPage={setPage} type={'TF'} value={-1}></GameButton>
                <GameButton content={"ดอกไม้ช่อโตกลิ่นหอม"} toPage={21} setPage={setPage} type={'TF'} value={1}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game17;