import { easeOut, motion } from 'framer-motion';
import angry from '../../assets/images/Angry.png'
const Game12 = ({
    page,
    setPage,
    variants,
    name,
    container,
    item
}) => {
    return (
        <motion.div className="App color-white" onClick={() => setPage((page => page + 1))}
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.img src={angry}
                style={{
                    height: 150,
                    margin: 3
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: [10, - 10] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.0 }}>
            </motion.img>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h1 variants={item}>"อย่ามาอ้างนะ ไปกับเค้าเด่วนี้!"</motion.h1>
                <motion.h2 variants={item}>สุดท้ายก็โดนเพื่อนลากไปงานอยู่ดี</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game12;