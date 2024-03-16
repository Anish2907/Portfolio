import ProfilePic from "../../assets/DSC_0017~3.jpg";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {

    useGSAP(() => {
        gsap.from(".about-text", {
            scrollTrigger: ".about-img",
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        });
        gsap.from(".about-img", {
            scrollTrigger: ".about-img",
            opacity: 0,
            duration: 0.8,
            delay: 0.3
        });
        gsap.to(".about-container", {
            scrollTrigger: ".about-img",
            backgroundColor: "#f8f7ee",
            duration: 0.8,
            delay: 0.3
        });
        gsap.from([".about-info1", ".about-info2", ".about-info3"], {
            scrollTrigger: ".about-info1",
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.9,
            delay: 0.3
        });
    });

    return (
        <div className="about-container bg-black max-h-screen py-16 flex flex-col items-center gap-4">
            <div className="about-text p-8 flex items-center gap-8">
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh" />
                <span className="text-3xl text-deepBeigsh">ABOUT ME</span>
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh" />
            </div>
            <div className="flex flex-col items-center">
                <div className="about-img w-11/12 h-1/2 rounded-xl overflow-hidden bg-black">
                    <img src={ProfilePic} alt="" className="h-full object-contain" />
                </div>
                <div className="flex flex-col items-center gap-7 p-6">
                    <span className="about-info1 text-3xl text-center text-black">A brief intro, who am I?</span>
                    <span className="about-info2 text-sm font-extralight text-slate-800 leading-6">
                        I am a full-stack web developer, who aims to build user-friendly and
                        functional web applications. I am passionate in learning new technologies
                        to upgrade my skills and push myself to the next level.
                    </span>
                    <span className="about-info3 text-sm font-extralight text-slate-800 leading-6">
                        When I am not developing, I enjoy spending my time reading novels, watching
                        movies or playing guitar.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About