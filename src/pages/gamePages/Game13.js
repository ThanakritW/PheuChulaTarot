import { easeOut, motion } from 'framer-motion';
import clothes from '../../assets/images/Clothes.png'
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game13 = ({
    variants,
    name,
    container,
    item
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage((page => page + 1))}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.img src={clothes}
                style={{
                    height: 150,
                    margin: 3
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: [10, - 10] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}>
            </motion.img>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h2 variants={item}>ถ้าจะไปปาร์ตี้ คงต้องหาชุดปังๆ ใส่ซะแล้ว!!</motion.h2>
                <motion.h2 variants={item}>คุณเลยเดินไปหาตู้เสื้อผ้า</motion.h2>
                <motion.h1 variants={item}>แล้วเปิดออกมาเจอกับเสื้อผ้านับร้อยตัว</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game13;