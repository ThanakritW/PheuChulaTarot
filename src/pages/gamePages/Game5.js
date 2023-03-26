import { easeOut, motion } from 'framer-motion';
import phone from '../../assets/images/phone.png'
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game5 = ({
    variants,
    name,
    container,
    item
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div className="App color-white" onClick={() => setPage(7)}
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
                <motion.img src={phone}
                    style={{
                        height: 150,
                        margin: 3
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.25, 1] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.0 }}>
                </motion.img>
                <motion.h2 variants={item}>"นอนต่ออีกสักนิดคงไม่เป็นอะไร.."</motion.h2>
                <motion.h2 variants={item}>คุณบอกกับตัวเองแต่แล้ว...</motion.h2>
                <motion.h1 variants={item}>เสียงโทรศัพท์ก็ดังขึ้น!</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game5;