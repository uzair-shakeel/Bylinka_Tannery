import React from "react";

const Acheivement = () => {
  return (
    <div>
      <section className="bg-red-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg mb-8">
            Proudly serving our customers with premium quality skins
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
            <div className="p-4">
              <h3 className="text-4xl font-bold ">600+</h3>
              <p className="text-lg">Sheep Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold ">300+</h3>
              <p className="text-lg">Deer Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold ">200+</h3>
              <p className="text-lg">Reindeer Skins Sold</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold ">150+</h3>
              <p className="text-lg">Medical Grade Skins Sold</p>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Acheivement;
