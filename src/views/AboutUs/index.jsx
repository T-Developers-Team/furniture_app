import React from "react";
import aboutImgUrl from "../../assets/about.jpg";
import processImgUrl from "../../assets/process.jpg";

const AboutUsView = () => {
  return (
    <div>
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${aboutImgUrl})` }}
      >
        <p className="text-white py-36 font-semibold text-2xl">
          ABOUT US
          <br />
          <span className="font-light text-3xl">OUR VISION | OUR VALUES</span>
        </p>
      </section>

      {/* About us Info */}
      <div className="grid grid-cols-8 min-h-screen">
        <div className="hidden md:block col-span-3 pt-16 ">
          <div className="sticky top-24 flex flex-col items-end">
            <a
              className="mb-4 text-xl text-gray-400 hover:text-orange-500 hover:underline"
              href="#company"
            >
              About the company
            </a>
            <a
              className="mb-4 text-xl text-gray-400 hover:text-orange-500 hover:underline"
              href="#process"
            >
              Our Process
            </a>
            <a
              className="text-xl text-gray-400 hover:text-orange-500 hover:underline"
              href="#workFlow"
            >
              How it Works
            </a>
          </div>
        </div>
        <div className="col-span-8 md:col-span-5 px-8 lg:pr-40">
          <div id="company" className="mb-8 pt-16">
            <h2 className="text-3xl mb-4 uppercase">About the Company</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              obcaecati reprehenderit sed nobis magnam a nemo, blanditiis
              quisquam beatae? Asperiores, atque placeat ducimus libero animi
              porro minima corrupti corporis praesentium magnam sequi eius
              illum, error totam est velit exercitationem. Illo ratione, libero
              totam reiciendis in quasi cumque voluptatibus odio error.
            </p>
            <br />
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              obcaecati reprehenderit sed nobis magnam a nemo, blanditiis
              quisquam beatae? Asperiores, atque placeat ducimus libero animi
              porro minima corrupti corporis praesentium magnam sequi eius
              illum, error totam est velit exercitationem. Illo ratione, libero
              totam reiciendis in quasi cumque voluptatibus odio error.
            </p>
          </div>

          <div id="process" className="mb-8 pt-16">
            <h2 className="mb-4 text-3xl uppercase">Our Process</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere adipisci, eligendi omnis hic debitis! Delectus officiis aut
              voluptatibus excepturi et consectetur ipsum provident dolorem
              earum, eos, consequuntur ratione quia.
            </p>
            <br />
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nostrum explicabo voluptas magnam sint quia praesentium accusamus
              sunt perferendis, libero autem cum quaerat laborum alias minus
              consequuntur repudiandae dolorem illum.
            </p>
            <br />
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              obcaecati reprehenderit sed nobis magnam a nemo, blanditiis
              quisquam beatae? Asperiores, atque placeat ducimus libero animi
              porro minima corrupti corporis praesentium magnam sequi eius
              illum, error totam est velit exercitationem. Illo ratione, libero
              totam reiciendis in quasi cumque voluptatibus odio error.
            </p>
          </div>

          <div id="workFlow" className="pt-16">
            <h2 className="mb-4 text-3xl uppercase">How it Works</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              earum libero expedita, et similique aliquam rerum aperiam eos
              velit deleniti sit nisi minima voluptate esse praesentium qui eum
              consequatur? Soluta?
            </p>
            <img src={processImgUrl} className="px-4 md:px-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsView;
