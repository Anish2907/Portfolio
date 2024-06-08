import { RoughNotation } from "react-rough-notation";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Desc() {

    useGSAP(() => {
        gsap.to(".desc-container", {
            scrollTrigger: ".desc-container",
            backgroundColor: "black",
            duration: 1,
            delay: 0.5
        });
    });

    return (
        <div className="desc-container min-h-screen py-8 flex justify-center items-center text-beigesh bg-beigesh">
            <div className="flex flex-col gap-2 px-8">
                <span className="font-sans text-4xl text-start max-w-96 leading-normal large-tablet:text-5xl large-tablet:leading-normal large-tablet:max-w-lg laptop:max-w-2xl laptop:leading-normal laptop:text-6xl ">
                    I craft dynamic and <RoughNotation show={true} type="highlight" color="green" animationDelay={4500} animationDuration={2000}>user-</RoughNotation><RoughNotation show={true} type="highlight" color="green" animationDelay={4500} animationDuration={2000}>friendly</RoughNotation> web experiences,
                    with a dedication to deliver high-quality <RoughNotation show={true} type="highlight" color="violet" animationDelay={3550} animationDuration={2000}>solutions</RoughNotation> that consistently meet client's <RoughNotation show={true} type="highlight" color="green" animationDelay={3550} animationDuration={2000}>expectations.</RoughNotation>
                </span>
            </div>
        </div>
    )
}

export default Desc