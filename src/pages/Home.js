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

function Animated() {
    const [page, setPage] = useState(0);
    useEffect(() => {
        setPage(page % 2);
    })
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
                    <h1>พรรคเพื่อจุฬา ฯ {page}</h1>
                    <a href="https://www.instagram.com/pheuchula_party/"><h2> <FaInstagram /> instagram</h2></a>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="startButton" onClick={() => setPage((page => page + 1))}>click here go to test</motion.button>
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
                    <img src={logo} style={{ height: 200 }}></img>
                    <h1>PheuChula</h1>
                    <a href="https://www.instagram.com/pheuchula_party/"><h2> <FaInstagram /> instagram</h2></a>
                    <button onClick={() => setPage((page => page + 1))}>click here go to test</button>
                </motion.div >
            );
        }
    }
}

export default Animated;
