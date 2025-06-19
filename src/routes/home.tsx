import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCaretDown } from "react-icons/fa";
import SplitText from "gsap/SplitText";
import { ScrollSmoother } from "gsap/all";

function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <p className="title text-9xl font-bold bg-gradient-to-t from-amber-600 to-amber-400 bg-clip-text text-transparent mb-8">
              Hello, I'm{" "}
              <span className="bg-gradient-to-t from-sky-600 to-blue-400 bg-clip-text text-transparent font-black">
                Haft!
              </span>
            </p>
            <img
              className="w-1/2 rounded-lg"
              src="https://github-readme-stats.hackclub.dev/api/wakatime?username=635&api_domain=hackatime.hackclub.com&theme=shadow_blue&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"
              alt="Wakatime Stats"
            />
            <FaCaretDown className="mt-8 text-4xl text-gray-700 animate-bounce" />
          </div>

          <div className="min-h-screen flex flex-col items-center justify-center">
            <p className="text-7xl font-bold bg-gradient-to-t from-red-600 to-red-400 bg-clip-text text-transparent">
              My Experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
