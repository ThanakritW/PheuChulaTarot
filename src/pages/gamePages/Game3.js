import { easeOut, motion } from 'framer-motion';
import alarm from '../../assets/images/alarm-clock.png'
const Game3 = ({
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
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.img src={alarm}
                    style={{
                        height: 150,
                        margin: 3
                    }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [25, - 25] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}>
                </motion.img>
                <motion.h1 variants={item}>"{name} ตื่นได้แล้ว!!"</motion.h1>
                <motion.h2 variants={item}>เสียงคุณแม่เรียก</motion.h2>
                <motion.h2 variants={item}>วันนี้ไม่มีเรียนซะด้วยสิ ทำไมรีบปลุกจัง</motion.h2>
            </motion.div>
        </motion.div >
    );
}

export default Game3;