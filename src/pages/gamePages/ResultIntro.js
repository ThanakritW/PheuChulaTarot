import { easeIn, motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from '../component/PageContext';
import tarot from '../../assets/images/tarot.png'
import { ScoreContext } from '../component/ScoreContext';
import FMAG from '../../assets/images/CardFull/MAG.png'
import FSTR from '../../assets/images/CardFull/STR.png'
import FSTA from '../../assets/images/CardFull/STA.png'
import FHPT from '../../assets/images/CardFull/HPT.png'
import FWLD from '../../assets/images/CardFull/WLD.png'
import FLOV from '../../assets/images/CardFull/LOV.png'
import FEMP from '../../assets/images/CardFull/EMP.png'
import FSUN from '../../assets/images/CardFull/SUN.png'

const data = {
    "FPIC": {
        "WLD": FWLD,
        "STR": FSTR,
        "STA": FSTA,
        "HPT": FHPT,
        "MAG": FMAG,
        "LOV": FLOV,
        "EMP": FEMP,
        "SUN": FSUN
    },
}


const ResultIntro = ({
}) => {
    const [page, setPage] = useContext(PageContext);
    const [load, setLoad] = useState(false);
    const [load2, setLoad2] = useState(true);
    const [score, setScore] = useContext(ScoreContext);
    const timeOutRef = useRef();

    function getCardType() {
        if (score.IE < 0) {
            if (score.NS < 0) {
                if (score.TF < 0) { //INT
                    return 'WLD';
                }
                return 'STR'; //INF
            }
            if (score.TF < 0) { //IST
                return 'STA';
            }
            return 'HPT'; //ISF
        }
        if (score.NS < 0) {
            if (score.TF < 0) {
                return 'MAG'; //ENT
            }
            return 'LOV'; //ENF
        }
        if (score.TF < 0) {
            return 'EMP'; //EST
        }
        return 'SUN'; //ESF
    }

    const cardType = getCardType();

    useEffect(() => {
        timeOutRef.current = setTimeout(() => {
            setLoad(true);
            setLoad2(false)
        }, 2000);
        timeOutRef.current = setTimeout(() => {
            setLoad2(true);
            setPage(page + 1);
        }, 5000);
        return () => {
            clearTimeout(timeOutRef.current)
        }
    }, [])
    return (
        <div className={"App color-white"}>
            {!load && <motion.img src={tarot}
                style={{
                    height: "40vh",
                    margin: 3
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 2 }}>
            </motion.img>}
            {!load2 && <motion.img src={data.FPIC[cardType]}
                style={{
                    alignSelf: 'center',
                    height: "80vh",
                    width: "100%",
                    objectFit: "contain",
                    margin: 3
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ times: [0, 0.1, 0.9, 1], duration: 3 }}>
            </motion.img>}
        </div >
    );
}

export default ResultIntro;