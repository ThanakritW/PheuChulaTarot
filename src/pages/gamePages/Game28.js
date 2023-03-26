import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
import wave from '../../assets/images/wave.png'
const Game28 = ({
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
                <motion.h2 variants={item}>คนที่คุณชอบยิ้มให้คุณอีกรอบก่อนที่จะโบกมือลาคุณ</motion.h2>
                <motion.img src={wave}
                    style={{
                        height: 150,
                        margin: 3
                    }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [10, - 25] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}>
                </motion.img>
                <motion.h1 variants={item}>"แล้วหวังว่าจะได้พบกันใหม่นะ {name}"</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game28;