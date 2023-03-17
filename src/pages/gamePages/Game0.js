import logo from '../../assets/images/LOGO.png'
import { FaInstagram } from 'react-icons/fa';
import { easeOut, motion } from 'framer-motion';
const Game0 = ({
    page,
    setPage,
    variants,
}) => {
    return (<motion.div className="App  "
        key={page}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
    >
        <img src={logo} style={{ height: 200 }} alt="logo"></img>
        <h1 className="color-white">พรรคเพื่อจุฬา ฯ</h1>
        <a href="https://www.instagram.com/pheuchula_party/"><h2> <FaInstagram /> instagram</h2></a>
        <motion.button
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            className="startButton" onClick={() => setPage((page => page + 1))}>ตามหาไพ่ของคุณกัน!</motion.button>
    </motion.div >);
}

export default Game0;