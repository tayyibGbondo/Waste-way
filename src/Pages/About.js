import React from "react";

import Images from "../conatants/Images";
import Footer from "../components/footer/Footer";

function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 object-cover bg-blue-100">
        <img
          src={Images.CeoAndCo}
          alt="CEO and CO"
          className="w-full md:w-[800px] rounded-tr-md rounded-br-md"
        />

        <div className="text-center md:p-8 py-7">
          <div className="p-5">
            <h1 className="text-2xl font-bold text-center">
              About WasteWay Cycle
            </h1>

            <p>
              WasteWay cycle is a social enterprise dedicated to converting
              plastic and textile wastes into durable and eco-friendly products
              using the 3R ( Reduce, Reuse, Recycle) to save our planet Earth by
              weaving them into innovative items with zero carbon footprint.
            </p>

            <br />

            <p>
              With the vision of creating a sustainable world without Plastic
              and textile wastes, it became necessary for us at WasteWay Cycle
              to reduce the landfill space by recycling used clothes and nylons.
            </p>

            <br />

            <img
              src={Images.Shower}
              alt="user"
              className="w-full md:h-[200px] object-cover rounded-2xl my-5"
            />

            <p>
              In Our quest to creating more impact, we realized many people in
              our community's usually dump textile and plastic wastes by the
              road side while some even go to the extent of burning them thereby
              depleting the ozone layer which is hazardous to our health and
              environment thus prompted us to use our weaving skills to create
              an innovative solution by starting WasteWay Cycle initiative. Our
              initiative focuses on the empowerment of unemployed youths and
              women by training them on effective ways to earn income from
              recycling plastic and textile waste. We weave the wastes into
              eco-friendly products with zero carbon footprint. We also engage
              in Grassroots and Creative Awareness programs in schools, Slums,
              market centers etc. geared Towards Achieving a Clean Environment.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-[1100px] md:items-center md:justify-center m-auto my-5">
        {" "}
        <div>
          <div className="bg-gray-100  p-2  m-3 rounded-2xl shadow-gray-300 shadow-1xl ">
            <h1 className="text-2xl font-bold text-center md:text-start my-5">
              Mission
            </h1>
            <p>
              To improve the communitie's solid waste stream through effective
              Reduction, Recycling and Reuse while impacting people and the
              environment.
            </p>
          </div>
          <div className="bg-gray-100  p-2  m-3 rounded-2xl shadow-gray-300 shadow-1xl ">
            <h1 className="text-2xl font-bold my-5 text-center md:text-start">
              Metrics
            </h1>
            <p>
              10 Eco-friendly products.
              <br />
              10000+ Single-use plastic and textile recycled.
              <br />
              2 awareness programs.
              <br />
              12 individual employed by WasteWay.
            </p>
          </div>
        </div>
        <img
          src={Images.Win}
          alt="winning"
          className="w-full md:w-[600px] rounded-md"
        />
      </div>

      <Footer />
    </div>
  );
}

export default About;
