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
        gsap.from(".about-container", {
            scrollTrigger: ".about-img",
            backgroundColor: "black",
            duration: 1,
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
        <div id="about" className="about-container bg-beigesh min-h-fit py-16 flex flex-col items-center gap-4 large-tablet:px-4">
            <div className="about-text p-8 flex items-center gap-6">
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
                <span className="text-4xl text-deepBeigsh large-tablet:text-5xl laptop:text-7xl">ABOUT ME</span>
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10   " />
            </div>
            <div className="flex flex-col items-center large-tablet:flex-row large-tablet:items-start">
                <div className="about-img w-11/12 rounded-xl overflow-hidden bg-black desktop:w-4/5">
                    <img src={ProfilePic} alt="" className="object-cover" />
                </div>
                <div className="flex flex-col items-center gap-7 p-6 large-tablet:w-2/3 large-tablet:p-4 large-tablet:-mt-4 laptop:w-3/4 laptop:gap-12 desktop:w-4/5 desktop:px-44 desktop:gap-12">
                    <span className="about-info1 text-3xl text-center text-black large-tablet:text-4xl laptop:text-6xl desktop:text-start">A brief intro, who am I?</span>
                    <span className="about-info2 text-sm font-extralight text-slate-700 leading-6 large-tablet:text-2xl laptop:text-4xl">
                        I am a full-stack web developer, who aims to build user-friendly and
                        functional web applications. I am passionate in learning new technologies
                        to upgrade my skills and push myself to the next level.
                    </span>
                    <span className="about-info3 text-sm font-extralight text-slate-700 leading-6 large-tablet:text-2xl laptop:text-4xl">
                        When I am not developing, I enjoy spending my time reading novels, watching
                        movies or playing guitar.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About