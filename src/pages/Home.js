import { useEffect, useRef, useState } from 'react';
import Game1 from './gamePages/Game1';
import Game2 from './gamePages/Game2';
import Game0 from './gamePages/Game0';
import Game3 from './gamePages/Game3';
import Game4 from './gamePages/Game4';

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
const choiceContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5
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
    const [page, setPage] = useState(4);
    const timeOutRef = useRef();
    const PAGE_COUNT = 5;

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

    const handleChange = event => {
        setName(event.target.value);
        console.log('value is:', event.target.value);
    };

    switch (page) {
        case 0: {
            return (
                <Game0 page={page} setPage={setPage} name={name} variants={variants} handleChange={handleChange} />
            );
        }
        case 1: {
            return (
                <Game1 page={page} setPage={setPage} name={name} variants={variants} handleChange={handleChange} />
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
        default:
            return null;

    }
}

export default Animated;
