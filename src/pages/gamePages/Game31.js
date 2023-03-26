import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game31 = ({
    variants,
    container,
    item,
    name
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage(page + 1)}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h1 variants={item}>"เดี๋ยวก่อน{name} อย่าเพิ่งรีบไป ไพ่ยิปซีของยายมีอะไรอยากจะบอก{name}ด้วยนะ"</motion.h1>
                <motion.h2 variants={item}>คุณมองด้วยความสงสัย ยายรู้ชื่อเราได้ไงนะ ก่อนที่ยายจะยื่นไพ่ให้คุณ</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game31;