import Project1 from "../../assets/Project1.png";
import MongoDBIcon from "../../assets/mongodb.svg";
import ReactIcon from "../../assets/react.svg";
import NodeIcon from "../../assets/node-js.svg";
import ScssIcon from "../../assets/icons8-sass.svg";
import SocketIcon from "../../assets/socket.svg";

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Projects() {

    useGSAP(() => {
        gsap.from(".project-container", {
            scrollTrigger: ".project-img",
            backgroundColor: "#f8f7ee",
            duration: 1,
            delay: 0.3
        });
        gsap.from([".project-text", ".project-img-container"], {
            scrollTrigger: ".project-img",
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        });
    });

    return (
        <div className="project-container bg-black pb-8 flex flex-col items-center">
            <div className="project-text p-8 flex items-center gap-8">
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
                <span className="text-4xl text-deepBeigsh large-tablet:text-5xl laptop:text-7xl">PROJECTS</span>
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
            </div>
            <div className="project-img-container w-full flex flex-col gap-8 items-center justify-center laptop:w-1/2">
                <div className="flex flex-col gap-2 bg-slate-900 rounded-md w-11/12 p-4 large-tablet:gap-4">
                    <div className="project-img rounded-md overflow-hidden laptop:w-full">
                        <img src={Project1} alt="" className="" />
                    </div>
                    <div className=" flex justify-between items-center">
                        <div className="w-2/3 flex justify-between items-center text-white cursor-default large-tablet:text-xl">
                            <div className="w-6 h-6 large-tablet:w-10 large-tablet:h-10"><img src={ReactIcon} alt="" /></div>
                            <div className="w-6 h-6 large-tablet:w-10 large-tablet:h-10"><img src={NodeIcon} alt="" /></div>
                            <div className="w-6 h-6 large-tablet:w-10 large-tablet:h-10"><img src={MongoDBIcon} alt="" /></div>
                            <div className="w-6 h-6 large-tablet:w-10 large-tablet:h-10"><img src={ScssIcon} alt="" /></div>
                            <div className="w-6 h-6 large-tablet:w-10 large-tablet:h-10"><img src={SocketIcon} alt="" /></div>
                        </div>
                        <div className="text-white p-2 bg-black rounded-full cursor-pointer large-tablet:p-4 large-tablet:text-xl"><a href="https://github.com/Anish2907/Social-Hub" target="blank">Github</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
