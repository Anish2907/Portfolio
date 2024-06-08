import { useState, useEffect } from "react"
import { Link } from "react-scroll";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <div id="contact" className="bg-beigesh flex flex-col items-center py-4">
            <div className="about-text p-8 flex items-center gap-6">
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10" />
                <span className="text-3xl text-deepBeigsh large-tablet:text-5xl laptop:text-7xl">CONTACT ME</span>
                <div className="h-3 w-6 rounded-b-full bg-deepBeigsh large-tablet:h-5 large-tablet:w-8 laptop:h-7 laptop:w-10   " />
            </div>
            <div className="px-4 mb-6 w-full large-tablet:mb-8">
                <span className="block text-3xl text-black mb-2 large-tablet:text-5xl">Have an awesome idea?</span>
                <span className="block text-3xl text-black mb-2 large-tablet:text-5xl">Let's bring it to life.</span>
                <form>
                    <div className="flex flex-col gap-4 mb-6 large-tablet:gap-6">
                        <div className="flex flex-col gap-4 large-tablet:flex-row">
                            <input className="p-4 w-full text-base text-deepBeigsh bg-beigesh border-b-2 border-deepBeigsh outline-none large-tablet:text-xl large-tablet:p-6" type="text" placeholder="Your Name" />
                            <input className="p-4 w-full text-base bg-beigesh border-b-2 border-deepBeigsh outline-none large-tablet:text-xl large-tablet:p-6" type="email" placeholder="Your Email" />
                        </div>
                        <textarea className="p-4 outline-none bg-beigesh border-b-2 border-deepBeigsh large-tablet:text-xl large-tablet:p-6" name="" id="" rows={5} placeholder="Your Message"></textarea>
                    </div>
                    <button className="p-4 bg-black text-white rounded-full cursor-pointer large-tablet:p-6 large-tablet:text-xl">Send Message</button>
                </form>
            </div>
            <div className="px-4 mb-6 w-full flex flex-col items-start gap-6 large-tablet:gap-8">
                <div>
                    <span className="block text-3xl mb-2 large-tablet:text-4xl">Contact Details</span>
                    <div className="flex flex-col gap-2 text-gray-500 large-tablet:text-2xl">
                        <span>anishmondal225@gmail.com</span>
                        <span>+91 9564581040</span>
                    </div>
                </div>
                <div>
                    <span className="block text-3xl mb-2 large-tablet:text-4xl">My Digital Spaces</span>
                    <div className="flex flex-col gap-4 text-gray-500 large-tablet:text-2xl">
                        <div className="flex items-center gap-2">
                            <GitHubIcon />
                            <a href="https://github.com/Anish2907" target="blank"><span className="cursor-pointer">Github</span></a>
                        </div>
                        <div className="flex items-center gap-2">
                            <LinkedInIcon />
                            <a href="https://www.linkedin.com/in/anish-mondal-1a94311a9/" target="blank"><span className="cursor-pointer">Linkedin</span></a>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="block text-3xl mb-2 large-tablet:text-4xl">Location</span>
                    <div className="flex flex-col gap-2 text-gray-500 large-tablet:text-2xl">
                        <span>West Bengal, India</span>
                        <div className="text-3xl">
                            {hours}:{minutes}:{seconds}
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 w-full flex justify-between large-tablet:text-2xl">
                <span className="block">&copy; <span className="text-slate-500 mr-1">2024</span> <span>Anish Mondal</span></span>
                <Link to="landing" smooth={true} duration={1500}><span className="cursor-pointer">Back To Top</span></Link>
            </div>
        </div>
    )
}