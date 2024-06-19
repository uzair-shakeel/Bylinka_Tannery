import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
  return (
    <div className="px-[4%] py-8">
      <h1 className="text-3xl font-bold py-6">Our Products</h1>
      <div className="grid grid-cols-4 gap-4">
        <Card className="py-4 group cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            <small className="text-default-500 overflow-hidden relative h-[60px] group-hover:h-[180px] duration-500">
              Discover the unparalleled softness and natural warmth of our
              genuine sheepskin.
              <span>
                Sourced from ethical practices, our sheepskin is meticulously
                selected for its luxurious texture and durability. Ideal for
                creating cozy blankets, stylish apparel, or enhancing home decor
                with a touch of timeless elegance.
              </span>
            </small>
            <h4 className="font-bold text-large">Sheep</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://www.patchworksheep.co.uk/wp-content/uploads/2020/05/DSC_0461-copy.jpg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 group cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            <small className="text-default-500 overflow-hidden relative h-[60px] group-hover:h-[180px] duration-500">
              Discover the unparalleled softness and natural warmth of our
              genuine sheepskin.
              <span>
                Sourced from ethical practices, our sheepskin is meticulously
                selected for its luxurious texture and durability. Ideal for
                creating cozy blankets, stylish apparel, or enhancing home decor
                with a touch of timeless elegance.
              </span>
            </small>
            <h4 className="font-bold text-large">Reindeer</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 h-full w-full">
            <Image
              alt="Card background"
              className="h-full w-full object-cover rounded-xl"
              src="https://bloximages.newyork1.vip.townnews.com/swnewsmedia.com/content/tncms/assets/v3/editorial/2/39/239b926f-35f3-5051-9a8d-eefdda73b888/5fc68286e3d2d.image.jpg?resize=1200%2C800"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 group cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            <small className="text-default-500 overflow-hidden relative h-[60px] group-hover:h-[180px] duration-500">
              Discover the unparalleled softness and natural warmth of our
              genuine sheepskin.
              <span>
                Sourced from ethical practices, our sheepskin is meticulously
                selected for its luxurious texture and durability. Ideal for
                creating cozy blankets, stylish apparel, or enhancing home decor
                with a touch of timeless elegance.
              </span>
            </small>
            <h4 className="font-bold text-large">Deer</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://t3.ftcdn.net/jpg/04/78/15/66/360_F_478156667_g5HWuxaovhGb7BGdawZiYUMJEOcyQwdO.jpg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 group cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
            <small className="text-default-500 overflow-hidden relative h-[60px] group-hover:h-[180px] duration-500">
              Discover the unparalleled softness and natural warmth of our
              genuine sheepskin.
              <span>
                Sourced from ethical practices, our sheepskin is meticulously
                selected for its luxurious texture and durability. Ideal for
                creating cozy blankets, stylish apparel, or enhancing home decor
                with a touch of timeless elegance.
              </span>
            </small>
            <h4 className="font-bold text-large">Medical</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://waterhouseleather.com/wp-content/uploads/2019/08/Medical-Grade-Sheepkin-Stack.jpg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
