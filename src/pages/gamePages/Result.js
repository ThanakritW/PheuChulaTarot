import { easeOut, motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from '../component/PageContext';
import { ScoreContext } from '../component/ScoreContext';
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
        "WLD": ["คุณเป็นคนที่คิดเก่งและชอบที่จะเพ้อฝันไปกับความเป็นไปได้ต่างๆ คุณเป็นคนรักสงบ อาจจะดูขี้อายแต่ความจริงแล้วในใจคุณอยากจะทำความรู้จักคนอีกเยอะเลยหล่ะ!",
            <br />,
            "คุณมีพลังในการเปลี่ยนแปลงที่ยิ่งใหญ่อยู่ในกำมือ ดังนั้นถ้าหากว่าคาดหวังอะไรอยู่ ลองอธิฐานดูสิแล้วเปลี่ยนแปลงให้ \"โลก\" ใบนี้น่าอยู่ขึ้นกันเถอะ!"],
        "STR": ["หลายๆ คนที่่เจอคุณครั้งแรกอาจจะไม่กล้าทักเพราะคิดว่าคุณหยิ่ง แต่ความจริงแล้วคุณเป็นคนน่ารักมากเลยนะ คุณพยายามมองโลกในแง่ดี \"ในโลกนี้ไม่มีอะไรที่จะดำไป 100% หรอกนะ\"",
            <br />,
            "สิ่งที่นิยามความเป็นตัวคุณได้ดีที่สุดคือแข็งนอกนุ่มใน แม้ \"สิงโต\" จะดูน่ากลัวแต่ในใจของมันกลับมีแต่ความน่ารักเต็มไปหมดเลยหล่ะ!"],
        "STA": ["รักไม่ใช่ดวงดาวที่พราวแสง แต่คุณคือ \"ดวงดาว\" ที่รุ่งโรจน์! คุณเป็นคนที่จริงจังกับการทำงาน ถ้าหากว่าได้ทำอะไรแล้ว งานนั้นจะต้องออกมาเป็นงานที่ดีที่สุดเท่าที่เป็นไปได้",
            <br />,
            "หากวันใดที่คุณเหนื่อยล้า ลองมองขึ้นไปบนท้องฟ้าสิ เพราะดวงดาวแพรวพราวนับล้านบนฟ้านั้น จะคอยนำทางให้คุณอยู่เสมอเลยหล่ะ!"],
        "HPT": ["คุณเป็นคนที่มีเสน่ห์น่าดึงดูดไม่เหมือนใคร คุณพร้อมที่จะยืนหยัดเพื่อความถูกต้อง และเพื่อนๆ ก็รู้ว่าหากต้องการความช่วยเหลือ สามารถพึ่งพาคุณได้เสมอ",
            <br />, <br />,
            "คุณเป็นคนที่มีปณิธานแน่วแน่ หากมุ่งหวังจะทำอะไรแล้ว สิ่งนั้นต้องเกิดขึ้นได้เสมอ แถมยังแอบมีเซนส์ที่ดีต่อความรักอีกด้วย!"],
        "MAG": ["คุณเป็นคนที่เก่งรอบด้าน สามารถที่จะเชื่อมโยงองค์ความรู้ต่างๆ เข้าหากันได้อย่างเหลือเชื่อ ใครๆ ก็บอกว่าคุณเหมือน \"เล่นกล\" ให้ดูอยู่ตลอดเพราะเป็นคนที่มักจะนำคนอื่นอยู่ก้าวนึงเสมอ",
            <br />, <br />,
            "นอกจากนี้แล้ว คุณยังเป็นคนมีความคิดสร้างสรรค์ สามารถคิดอะไรที่คนอื่นๆ นึกไม่ถึงได้ หรืออาจจะเป็นเพราะว่าความจริงแล้วคุณเป็นพ่อมดแฝงตัวมากันแน่นะ"],
        "LOV": ["คุณเป็นคนที่คิดเก่งและชอบที่จะเพ้อฝันไปกับความเป็นไปได้ต่างๆ คุณเป็นคนรักสงบ อาจจะดูขี้อายแต่ความจริงแล้วในใจคุณอยากจะทำความรู้จักคนอีกเยอะเลยหล่ะ!",
            <br />, <br />,
            "คุณมีพลังในการเปลี่ยนแปลงที่ยิ่งใหญ่อยู่ในกำมือ ดังนั้นถ้าหากว่าคาดหวังอะไรอยู่ ลองอธิฐานดูสิ ยังไงสิ่งที่คุณอยากให้เกิดขึ้น จะสร้างผลกระทบ และเปลี่ยนแปลงให้ \"โลก\" ใบนี้น่าอยู่ขึ้นแน่นอน!"],
        "EMP": ["คุณเป็นคนที่คิดเก่งและชอบที่จะเพ้อฝันไปกับความเป็นไปได้ต่างๆ คุณเป็นคนรักสงบ อาจจะดูขี้อายแต่ความจริงแล้วในใจคุณอยากจะทำความรู้จักคนอีกเยอะเลยหล่ะ!",
            <br />, <br />,
            "คุณมีพลังในการเปลี่ยนแปลงที่ยิ่งใหญ่อยู่ในกำมือ ดังนั้นถ้าหากว่าคาดหวังอะไรอยู่ ลองอธิฐานดูสิ ยังไงสิ่งที่คุณอยากให้เกิดขึ้น จะสร้างผลกระทบ และเปลี่ยนแปลงให้ \"โลก\" ใบนี้น่าอยู่ขึ้นแน่นอน!"],
        "SUN": ["คุณเป็นคนสดใสดุจดั่ง \"ดวงอาทิตย์\" เลยแหละ! คุณเกิดมาเพื่อเป็นแสงส่องสว่างนำพาความสุขมาให้กับคนรอบข้าง เพื่อนๆ รักคุณเพราะคุณเป็นคนกันเองสุดๆ!!",
            <br />, <br />,
            "นอกจากนี้คุณยังเป็นคนที่ชอบเปิดรับโอกาสใหม่ๆ ที่เข้ามาในชีวิต แต่อย่าเผลอเปิดรับโอกาสมากไปหล่ะ เดี๋ยวจะจมกองงานนะ!"],
    }

}


const Result = ({
    name
}) => {
    const [page, setPage] = useContext(PageContext);
    const [score, setScore] = useContext(ScoreContext);

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
    // const cardType = getCardType();
    const cardType = "MAG"
    return (
        <div className={"App color-white"}>
            <motion.div
                key={page}
                initial={{ opacity: 0, transform: "translate(0,50px)" }}
                animate={{ opacity: 1, transform: "translate(0,0)" }}
                transition={{ duration: 0.5, ease: easeOut }}
            >
                <>
                    <div className="drop-shadow"
                        style={{
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
                            flex: "1 1 auto",
                            color: "#171717"
                        }}>
                        <motion.img src={data.PIC[cardType]}
                            style={{
                                height: "20%",
                                objectFit: "cover",
                                alignSelf: "center"
                            }}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [10, - 10] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.0 }}>
                        </motion.img>
                        <h1 className="cardHead color-sd">{data.NAME[cardType]}</h1>
                        <hr style={{ margin: "0px", alignSelf: "center", borderColor: "#64497E", borderWidth: "2px", width: "80%" }} />
                        <h2 className="cardContent">{data.Detail[cardType]}</h2>
                    </div>
                    <br />
                    <motion.div>
                        <motion.button
                            className="game-button drop-shadow"
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                            onClick={() => setPage((page + 1))}
                        >
                            ถัดไป
                        </motion.button >
                    </motion.div>
                </>
            </motion.div >
        </div >
    );
}

export default Result;