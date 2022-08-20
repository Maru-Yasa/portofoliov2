import NavbarComponents from "./components/NavbarComponent";
import "./index.css";
import { FiChevronDown, FiLinkedin } from "react-icons/fi";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTrophyFill,
  BsTwitter,
} from "react-icons/bs";
import Me from "./images/me.png";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import IlusAbout from "./images/ilus-about.gif";
import IlusSkills from "./images/ilus-skils.gif";
import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";
import StackIcon from "./components/StackIcon";
import Achievement from "./components/Achievement";
import Project from "./components/Project";
import ReachMe from "./components/ReachMe";
import { themeChange } from "theme-change";

function App() {
  const [index, setIndex] = useState(0);
  const TEXTS = ["Ma'ruf", "Student", "WebDev"];
  useEffect(() => {
    themeChange(false);
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <NavbarComponents />
      <div className="w-full">
        <div class="min-h-screen bg-base-200">
          <div class="mx-auto flex justify-center text-start">
            <div className="mt-28 flex flex-col justify-center gap-4 md:mt-40 md:grid md:grid-cols-12">
              <div className="avatar flex w-full justify-center md:col-span-5">
                <div class="w-52 rounded-full">
                  <img src={Me} className="w-full" />
                </div>
              </div>
              <div class="col-span-7">
                <h1 class="text-2xl font-bold md:text-3xl">Hello there,</h1>
                <h1 class="text-4xl font-bold sm:text-xl md:text-5xl">
                  <span className="flex flex-row gap-2">
                    I'm
                    <TextTransition
                      className="text-accent"
                      springConfig={presets.default}
                    >
                      {TEXTS[index % TEXTS.length]}{" "}
                    </TextTransition>
                  </span>
                </h1>
                <p class="mb-3 py-3">Full Stack Web Developer Enthusiast</p>
                <div className="flex flex-grow gap-5">
                  <a
                    target={"_blank"}
                    href="https://github.com/Maru-Yasa"
                    class="btn btn-primary"
                  >
                    <BsGithub />
                  </a>
                  <a
                    target={"_blank"}
                    href="https://www.instagram.com/maruf_ilyasa/"
                    class="btn btn-primary"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/ma-ruf-ilyasa-3032481b0/"
                    class="btn btn-primary"
                  >
                    <BsLinkedin />
                  </a>
                  <a target={"_blank"} class="btn btn-primary">
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 flex justify-center">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="animate-bounce"
            >
              <FiChevronDown size={64} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10 flex flex-col justify-center self-center md:px-0">
        <div
          className="container mx-auto mb-16 px-5 md:mb-0 md:grid md:grid-cols-3"
          id="about"
        >
          <div className="flex min-w-full items-center justify-center text-center">
            <img src={IlusAbout} className="" alt="" />
          </div>
          <div className="col-span-2 flex items-center">
            <div className="">
              <h1 className="text-4xl font-bold">About me</h1>
              <p className="text-justify">
                Hello, my name is Muhammad Ma'ruf Ilyasa. I'm a student in SMK N
                1 Bantul, Special Region of Yogyakarta. I'm currently studying
                software engineering. I like technologies that's why I'm
                choosing software engineering as my major. Web technologies is
                my favorite subject, espicially at back-end, but i would like to
                create front-end too.
              </p>
              <span className="text-center text-xs text-slate-500">
                {" "}
                Illustration by{" "}
                <a href="https://icons8.com/illustrations/author/625472">
                  Ekaterina Rogova
                </a>{" "}
                from <a href="https://icons8.com/illustrations">Ouch!</a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto px-5 md:grid md:grid-cols-3"
          id="about"
        >
          <div className="col-span-2 flex items-center">
            <div className="">
              <h1 className="text-4xl font-bold">My Skills</h1>
              <p className="text-justify">
                I have advance skill in HTML and CSS, bootstrap for styling, and
                also javascript framework for front-end such as Vue and ReactJs.
                Has experience using php framework such as Laravel and also
                NodeJS library for REST API such as ExpressJS. Familiar with SQL
                based databases like MySQL, Postsgres, SQLite and NoSQL based
                database such like MongoDB. Able to work in team and managing
                code using Git. Also familiar with Linux opearing system, and
                deploy personal site on it
              </p>
              <span className="text-center text-xs text-slate-500">
                {" "}
                Illustration by{" "}
                <a href="https://icons8.com/illustrations/author/625472">
                  Ekaterina Rogova
                </a>{" "}
                from <a href="https://icons8.com/illustrations">Ouch!</a>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={IlusSkills} alt="" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            className="animate-bounce"
          >
            <FiChevronDown size={64} />
          </Link>
        </div>
        <Project />
        <Achievement />
        <ReachMe />
      </div>
      <div className="mb-10 w-full">
        <Marquee gradient={false}>
          <StackIcon />
        </Marquee>
      </div>
      <footer class="footer footer-center bg-base-300 p-4 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Ma'ruf</p>
        </div>
      </footer>
    </>
  );
}

export default App;
