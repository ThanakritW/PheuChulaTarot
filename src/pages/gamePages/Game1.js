import { easeOut, motion } from 'framer-motion';

const Game1 = ({
    page,
    setPage,
    variants,
    name,
    setName
}) => {
    const handleChange = event => {
        setName(event.target.value);
    };
    return (<motion.div className="App"
        key={page}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
    >
        <h2 >สวัสดี บอกชื่อกันหน่อยสิ</h2>
        <input type="text"
            className="login__input"
            placeholder="ชื่อเล่น"
            onChange={handleChange}
            value={name}></input><br /><br />
        {name ?
            <motion.button whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
                className="startButton" onClick={() => setPage((page => page + 1))}> ไปลุยกันเลย!!</motion.button>
            :
            <></>
        }
        <br />

        <div style={{
            maxWidth: "150px",
            margin: "auto"
        }}>
            <p className="linkButton" onClick={() => setPage((page => page - 1))}>ย้อนกลับ</p>
        </div >
    </motion.div >);
}

export default Game1;