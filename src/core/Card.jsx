// import React from "react";

// const Card = ({ title, description }) => {
//   return (
//     <div className="bg-white dark:bg-green-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200 text-white flex flex-col justify-end"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "200px",
      }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
