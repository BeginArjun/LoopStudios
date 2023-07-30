import Facebook from "../../assets/icon-facebook.svg"
import Twitter from "../../assets/icon-twitter.svg"
import Pinterest from "../../assets/icon-pinterest.svg"
import Instagram from "../../assets/icon-instagram.svg"
import './index.css'

const LINKS=['About','Careers','Events','Products','Support']

const SOCIAL_LINKS=[
    {platform:"facebook",icon:Facebook},
    {platform:"twitter",icon:Twitter},
    {platform:"pinterest",icon:Pinterest},
    {platform:"instagram",icon:Instagram},
]

const Links=()=>{
    return(
        LINKS.map((link,idx)=><a  href="#" key={idx}>{link}</a>)
    )
}

const SocialLinks=()=>{
    return(
        SOCIAL_LINKS.map((link,idx)=><a href="#"  key={idx} className="
        "><img src={link.icon} alt={link.platform}></img></a>)
    )
}

const Footer=()=>{
    return(
        <footer className="bg-black p-11 text-white">
            <div className="flex justify-between md:flex-row flex-col items-center">
                <div className="flex flex-col gap-4 items-center">
                <p className="font-Alata font-bold text-2xl">loopstudios</p>
                <div className="flex md:flex-row flex-col gap-4 font-Josefin">
                    <Links/>
                </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-4">
                    <SocialLinks/>
                    </div>
                    <p className="font-Josefin text-[#8c8c8c] text-center">© 2021 Loopstudios. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
 export default Footer