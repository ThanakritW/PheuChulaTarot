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
import MAG from '../../assets/images/CardIcon/MAG.png'
import STR from '../../assets/images/CardIcon/STR.png'
import STA from '../../assets/images/CardIcon/STA.png'
import HPT from '../../assets/images/CardIcon/HPT.png'
import WLD from '../../assets/images/CardIcon/WLD.png'
import LOV from '../../assets/images/CardIcon/LOV.png'
import EMP from '../../assets/images/CardIcon/EMP.png'
import SUN from '../../assets/images/CardIcon/SUN.png'

const data = {
    "NAME": {
        "WLD": "The World",
        "STR": "The Strength",
        "STA": "The Star",
        "HPT": "The High Priestess",
        "MAG": "The Magician",
        "LOV": "The Lovers",
        "EMP": "The Emperor",
        "SUN": "The Sun"
    },
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
    "PIC": {
        "WLD": WLD,
        "STR": STR,
        "STA": STA,
        "HPT": HPT,
        "MAG": MAG,
        "LOV": LOV,
        "EMP": EMP,
        "SUN": SUN
    },
    "Detail": {
        "WLD": "คุณเป็นคนที่คิดเก่งและชอบที่จะเพ้อฝันไปกับความเป็นไปได้ต่างๆ คุณเป็นคนรักสงบ อาจจะดูขี้อายแต่ความจริงแล้วในใจคุณอยากจะทำความรู้จักคนอีกเยอะเลยหล่ะ!",
        "STR": "",
        "STA": "",
        "HPT": "",
        "MAG": "",
        "LOV": "",
        "EMP": "",
        "SUN": ""
    }

}


const Result = ({
    name
}) => {
    const [page, setPage] = useContext(PageContext);
    const [load, setLoad] = useState(false);
    const [load2, setLoad2] = useState(true);
    const [load3, setLoad3] = useState(false);
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

    const cardType = "WLD";

    useEffect(() => {
        timeOutRef.current = setTimeout(() => {
            setLoad(true);
            setLoad2(false)
        }, 2000);
        timeOutRef.current = setTimeout(() => {
            setLoad2(true);
            setLoad3(true)
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
            <motion.div
                key={page}
                initial={{ opacity: 0, transform: "translate(0,50px)" }}
                animate={{ opacity: 1, transform: "translate(0,0)" }}
                transition={{ duration: 1, ease: easeIn, delay: 5.1 }}
            >
                {load3 &&
                    <div style={{
                        backgroundColor: "white",
                        height: "60vh",
                        width: "80%",
                        margin: "auto",
                        padding: "20px",
                        justifySelf: "center",
                        border: "10px solid",
                        borderColor: "#64497E",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        color: "#171717"
                    }}>
                        <img src={data.PIC[cardType]} style={{ height: "20%", objectFit: "cover", alignSelf: "center" }} ></img>
                        <h1 className="cardHead">{data.NAME[cardType]}</h1>
                        <h2 className="cardContent">{data.Detail[cardType]}</h2>
                    </div>
                }
            </motion.div >
        </div >
    );
}

export default Result;