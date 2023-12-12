import React from "react";
import rakingnews from "../../assets/images/brakingnews.jpg";
import previousnews from "../../assets/images/previousnews.jpg";
import finace from "../../assets/images/finace.jpg";
import update from "../../assets/images/update.jpg";
import mornigpost from "../../assets/images/mornigpost.jpg";
import imageone from "../../assets/images/imageone.jpg";
import imagetwo from "../../assets/images/imagetwo.jpg";
import imagethree from "../../assets/images/imagethree.jpg";
import imagefour from "../../assets/images/imagefour.jpg";
import imagefive from "../../assets/images/imagefive.jpg";

const newDataOne = [
  {
    id: 1,
    title: "Braking News",
    image: imagethree,
  },
  {
    id: 2,
    title: "Financial",
    image: imagetwo,
  },
  {
    id: 3,
    title: "Previous News",
    image: imageone,
  },
];

const newDataTwo = [
  {
    id: 1,
    title: "Morning Post",
    image: mornigpost,
  },
  {
    id: 2,
    title: "update",
    image: imagefour,
  },
];

const CardDesign = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-4gap-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto mt-10 flex-col gap-5 ">
        {newDataOne.map((item, i) => {
          return (
            <figure
              key={item.id}
              class="relative max-w-50% h-100% transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            >
              <a href="#">
                <img
                  src={item.image}
                  alt="Picture of the author"
                  className="bg-contain bg-centerzz"
                />
              </a>

              <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <h5 className="text-white font-sans">{item.title}</h5>
                <p>
                  Do you want to get notified when a new component is added to
                  Flowbite?
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-4gap-2 md:grid-cols-1 sm:grid-cols-1  container mx-auto mt-5 flex-col gap-5">
        {newDataTwo.map((item, i) => {
          return (
            <figure
              key={item.id}
              class="relative max-w-50% h-100% transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            >
              <a href="#">
                <img
                  src={item.image}
                  alt="Picture of the author"
                  className="bg-contain bg-centerzz"
                />
              </a>

              <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <h5 className="text-white font-sans">{item.title}</h5>
                <p>
                  Do you want to get notified when a new component is added to
                  Flowbite?
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default CardDesign;
