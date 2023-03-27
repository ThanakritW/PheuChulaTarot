import logo from '../../assets/images/LOGO.png'
import { FaLink } from 'react-icons/fa';
import { easeOut, motion } from 'framer-motion';
import { useContext } from 'react';
import { PageContext } from '../component/PageContext';
const Game0 = ({
    variants,
}) => {
    const [page, setPage] = useContext(PageContext);
    return (
        <div>
            <motion.div className="App"
                key={page}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
            >
                <img src={logo} style={{ height: 150 }} alt="logo"></img>
                <h1 className="color-white">พรรคเพื่อจุฬา ฯ</h1>
                <a href="https://linktr.ee/pheuchulaparty"><h2> <FaLink /> LinkTree</h2></a>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className="startButton" onClick={() => setPage(1)}>ตามหาไพ่ของคุณกัน!</motion.button>
            </motion.div >
            <footer style={{ justifyContent: "center", height: "80px" }}>
                <p>จัดทำโดยคณะผู้จัดทำพรรคเพื่อจุฬาฯ #1 | วันที่ 27 มีนาคม 2566<br />
                    31 มีนาคม 2566 เลือกตั้งผ่าน CUNEX<br />
                    <a className='credit' href="https://www.flaticon.com/" title="icons">All icons provided by Freepik - Flaticon</a>
                </p>
            </footer>
        </div >);
}

export default Game0;
