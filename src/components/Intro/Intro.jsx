import {useState} from "react"
import style from "./Intro.module.scss"
import img from "../../assets/images/Images.jsx"

function Intro() {
    const WalkRight = [
        img.right1, 
        img.right2, 
        img.right3, 
        img.right4, 
        img.right5
    ]

    return(
        <div className={style.wrap}>
            <div className={style.wrap__objects}>
                <img src="../../assets/images/intro-door.png" alt="Closed wooden door" />
                <img src="../../assets/images/intro-portal.png" alt="Portal door open" />
                <img src="../../assets/images/desk" alt="Wooden desk with a laptop sitting on top" />
            </div>
            <div className={style.wrap__gubben}>
                {/* <img src="../../assets/images/gub-right1.png" alt="Gubb on their right profile, neutral position" />
                <img src="../../assets/images/gub-right2.png" alt="Gubb on their right profile, right knee up" />
                <img src="../../assets/images/gub-right3.png" alt="Gubb on their right profile, right foot down" />
                <img src="../../assets/images/gub-right4.png" alt="Gubb on their right profile, left knee up" />
                <img src="../../assets/images/gub-right5.png" alt="Gubb on their right profile, left foot down" />
                <img src="../../assets/images/gub-left1" alt="Gubb on their left profile, neutral position" />
                <img src="../../assets/images/gub-left2" alt="Gubb on their left profile, right knee up" />
                <img src="../../assets/images/gub-left3" alt="Gubb on their left profile, right foot down" />
                <img src="../../assets/images/gub-left4" alt="Gubb on their left profile, left knee up" />
                <img src="../../assets/images/gub-left5" alt="Gubb on their left profile, left foot down" />
                <img src="../../assets/images/gub-back1" alt="Gubb with their back facing, neutral position" />
                <img src="../../assets/images/gub-back2" alt="Gubb with their back facing, right knee up" />
                <img src="../../assets/images/gub-back3" alt="Gubb with their back facing, left knee up" />
                <img src="../../assets/images/gub-front1" alt="Gubb facing us, neutral position" />
                <img src="../../assets/images/gub-front2" alt="Gubb facing us, right knee up" />
                <img src="../../assets/images/gub-front" alt="Gubb facing us, left knee up" /> */}
            </div>
        </div>
    )
}

export default Intro