import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
import tarot from '../../assets/images/tarot.png'
import { ScoreContext } from '../component/ScoreContext';
const Game32 = ({
    variants,
    container,
    item,
    name
}) => {
    const [score] = useContext(ScoreContext);
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
                    height: 150,
                    margin: 3
                }}
                initial={{ rotate: 0, transform: 0 }}
                animate={{ transform: ["translate(0,5px)", "translate(0,-10px)"] }}
                transition={{ ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }}>
            </motion.img>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                <motion.h1 variants={item}>ไพ่ใบนี้มันบอกยายว่า{name}เป็นคนที่…</motion.h1>
                <motion.h1 variants={item}>"<br />
                    {score['IE'] < 0 ?
                        <>อาจจะขี้อายหน่อยๆ</>
                        :
                        <>ชอบที่จะเข้าสังคมกับคนอื่น</>
                    }
                    <br />
                    {score['TF'] < 0 ?
                        <>ชอบความเป็นเหตุเป็นผล</>
                        :
                        <>ชอบที่จะทำตามหัวใจของตัวเอง</>
                    }
                    <br />
                    {score['IE'] < 0 ?
                        <>และอยู่กับปัจจุบัน</>
                        :
                        <>และมีจินตนาการที่ล้ำเลิศ</>
                    }
                    <br />"</motion.h1>
            </motion.div>
        </motion.div >
    );
}

export default Game32;