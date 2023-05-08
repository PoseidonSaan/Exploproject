import React from "react";
import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFBE7B] to-[#EED971] h-full w-full">
      <div className=" bg-[#FFA351] flex">
        <div id="image" className="flex items-center ml-5   ">
          <img className="w-32" src={logo} alt="logo" />
          <h1 className="px-10 font-bold font-serif text-4xl">
            IIT(BHU), Varanasi
          </h1>
        </div>
        <ul className="flex justify-end items-center">
          <li></li>
          <li className=" mr-5 text-2xl font-bold text-black hover:text-white cursor-pointer">
            <h1>Explo project under Dr M. Vashishtha </h1>
          </li>
          <li className="text-2xl font-bold text-black hover:text-white cursor-pointer">
            <h1>Department of Mechanical Engineering </h1>
          </li>
        </ul>
      </div>

      <div className="flex">
        <div id="container" className="w-1/3 pl-8 my-20 capitalize">
            <ol className="pt-10 list-disc" >
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter name of car</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter kms driven</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter fuel type</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter transmission</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter owner</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter manufacturer</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter engine</h1>
                </li>
                <li className="text-2xl font-bold text-black font-mono hover:text-white cursor-pointer pb-5">
                    <h1>enter seats</h1>
                </li>

            </ol>
        </div>
        <div className="flex-col justify-center mx-12 bg-[#FFA351] rounded-md my-10 h-4/5 px-10 py-10 w-2/3">
          <div className="text-4xl font-bold text-slate-900 py-10 text-left ">
            Find the right price for your car{" "}
          </div>
          <div className="grid grid-row-2 ">
            <div>
              <form className="grid grid-cols-4 justify-evenly py-7 capitalize">
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="car_name">
                    car name
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="car_name"
                    id="car_name"
                    placeholder="Enter the name of car"
                  />
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="Kms_Driven">
                    Kms Driven
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="Kms_Driven"
                    id="Kms_Driven"
                    placeholder="Enter the Kms Driven"
                  />
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="fuel_type">
                    Fuel Type
                  </label>
                  <select className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="" className="text-gray-400">
                      Select your Fuel Type
                    </option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Cng">CNG</option>
                    <option value="Electric">Electric</option>
                    <option value="Lpg">LPG</option>
                  </select>
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="Transmission">
                    Transmission
                  </label>
                  <select className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select your Transmission type </option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="Owner">
                    Owner
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="Owner"
                    id="Owner"
                    placeholder="Enter the Owner"
                  />
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="manufacturer">
                    Manufacturer
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="manufacturer"
                    id="manufacturer"
                    placeholder="Enter the manufacturer"
                  />
                </div>
                <div className="flex flex-col px-2">
                  <label className="text-2xl py-5" for="Engine">
                    Engine
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="Engine"
                    id="Engine"
                    placeholder="Enter the Engine"
                  />
                </div>
                <div className="flex flex-col pl-2 py-9">
                  <label className="text-2xl " for="seats">
                    Seats
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-3xl px-4 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    name="seats"
                    id="seats"
                    placeholder="Enter the seats"
                  />
                </div>
              </form>
            </div>
            <div className=" items-center flex flex-col">
              <button className="bg-[#990011] text-white text-2xl font-bold rounded-3xl px-4 py-4 w-56 my-10 hover:bg-red-900   ">
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
