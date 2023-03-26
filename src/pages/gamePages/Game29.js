import { easeOut, motion } from 'framer-motion';
import GameButton from '../component/GameButton';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game29 = ({
    variants,
    container,
    name
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
            <motion.h2 className='m-0'>เพื่อนสนิทคุณหันมาหาคุณแล้วถามว่า "หรือว่าเขาก็ชอบ{name}เหมือนกันน้า"</motion.h2>
            <motion.div
                className="button-container"
                variants={container}
                initial="hidden"
                animate="show">
                <GameButton content={"เขาแค่ใจดีเฉยๆ แหละ เขาคงทำตัวน่ารักแบบนี้กับทุกคน"} toPage={30} setPage={setPage} type={'TF'} value={-2}></GameButton>
                <GameButton content={"เขาชอบเราแน่ๆ ใจละลายหมดแล้วว "} toPage={30} setPage={setPage} type={'TF'} value={1}></GameButton>
                <GameButton content={"ก็ไม่แน่นะ เขาก็ยิ้มให้เราด้วยหนิ"} toPage={30} setPage={setPage} type={'TF'} value={-1}></GameButton>
                <GameButton content={["*ไม่พูดอะไร แต่หน้าแดงไปหมดแล้ว*", <br />, "Σ>―(〃•ᴗ•〃)♡→"]} toPage={30} setPage={setPage} type={'TF'} value={2}></GameButton>
            </motion.div>
        </motion.div >
    );
}

export default Game29;