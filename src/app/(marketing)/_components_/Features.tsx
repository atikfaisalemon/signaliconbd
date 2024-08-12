import Bentodemo from "./bentrogrid";

export const Features = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24 ">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Everything you need{" "}
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit
            in facilis mollitia dolorum rerum.
          </p>
        </div>
        <div className="mt-32 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
