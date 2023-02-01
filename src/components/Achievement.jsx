import Sertifikat1 from "../images/sertifikat-1.png";
import Sertifikat2 from "../images/sertifikat-2.png";
import Sertifikat3 from "../images/moe_maruf.png";
import Blob from "../images/blob.svg";
import IlusWalk from "../images/achievement.png";
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";
export default function Achievement() {
  return (
    <>
      <div className="relative mt-20 mb-32 flex h-full w-full flex-col justify-center self-center px-5 md:px-0">
        <div
          id="achievement"
          className="relative flex flex-row items-center justify-center gap-5"
        >
          <svg
            className="absolute z-0 hidden w-8/12 fill-accent md:block"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill=""
              d="M65,-49.9C79.6,-33.5,83.6,-6.8,75.6,12.9C67.7,32.5,47.7,45.1,28,52.4C8.2,59.8,-11.3,61.9,-31.3,55.8C-51.2,49.7,-71.5,35.3,-74.5,18.2C-77.6,1,-63.2,-19,-47.9,-35.5C-32.6,-52,-16.3,-65.1,4.4,-68.6C25.2,-72.2,50.4,-66.2,65,-49.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="container z-10 flex flex-col items-center">
            <div className="z-10 text-center text-5xl font-bold">
              <span className="mb-16 flex flex-row gap-5">Achievement</span>
            </div>
            <div className="flex flex-col gap-16 md:flex-row">
              <div className="flex flex-col items-center gap-5">
                <img
                  src={Sertifikat1}
                  className="h-96 w-64 rounded-xl grayscale"
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-2xl">
                    <span className="font-bold">1st</span> LKS DIY WebTech
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <img
                  src={Sertifikat2}
                  className="h-96 w-64 rounded-xl grayscale"
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-2xl">
                    <span className="font-bold">1st</span> Video Reporting
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <img
                  src={Sertifikat3}
                  className="w-96 rounded-xl grayscale"
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-2xl">
                    <span className="font-bold">Medal Of Excelent</span> LKSN WebTech
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center">
        <Link
          activeClass="active"
          to="reachme"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="animate-bounce"
        >
          <FiChevronDown size={64} />
        </Link>
        <img
          src={IlusWalk}
          className="absolute bottom-0 right-10 hidden w-64 md:block"
          alt=""
        />
      </div>
    </>
  );
}
