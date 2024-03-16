import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Desc() {

    return (
        <div className="desc h-screen flex justify-center items-center text-beigesh bg-black">
            <div className="flex flex-col gap-2 p-6">
                <span className="font-sans text-5xl text-start">I create elevating</span>
                <span className="font-sans text-5xl text-start">digital</span>
                <span className="font-sans text-5xl text-start">experiences that</span>
                <span className="font-sans text-5xl text-start">inspired and</span>
                <span className="font-sans text-5xl text-start">connect with</span>
                <span className="font-sans text-5xl text-start">people thorough</span>
                <span className="font-sans text-5xl text-start">development</span>
                <span className="font-sans text-5xl text-start">and design.</span>
            </div>
        </div>
    )
}

export default Desc