import HeroImg from '../../assets/desktop/image-hero.jpg'
const Hero=()=>{
    const styles={
        backgroundImage:`url(${HeroImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }
    return(
        <div style={styles} className='w-screen h-screen'>
            <div className='border-white border-2 px-16 py-4 relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-1/3 w-fit'>
                <p className='text-white lg:text-6xl whitespace-pre-line md:text-5xl text-4xl font-Josefin'>IMMERSIVE
                <br/>
                EXPERIENCES 
                <br/>
                THAT DELIVER</p>
            </div>
        </div>
    )
}
export default Hero