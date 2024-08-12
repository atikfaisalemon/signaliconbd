import PricingTable from "./pricing";

export const Pricing = () => {
  return (
    <div className="bg-black bg-gradient-to-b  from-black via-[#5D2CA8] to-black py-[72px] text-white sm:py-24 ">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Choose Your plan
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit
            in facilis mollitia dolorum rerum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-24 py-[72px] sm:flex-row sm:py-24  ">
          <PricingTable />
        </div>
      </div>
    </div>
  );
};
