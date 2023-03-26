import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game30 = ({
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
                <motion.h2 variants={item}>คุณกับเพื่อนสนิทก็คุยกันต่อไปซักพัก ก่อนที่จะจากกันไป</motion.h2>
                <motion.h1 variants={item}>"แต่ระหว่างทางเดินกลับคุณก็เจอคุณยายคนหนึ่ง..."</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game30;