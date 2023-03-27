import logo from '../../assets/images/LOGO.png'
import { FaLink } from 'react-icons/fa';
import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const EndGame = ({
    variants,
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
        >
            <motion.div className="App">
                <img src={logo} style={{ height: 150 }} alt="logo"></img>
                <h3 className="color-white">หาไพ่เจอแล้ว แต่อย่าลืมไปใช้สิทธิเลือกตั้งอบจ.<br />ในวันที่ 31 มีนาคมด้วยนะ!</h3>
                <h3 className="color-white">พรรคเพื่อจุฬาฯ เบอร์ 1 <br />พรรคของนิสิต โดยนิสิต เพื่อนิสิตจุฬาทุกคน</h3>
                <a href="https://linktr.ee/pheuchulaparty"><h2> <FaLink /> LinkTree</h2></a>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className="startButton drop-shadow" onClick={() => setPage(page - 1)}>ดูไพ่ของคุณ</motion.button>
                <motion.button
                    style={{ backgroundColor: "whitesmoke" }}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className="startButton drop-shadow color-sd" onClick={() => setPage(1)}>เล่นใหม่อีกครั้ง</motion.button>
            </motion.div >
            <footer style={{ justifyContent: "center", height: "80px" }}>
                <p>จัดทำโดยคณะผู้จัดทำพรรคเพื่อจุฬาฯ #1 | วันที่ 27 มีนาคม 2566<br />
                    31 มีนาคม 2566 เลือกตั้งผ่าน CUNEX<br />
                    <a className='credit' href="https://www.flaticon.com/" title="icons">All icons provided by Freepik - Flaticon</a>
                </p>
            </footer>
        </motion.div >);
}

export default EndGame;
