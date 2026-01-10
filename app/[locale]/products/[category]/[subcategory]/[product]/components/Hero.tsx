import ImageContainer from "./ImageContainer";

const Hero = () => {
  const LABELS = ["Halal", "Parave", "Vegan"];

  return (
    <section className="w-full h-full py-12">
      <div className="flex flex-col-reverse lg:flex-row  py-4 px-2 sm:px-12 gap-6">
        <div className=" flex-1 flex p-4   lg:justify-end">
          <ImageContainer />
        </div>
        <div className=" flex-1 lg:py-12 px-4">
          <div className="flex gap-2 mb-4">
            {LABELS.map((label, idx) => (
              <div
                className=" text-[14px] py-1 px-2 bg-(--light-gray-color) rounded-lg"
                key={idx}
              >
                <p className="font-josefin">{label}</p>
              </div>
            ))}
          </div>
          <h1 className="title mb-2">Product</h1>
          <h2 className="subtitle max-w-xl">
            Praktični spice shakers idealni za čuvanje i doziranje začina.
            Kompaktni, izdržljivi i jednostavni za korištenje.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
