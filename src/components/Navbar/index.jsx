import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    IconButton,
  } from '@chakra-ui/react'

  import { HiMenuAlt4,HiX } from "react-icons/hi";

const LINKS=['About','Careers','Events','Products','Support']

const Links=()=>{
    return(
        LINKS.map((link,idx)=><a  href="#" key={idx}>{link}</a>)
    )
}



const MoblieNav=()=>{
    return(
        <Menu>
            <MenuButton bgColor={'transparent'} as={IconButton} icon={<HiMenuAlt4 color='white' className='text-2xl'/>} _hover={{bgColor:'transparent'}} _focus={{bgColor:'transparent'}}></MenuButton>
            <MenuList bgColor={'black'} className='z-10 w-screen h-screen grid place-content-center gap-4 border-none absolute -top-[95px] -left-[100vw]'>
                {LINKS.map((link,idx)=><MenuItem key={idx} bgColor={'transparent'}><a href="#" className='font-Alata text-2xl'>{link}</a></MenuItem>)}
            </MenuList>
        </Menu>
    )
}

const Navbar=()=>{
    return(
        <header className="w-full py-11 z-10 bg-transparent absolute text-white">
            <nav className="font-Josefin flex justify-around items-center">
                <div>
                    <p className="font-Alata font-bold text-2xl">loopstudios</p>
                </div>
                <div className="hidden md:flex gap-4">
                    <Links/>
                </div>
                <div className='md:hidden'>
                    <MoblieNav/>
                </div>
            </nav>
        </header>
    )
}
export default Navbar