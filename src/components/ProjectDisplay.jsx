import React from "react";
import Card from "../core/Card";

// Reusable Card component
// const Card = ({ title, description }) => (
//   <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
//     <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
//     <p className="text-gray-600 dark:text-gray-300">{description}</p>
//   </div>
// );

const ProjectDisplay = () => {
  // Example data for the cards
  const services = [
    { title: "PaySkul V1", description: "Building modern and responsive websites.", bg: '/images/one.png' },
    { title: "PaySkul V2", description: "Building modern and responsive websites.", bg: '/images/one.png' },
    { title: "Leank Service", description: "Creating powerful mobile applications.", bg: '/images/one.png' },
    { title: "Trip Tix", description: "Designing intuitive user interfaces.", bg: '/images/one.png' },
    // { title: "SEO Optimization", description: "Improving your site’s visibility on search engines." },
    // { title: "E-commerce", description: "Building robust online stores." },
    // { title: "Cloud Services", description: "Deploying and scaling cloud applications." },
  ];

  return (
    // <section className="bg-gray-100 dark:bg-gray-900 py-12">
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">

      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Check Out My projects
        </h2> */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-green-400 mb-8 animate-blink">
          Check Out My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} title={service.title} description={service.description} backgroundImage={service.bg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDisplay;
