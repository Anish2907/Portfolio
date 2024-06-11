import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Skills() {

    useGSAP(() => {
        gsap.from(".skills-text", {
            scrollTrigger: ".tool-box",
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        });
        gsap.from(".tool-box", {
            scrollTrigger: ".tool-box",
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        });
        gsap.from(".bar", {
            scrollTrigger: ".tool-box-text",
            xPercent: -150,
            duration: 1.7,
            delay: 0.5
        });
    });


    return (
        <div id="skills">
            <div className="skills-container bg-beigesh flex flex-col items-center gap-8 py-16 px-5">
                <div className="skills-text p-8 flex items-center gap-8">
                    <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
                    <span className="text-4xl text-deepBeigsh large-tablet:text-5xl laptop:text-7xl">SKILLS</span>
                    <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
                </div>
                <div className="tool-box w-full flex flex-col gap-4 large-tablet:gap-6 laptop:gap-8">
                    <span className="tool-box-text text-4xl large-tablet:text-5xl laptop:text-7xl">my tool box.</span>
                    <span className="font-extralight text-slate-700 large-tablet:text-3xl laptop:text-5xl laptop:w-9/12">
                        These are my go to tech stack to make any project happen. I am always eager of
                        learning more about my current stack, and new technologies that could expand
                        my horizons.
                    </span>
                </div>
                <div className="bar h-1 w-full bg-deepBeigsh laptop:h-2" />
                <div className="w-full flex flex-col items-start text-4xl gap-3 text-deepBeigsh large-tablet:text-5xl large-tablet:gap-5 laptop:text-6xl laptop:gap-7">
                    <span>Typescript</span>
                    <span>C++</span>
                    <span>NextJS</span>
                    <span>NodeJS</span>
                    <span>PostgreSQL</span>
                    <span>Prisma</span>
                    <span>MongoDB</span>
                    <span>Tailwind CSS</span>
                </div>
            </div>
        </div>
    )
}
