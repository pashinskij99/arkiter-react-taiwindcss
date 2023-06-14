import React from 'react';
import logo from '../../Assets/logo.png';
import { MdArrowOutward } from 'react-icons/md';

const ProductComparison = () => {
const comparisonData = [
    {
      feature: 'Architecture Interviews',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Own analytics dashboard',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'AI Coding Interviews',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Product Development Simulation',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: true,
      Arkiter: true,
    },
    // Add more features here
  ];

  return (
    <div className="w-full mx-auto py-12 px-4 md:w-3/4">
      <h2 className="text-3xl text-[#0A265F] text-center font-bold mb-4 pb-12">Why Choose Arkiter?</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2"></th>
              <th className="p-2 text-[#0A265F]">Others</th>
              <th className="p-2 rounded-tl-lg rounded-tr-lg py-8 bg-[#0A265F] justify-center text-white">
                <img src={logo} alt="Competitor B Logo" className="mx-auto w-1/2 md:w-1/6" />
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#D9D9D9]/[0.44]' : 'bg-white'}>
                <td className="p-2 rounded-tl-lg rounded-bl-lg pl-4 py-4 text-[#0A265F] font-semibold text-xs md:text-lg lg:text-lg">{item.feature}</td>
                <td className="p-2 text-center text-2xl">{item.Others ? <span className="text-[#0A265F]">&#x2714;</span> : <span className="text-[#D40D00]">&#x2718;</span>}</td>
                <td className={`p-2 text-center text-2xl bg-[#0A265F]`}>{item.Arkiter ? <span className="text-[#49CCF9]">&#x2714;</span> : <span className="text-[#D40D00]">&#x2718;</span>}</td>
              </tr>
            ))}
            <tr className="bg-white">
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2 py-8 text-center bg-[#0A265F] rounded-bl-lg rounded-br-lg flex justify-center items-center">
                <button className="bg-white text-[10px] md:text-base lg:text-base text-[#0A265F] w-full md:w-1/2 px-4 py-2 rounded-md font-bold flex flex-row items-center justify-center">
                  Sign up <MdArrowOutward className="ml-2" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;
