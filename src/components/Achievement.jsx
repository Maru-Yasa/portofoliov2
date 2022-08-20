import Sertifikat1 from "../images/sertifikat-1.png";
import Sertifikat2 from "../images/sertifikat-2.png";
import Blob from "../images/blob.svg";
import IlusWalk from "../images/ilus-walk.png";
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";
export default function Achievement() {
  return (
    <>
      <div className="relative mt-20 mb-32 flex w-full flex-col justify-center self-center px-5 md:px-0">
        <img
          src={IlusWalk}
          className="absolute bottom-10 right-10 hidden w-64 md:block"
          alt=""
        />

        <div
          id="achievement"
          className="relative flex flex-row items-center justify-center gap-5"
        >
          <img
            src={Blob}
            className="absolute z-0 hidden w-8/12 md:block"
            alt=""
          />
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
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
      </div>
    </>
  );
}
