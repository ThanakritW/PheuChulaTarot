import { easeOut, motion } from 'framer-motion';
import shirt from '../../assets/images/Shirt.png'
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game15 = ({
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
            <motion.img src={shirt}
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
                <motion.h1 variants={item}>"เอาหล่ะ ขอเป็นชุดนี้ละกัน"</motion.h1>
                <motion.h2 variants={item}>{name}หยิบชุดที่เลือกมาใส่ แต่งตัวให้เรียบร้อย</motion.h2>
                <motion.h2 variants={item}>ก่อนสวมรองเท้า แล้วเดินออกจากบ้านไป</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game15;