import IlusLook from "../images/ilus-look.png";

export default function ReachMe() {
  return (
    <>
      <div
        id="reachme"
        className="relative mt-20 flex w-full flex-col justify-center self-center bg-base-300 py-20 px-5 md:px-0"
      >
        <img
          src={IlusLook}
          className="absolute bottom-10 left-5 z-0 hidden w-64 md:block"
          alt=""
        />
        <div className="z-10">
          <h1 className="text-center text-5xl font-bold">Reach me</h1>
          <h2 className="text-center text-lg">
            Interested to work together? send me a mail
          </h2>
          <form
            encType="multipart"
            className="container mx-auto mt-10 flex flex-col md:px-32 lg:px-96"
            action="mailto:marufilyasa13@gmail.com"
          >
            <div className="mb-3">
              <label htmlFor="" className="label">
                <span className="label-text text-lg">Your name: </span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label">
                <span className="label-text text-lg">Email: </span>
              </label>
              <input
                type="email"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label">
                <span className="label-text text-lg">Message: </span>
              </label>
              <textarea
                cols={5}
                type="email"
                className="input input-bordered input-primary w-full"
              ></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                send mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
