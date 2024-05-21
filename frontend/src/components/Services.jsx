import React from "react";
const Services = () => {
  const services = [
    {
      id: 1,
      url: "/pp1.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/pp2.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/pp3.jpg",
      title: "Wedding Planning",
    },
    {
      id: 4,
      url: "/pp4.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 5,
      url: "/pp5.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/pp6.jpg",
      title: "Game Night Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
