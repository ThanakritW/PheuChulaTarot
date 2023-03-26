import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
import dialog from '../../assets/images/talking.png'
const Game27 = ({
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
                <motion.h1 variants={item}>คุณเล่าเรื่องต่างๆ ให้เขาฟังด้วยความตั้งใจ</motion.h1>
                <motion.h2 variants={item}>หลังจากนั้นพวกคุณก็ได้คุยกันอีกหลายเรื่องเลยหล่ะ</motion.h2>
                <motion.img src={dialog}
                    style={{
                        height: 150,
                        margin: 3
                    }}
                    initial={{ transform: 0 }}
                    animate={{ transform: ["translate(5px,0)", "translate(-10px,0)"] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}>
                </motion.img>
                <motion.h2 variants={item}>รู้ตัวอีกทีก็ถึงเวลาเลิกราซะแล้ว</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game27;