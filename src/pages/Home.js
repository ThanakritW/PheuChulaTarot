import { useEffect, useRef, useState } from 'react';
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
    const [page, setPage] = useState(0);
    const timeOutRef = useRef();
    const PAGE_COUNT = 12;

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
    }, [page])

    switch (page) {
        case 0: {
            return (
                <Game0 page={page} setPage={setPage} name={name} variants={variants} />
            );
        }
        case 1: {
            return (
                <Game1 page={page} setPage={setPage} name={name} variants={variants} setName={setName} />
            );
        }
        case 2: {
            return (
                <Game2 page={page} name={name} variants={variants} container={container} item={item} />
            );
        }
        case 3: {
            return (
                <Game3 page={page} name={name} variants={variants} container={container} item={item} setPage={setPage} />
            );
        }
        case 4: {
            return (
                <Game4 page={page} name={name} variants={variants} container={choiceContainer} setPage={setPage} />
            )
        }
        case 5: {
            return (
                <Game5 page={7} name={name} variants={variants} container={container} item={item} setPage={setPage} />
            );
        }
        case 6: {
            return (
                <Game6 page={page} name={name} variants={variants} container={container} item={item} setPage={setPage} />
            );
        }
        case 7: {
            return (
                <Game7 page={page} name={name} variants={variants} container={choiceContainer} setPage={setPage} />
            )
        }
        case 8: {
            return (
                <Game8 page={page} name={name} variants={variants} container={container} item={item} setPage={setPage} />
            );
        }
        case 9: {
            return (
                <Game9 page={page} name={name} variants={variants} container={choiceContainer} setPage={setPage} />
            )
        }
        case 10: {
            return (
                <Game10 page={page} name={name} variants={variants} container={container} item={item} setPage={setPage} />
            );
        }
        case 11: {
            return (
                <Game11 page={page} name={name} variants={variants} container={choiceContainer} setPage={setPage} />
            )
        }
        default:
            return null;

    }
}

export default Animated;
