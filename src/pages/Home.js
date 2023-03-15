import logo from '../images/LOGO.png';
import '../App.css';
import { FaHome, FaInstagram } from 'react-icons/fa';
import { easeOut, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { wrap } from "popmotion";

const variants = {
    enter: () => {
        return {
            opacity: 0,
        };
    },
    center: {
        opacity: 1
    },
    exit: () => {
        return {
            opacity: 0,
        };
    }
};
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 2.0
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

function Animated() {
    const [name, setName] = useState('');
    const [page, setPage] = useState(0);
    useEffect(() => {
        if (page == 2) {
            setTimeout(() => {
                setPage((page + 1) % 3)
            }, 5000)
        }
        setPage(page % 3);
    })
    const handleChange = event => {
        setName(event.target.value);
        console.log('value is:', event.target.value);
    };
    switch (page) {
        case 0: {
            return (
                <motion.div className="App"
                    key={page}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                >
                    <img src={logo} style={{ height: 200 }}></img>
                    <h1>พรรคเพื่อจุฬา ฯ</h1>
                    <a href="https://www.instagram.com/pheuchula_party/"><h2> <FaInstagram /> instagram</h2></a>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="startButton" onClick={() => setPage((page => page + 1))}>ตามหาไพ่ของคุณกัน!</motion.button>
                </motion.div >
            );
        }
        case 1: {
            return (
                <motion.div className="App"
                    key={page}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                >
                    <h2>สวัสดี บอกชื่อกันหน่อยสิ</h2>
                    <input type="text"
                        className="login__input"
                        placeholder="ชื่อเล่น"
                        onChange={handleChange}
                        value={name}></input><br /><br />
                    <motion.button whileHover={{ scale: 1.1 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="startButton" onClick={() => setPage((page => page + 1))}> ไปลุยกันเลย!!</motion.button><br />
                    <a className="linkButton" onClick={() => setPage((page => page - 1))}>ย้อนกลับ</a>
                </motion.div >
            );
        }
        case 2: {
            return (
                <motion.div className="App"
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
                        <motion.h1 variants={item}>เราไปตามหาไพ่ของ{name}กันเถอะ!</motion.h1>
                    </motion.div>
                </motion.div >
            );
        }
    }
}

export default Animated;
