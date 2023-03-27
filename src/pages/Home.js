import { useEffect, useRef, useState, useContext } from 'react';
import { PageContext } from './component/PageContext';
import Game1 from './gamePages/Game1';
import Game2 from './gamePages/Game2';
import Game0 from './gamePages/Game0';
import Game3 from './gamePages/Game3';
import Game4 from './gamePages/Game4';
import Game5 from './gamePages/Game5';
import Game6 from './gamePages/Game6';
import Game7 from './gamePages/Game7';
import Game8 from './gamePages/Game8';
import Game9 from './gamePages/Game9';
import Game10 from './gamePages/Game10';
import Game11 from './gamePages/Game11';
import Game13 from './gamePages/Game13';
import Game12 from './gamePages/Game12';
import Game14 from './gamePages/Game14';
import Game15 from './gamePages/Game15';
import Game16 from './gamePages/Game16';
import Game17 from './gamePages/Game17';
import Game18 from './gamePages/Game18';
import Game19 from './gamePages/Game19';
import Game20 from './gamePages/Game20';
import Game21 from './gamePages/Game21';
import Game22 from './gamePages/Game22';
import Game23 from './gamePages/Game23';
import Game24 from './gamePages/Game24';
import Game25 from './gamePages/Game25';
import Game26 from './gamePages/Game26';
import Game27 from './gamePages/Game27';
import Game28 from './gamePages/Game28';
import Game29 from './gamePages/Game29';
import Game30 from './gamePages/Game30';
import Game31 from './gamePages/Game31';
import Game32 from './gamePages/Game32';
import Game33 from './gamePages/Game33';
import Game34 from './gamePages/Game34';
import { ScoreContext } from './component/ScoreContext';
import Result from './gamePages/Result';
import ResultIntro from './gamePages/ResultIntro';
import EndGame from './gamePages/EndGame';

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
            staggerChildren: 1.25
        }
    }
}
const choiceContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7,
            staggerChildren: 0.2
        }
    }
}
const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

function Animated() {
    const [name, setName] = useState('');
    const [page, setPage] = useContext(PageContext);
    const [score, setScore] = useContext(ScoreContext);
    const timeOutRef = useRef();
    const PAGE_COUNT = 38;

    useEffect(() => {
        if (page === 2) {
            timeOutRef.current = setTimeout(() => {
                setPage((page + 1) % PAGE_COUNT)
            }, 5000);
            setScore({
                ['IE']: 0,
                ['TF']: 0,
                ['NS']: 0,
            });
        }
        if (page >= PAGE_COUNT) {
            setPage(page % PAGE_COUNT)
        }
        return () => {
            clearTimeout(timeOutRef.current)
        }
        // eslint-disable-next-line
    }, [page, setPage])

    switch (page) {
        case 0: {
            return (
                <Game0 variants={variants} />
            );
        }
        case 1: {
            return (
                <Game1 name={name} variants={variants} setName={setName} />
            );
        }
        case 2: {
            return (
                <Game2 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 3: {
            return (
                <Game3 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 4: {
            return (
                <Game4 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 5: {
            return (
                <Game5 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 6: {
            return (
                <Game6 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 7: {
            return (
                <Game7 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 8: {
            return (
                <Game8 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 9: {
            return (
                <Game9 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 10: {
            return (
                <Game10 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 11: {
            return (
                <Game11 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 12: {
            return (
                <Game12 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 13: {
            return (
                <Game13 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 14: {
            return (
                <Game14 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 15: {
            return (
                <Game15 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 16: {
            return (
                <Game16 name={name} variants={variants} container={container} item={item} />
            );
        }
        case 17: {
            return (
                <Game17 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 18: {
            return (
                <Game18 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 19: {
            return (
                <Game19 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 20: {
            return (
                <Game20 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 21: {
            return (
                <Game21 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 22: {
            return (
                <Game22 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 23: {
            return (
                <Game23 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 24: {
            return (
                <Game24 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 25: {
            return (
                <Game25 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 26: {
            return (
                <Game26 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 27: {
            return (
                <Game27 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 28: {
            return (
                <Game28 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 29: {
            return (
                <Game29 name={name} variants={variants} container={choiceContainer} />
            )
        }
        case 30: {
            return (
                <Game30 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 31: {
            return (
                <Game31 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 32: {
            return (
                <Game32 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 33: {
            return (
                <Game33 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 34: {
            return (
                <Game34 name={name} variants={variants} container={container} item={item} />
            )
        }
        case 35: {
            return (
                <ResultIntro name={name} container={container} item={item} />
            )
        }
        case 36: {
            return (
                <Result name={name} container={container} item={item} />
            )
        }
        case 37: {
            return (
                <EndGame name={name} container={container} item={item} variants={variants} />
            )
        }
        default:
            return <Game0 variants={variants} />;
    }
}

export default Animated;
