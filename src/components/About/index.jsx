import VRImage from '../../assets/desktop/image-interactive.jpg'
import VRMobile from '../../assets/mobile/image-interactive.jpg'
const About=()=>{
    return(
        <div className='relative grid-rows-1'>
            <div className='p-11'>
                <img src={VRImage} className='hidden md:block' alt="VRImage"/>
                <img src={VRMobile} alt='VRImage' className='md:hidden block'/>
            </div>
            <div className='p-11 lg:absolute lg:bottom-6 bg-white lg:left-1/2'>
                <h1 className='font-Josefin lg:text-4xl whitespace-pre-line text-center'>THE LEADER IN 
                <br></br>
                VR INTERACTIVE
                </h1>
                <div className='font-Alata text-[#8c8c8c] whitespace-pre-wrap'>Founded in 2011, Loopstudios has been producing world-class
                <br></br>
                virtual reality projects for some of the best companies around the 
                <br></br>
                globe. Our award-winning creations have transformed 
                <br></br>
                businesses through digital experiences that bind to their brand.
                </div>
            </div>
        </div>
    )
}
export default About