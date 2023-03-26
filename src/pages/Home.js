import { useEffect, useRef, useState, useContext } from 'react';
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
import { PageContext } from './component/PageContext';
import Game14 from './gamePages/Game14';
import Game15 from './gamePages/Game15';
import Game16 from './gamePages/Game16';
import Game17 from './gamePages/Game17';

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
    const timeOutRef = useRef();
    const PAGE_COUNT = 36;

    useEffect(() => {
        if (page === 2) {
            timeOutRef.current = setTimeout(() => {
                setPage((page + 1) % PAGE_COUNT)
            }, 5000)
        }
        if (page >= PAGE_COUNT) {
            setPage(page % PAGE_COUNT)
        }
        return () => {
            clearTimeout(timeOutRef.current)
        }
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
        default:
            return <Game0 variants={variants} />;

    }
}

export default Animated;
