import Logo from "../../assets/am-high-resolution-logo.jpeg"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { Link } from "react-scroll";

gsap.registerPlugin(useGSAP);


export default function Navbar() {

    const navRef = useRef();
    useGSAP(() => {
        gsap.from(navRef.current, { y: -100, duration: 1, delay: 0.5 });
    });


    return (
        <nav className="fixed top-0 w-full p-3 z-10 bg-beigesh laptop:p-4" ref={navRef} id="nav">
            <div className="flex justify-between items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={Logo} alt="Logo" />
                <div className="flex items-center gap-4 large-tablet:gap-12 large-tablet:text-xl laptop:gap-20 laptop:text-2xl">
                    <Link to="about" smooth={true} duration={1500}><span className="span-text hidden cursor-pointer tablet:block">About</span></Link>
                    <Link to="skills" smooth={true} duration={1500}><span className="span-text hidden cursor-pointer tablet:block">Skills</span></Link>
                    <Link to="projects" smooth={true} duration={1500}><span className="span-text hidden cursor-pointer tablet:block">Projects</span></Link>
                    <Link to="contact" smooth={true} duration={1500}><span className="bg-black text-beigesh font-bold px-4 py-3 rounded-3xl cursor-pointer laptop:px-6 laptop:py-5 laptop:rounded-s-3xl" >Let's talk</span></Link>
                </div>
            </div>
        </nav>
    )
}
