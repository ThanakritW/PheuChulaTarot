import { easeOut, motion } from 'framer-motion';
import gift from '../../assets/images/giftbox.png'
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game16 = ({
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
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h2 variants={item}>แต่เอ๊ะ ไปปาร์ตี้วันเกิดทั้งทีจะมือเปล่าได้ไง</motion.h2>
                <motion.h1 variants={item}>ต้องมีของขวัญไปให้เขาด้วยสิ!</motion.h1>
                <motion.h2 variants={item}>แวะซื้อของขวัญหน่อยดีกว่า</motion.h2>
            </motion.div>
            <motion.img src={gift}
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

export default Game16;