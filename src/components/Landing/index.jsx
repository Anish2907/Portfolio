import "./index.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);



export default function Landing() {

  const imgDivRef = useRef(null);
  useGSAP(() => {
    gsap.from(imgDivRef.current, { scale: 2, opacity: 0, duration: 1.5, ease: "power1.inOut" });
  });


  useGSAP(() => {
    const greet = new SplitType("#hey", { types: "words,chars" });
    const welcome = new SplitType("#welcome", { type: "words,chars" });

    gsap.to([greet.chars], {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.04
    });
    gsap.to([welcome.chars], {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.04
    });
    gsap.from(".port", {
      opacity: 0,
      delay: 1.7,
      duration: 1.5,
    });

    return () => {
      greet.revert();
      welcome.revert();
    }
  });

  return (
    <div className="flex justify-center items-center h-screen w-scree overflow-hidden bg-beigesh">
      <div className="w-full relative flex justify-center items-center">
        <div className="w-3/5 desktop:w-2/5" ref={imgDivRef}>
          <img
            src="/background.jpg"
            alt="Landing page image"
          />
        </div>

        <div className="absolute w-full left-0 top-20 large-tablet:top-48 laptop:top-56 desktop:top-96">
          <div className="flex flex-col gap-14 laptop:gap-16">
            <span className="font-sans text-5xl text-center tracking-tighter large-tablet:text-7xl laptop:text-9xl" id="hey">
              HEY, I'M ANISH
            </span>
            <span className="font-sans text-6xl text-center text-black tracking-wider large-tablet:text-8xl laptop:text-9xl" id="welcome">
              WELCOME
            </span>
            <span className="font-sans text-4xl text-center large-tablet:text-6xl laptop:text-8xl">
              <span className="text-black port">TO MY</span> <span className="text-orange-500 port">PORTFOLIO</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
