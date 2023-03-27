import { easeOut, motion } from 'framer-motion';
import stationary from '../../assets/images/stationary.png'
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game18 = ({
    variants,
    container,
    item
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage(22)}
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
                <motion.h1 variants={item}>"ให้เครื่องเขียนไป ยังไงเขาก็ต้องได้ใช้!!"</motion.h1>
                <motion.h2 variants={item}>คุณหยิบชุดเครื่องเขียนเล็กๆ มาแล้วเดินไปจ่ายเงิน</motion.h2>
                <motion.h2 variants={item}>บรรจงห่อของขวัญ ก่อนเดินออกจากร้านไป</motion.h2>
            </motion.div>
            <motion.img src={stationary}
                style={{
                    height: 150,
                    margin: 3
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: [10, - 10] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}>
            </motion.img>
        </motion.div >
    );
}

export default Game18;