import React, { useState } from "react";

const Accordian = () => {
  const [show, setShow] = useState(false);

  const datas = [
    { question: "what", answer: "kya" },
    { question: "why", answer: "kyu" },
    { question: "when", answer: "kab" },
  ];

  const toggle = (index) => {
    setShow(show === index ? false : index);
  };

  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen px-4 md:px-8 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
        WH Questions
      </h1>
      {datas.map((data, index) => (
        <div
          className="border border-gray-600 w-full max-w-xl md:max-w-3xl my-2 p-4 rounded-lg shadow-lg bg-gray-800"
          key={index}
        >
          <h1
            className="text-lg md:text-xl font-bold cursor-pointer text-yellow-400 hover:text-yellow-300 transition-all duration-300"
            onClick={() => toggle(index)}
          >
            {data.question}
          </h1>
          {show === index && (
            <p className="mt-2 text-gray-200 bg-gray-900 p-3 rounded-md text-sm md:text-base">
              {data.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
