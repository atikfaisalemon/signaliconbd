import PricingTable from "./pricing";

export const Pricing = () => {
  return (
    <div className="bg-black bg-gradient-to-b  from-black via-[#5D2CA8] to-black py-[72px] text-white sm:py-24 ">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          নিজে নিজেই মোবাইল এর মাধ্যমে রিচার্জ করুন!
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            বিকাশ ও নগদ এর মাধ্যমে খুব সহজেই রিচার্জ করুন। কোন সমস্যা ফেইচ করলে
            ০১৭১২৯৬৫০০৭ এই নম্বর এ যোগাযোগ করুন।
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-24 py-[72px] sm:flex-row sm:py-24  ">
          <PricingTable />
        </div>
      </div>
    </div>
  );
};
