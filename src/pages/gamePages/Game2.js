import { easeOut, motion } from 'framer-motion';
const Game2 = ({
    page,
    variants,
    name,
    container,
    item
}) => {
    return (
        <motion.div className="App color-white"
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
                <motion.h1 variants={item}>สวัสดีนะ {name}!</motion.h1>
                <motion.h1 variants={item}>เรามาตามหาไพ่ของ{name}กันเถอะ!</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game2;