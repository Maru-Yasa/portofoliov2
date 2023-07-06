import Sertifikat1 from "../images/sertifikat-1.png";
import Sertifikat2 from "../images/sertifikat-2.png";
import VidyaLearn from "../images/vidya-learn-app.png";
import Pixme from "../images/pixme-new.png";
import Suit from "../images/suitonline.png";
import IlusShow from "../images/personal_project.png";
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";

export default function Project() {
  const projects = [
    {
      title: "Vidya Learn",
      desc: "Web App that powered by AI to help student and teacher for study effectively",
      link: "https://github.com/Maru-Yasa/SEVIMA-Vidya-Learn",
      image: VidyaLearn,
    },
    {
      title: "Pixme",
      desc: "Secreto.site or NGL.link clone, but the web is retro style",
      link: "https://pixme.site",
      image: Pixme,
    },
    {
      title: "Suit Online",
      desc: "Online game called 'Suit Online'",
      link: "https://suit-online.maruyasa.repl.co/#/",
      image: Suit,
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="relative mt-20 mb-32 flex w-full flex-col justify-center self-center bg-base-300 py-20 px-5 md:px-0"
      >
        <img
          src={IlusShow}
          className="absolute bottom-10 left-5 z-0 hidden w-64 md:block"
          alt=""
        />
        <div className="z-10 flex w-full flex-col items-center">
          <h1 className="text-center text-5xl font-bold">Personal Project</h1>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-16">
            {projects.map((project, index) => {
              return (
                <div className="flex w-full max-w-2xl flex-col items-center gap-5 md:flex-row">
                  <img src={project.image} className="w-64" alt="" />
                  <div className="w-full">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mb-3 text-justify">{project.desc}</p>
                    <a
                      target={"_blank"}
                      href={project.link}
                      className="btn btn-primary btn-sm"
                    >
                      See detail
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="flex w-full flex-col items-center text-center">
              <span className="font-semibold text-primary">And much more</span>
              <span className="text-sm">
                See on my{" "}
                <a href="https://github.com/Maru-Yasa" className="link">
                  Github
                </a>{" "}
                for more
              </span>
            </div>
            <div className="mt-0 flex w-full flex-col items-center">
              <Link
                activeClass="active"
                to="achievement"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="animate-bounce"
              >
                <FiChevronDown size={64} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
