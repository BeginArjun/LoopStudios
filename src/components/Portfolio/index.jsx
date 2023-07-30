import Curiosty from "../../assets/desktop/image-curiosity.jpg"
import DeepEarth from "../../assets/desktop/image-deep-earth.jpg"
import Soccer from "../../assets/desktop/image-soccer-team.jpg"
import FishEye from "../../assets/desktop/image-fisheye.jpg"
import Grid from "../../assets/desktop/image-grid.jpg"
import FromAbove from "../../assets/desktop/image-from-above.jpg"
import NightArcade from "../../assets/desktop/image-night-arcade.jpg"
import Pocket from "../../assets/desktop/image-pocket-borealis.jpg"


import CuriostyMob from "../../assets/mobile/image-curiosity.jpg"
import DeepEarthMob from "../../assets/mobile/image-deep-earth.jpg"
import SoccerMob from "../../assets/mobile/image-soccer-team.jpg"
import FishEyeMob from "../../assets/mobile/image-fisheye.jpg"
import GridMob from "../../assets/mobile/image-grid.jpg"
import FromAboveMob from "../../assets/mobile/image-from-above.jpg"
import NightArcadeMob from "../../assets/mobile/image-night-arcade.jpg"
import PocketMob from "../../assets/mobile/image-pocket-borealis.jpg"

const CTA=()=>{
    return(
        <div className="flex justify-between p-4 font-Josefin">
            <p className="text-lg lg:text-3xl">OUR CREATIONS</p>
            <div>
                <button className="border-2 border-black hover:bg-black hover:text-white p-2">SEE ALL</button>
            </div>
        </div>
    )
}

const CREATIONS=[
    {title:"DEEP EARTH",mobSrc:DeepEarthMob,imgSrc:DeepEarth},
    {title:"NIGHT ARCADE",mobSrc:NightArcadeMob,imgSrc:NightArcade},
    {title:"SOCCER TEAM VR",mobSrc:SoccerMob,imgSrc:Soccer},
    {title:"THE GRID",mobSrc:GridMob,imgSrc:Grid},
    {title:"FROM UP ABOVE VR",mobSrc:FromAboveMob,imgSrc:FromAbove},
    {title:"POCKET BOREALIS",mobSrc:PocketMob,imgSrc:Pocket},
    {title:"THE CURIOSITY",mobSrc:CuriostyMob,imgSrc:Curiosty},
    {title:"MAKE IT FISHEYE",mobSrc:FishEyeMob,imgSrc:FishEye}
]

const Card=({imgSrc,title,mobSrc})=>{
    return(
        <div className="relative cursor-pointer group w-fit">
            <div className=" group-hover:grayscale">
            <img src={imgSrc} alt={title} className="hidden md:block" loading="lazy"/>
            <img src={mobSrc} alt={title} className="md:hidden block" loading="lazy"/>
            </div>
            <p className="font-Josefin text-white group-hover:text-black absolute bottom-2">{title}</p>
        </div>
    )
}


const Portfolio=()=>{
    return(
        <div className="p-11">
            <CTA/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-y-4 p-4">
                {
                    CREATIONS.map((item,idx)=><Card key={idx} {...item}/>)
                }
            </div>
        </div>
    )
}
export default Portfolio