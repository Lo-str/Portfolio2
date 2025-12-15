import {useState} from "react"
import style from "./Intro.module.scss"
import img from "../../assets/images/Images.jsx"

function Intro() {
    const walkRight = [
        img.right1,
        img.right2,
        img.right3,
        img.right4,
        img.right5
    ]
    const walkLeft = [
        img.left1,
        img.left2,
        img.left3,
        img.left4,
        img.left5
    ]
    const walkFront = [
        img.front1,
        img.front2,
        img.front3
    ]
    const walkBack = [
        img.back1,
        img.back2,
        img.back3
    ]
    const resting = [
        img.front1,
        img.right1,
        img.back1,
        img.left1
    ]
    const decor = [
        img.door,
        img.portal,
        img.desk
    ]
    return(
        <div className={style.wrap}>
            <div className={style.wrap__objects}>
                <img src={decor[0]} alt="Closed wooden door" />
                <img src={decor[2]} alt="Wooden desk with a laptop sitting on top" />
            </div>
            <div className={style.wrap__gubben}>

            </div>
        </div>
    )
}

export default Intro
