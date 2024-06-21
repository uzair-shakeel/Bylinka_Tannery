import Related from "@/components/Related";
import Service from "@/components/Service";
import ServiceDescription from "@/components/ServiceDescription";
import React from "react";

const page = () => {
  return (
    <div>
      <Service />
      <ServiceDescription />
      <Related />
    </div>
  );
};

export default page;
