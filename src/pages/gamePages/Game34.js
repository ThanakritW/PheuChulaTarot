import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
import tarot from '../../assets/images/tarot.png'
const Game34 = ({
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
                    height: "40vh",
                    margin: 3
                }}
                initial={{ rotate: 0, transform: 0 }}
                animate={{ transform: ["translate(0,5px)", "translate(0,-10px)"] }}
                transition={{ ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }}>
            </motion.img>
            <motion.h1
                initial={{ rotate: 0, transform: 0 }}
                animate={{ transform: ["translate(0,5px)", "translate(0,-10px)"] }}
                transition={{ ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }}>"แตะเพื่อเปิดการ์ด"</motion.h1>
        </motion.div >
    );
}

export default Game34;