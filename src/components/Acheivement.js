import React from "react";

const Acheivement = () => {
  return (
    <div>
      <section className=" py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="mx-8 md:mx-0 text-sm md:text-lg mb-8">
            Proudly serving our customers with premium quality skins
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
            <div className="p-4">
              <h3 className="text-2xl md:text-4xl font-bold ">600+</h3>
              <p className="text-sm md:text-lg">Sheep Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl md:text-4xl font-bold ">300+</h3>
              <p className="text-sm md:text-lg">Deer Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl md:text-4xl font-bold ">200+</h3>
              <p className="text-sm md:text-lg">Reindeer Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl md:text-4xl font-bold ">150+</h3>
              <p className="text-sm md:text-lg">Medical Grade Skins Sold</p>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Acheivement;
