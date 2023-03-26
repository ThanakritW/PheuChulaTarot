import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
import tarot from '../../assets/images/tarot.png'
const Game33 = ({
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
            <motion.img src={tarot}
                style={{
                    height: 150,
                    margin: 3
                }}
                initial={{ rotate: 0, transform: 0 }}
                animate={{ transform: ["translate(0,5px)", "translate(0,-10px)"] }}
                transition={{ ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }}>
            </motion.img>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h1 variants={item}>"ขอให้{name}มีวันที่ดีนะลูกเอ๋ย"</motion.h1>
                <motion.h2 variants={item}>คุณยายยื่นไพ่ใบนี้ให้กับคุณ แล้วคุณยายก็เดินจากไป</motion.h2>
                <motion.h2 variants={item}>คุณมองไปที่ไพ่ไบนั้น...</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game33;