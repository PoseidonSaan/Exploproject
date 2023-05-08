import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="bg-[#FBEAEB] h-screen w-full">
      <div className="flex justify-center py-10">
        <div id="image" className=" w-32">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="h-full flex-col justify-center">
        <div className="text-4xl font-bold text-black text-center">
          Predicting the price of an old car using Machine Learning{" "}
        </div>
        <div className="grid grid-row-2 place-items-center ">
          <div>
            <form className="flex flex-wrap jusify-equally py-7 capitalize">
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

          <button className="bg-[#2F3C7E] text-white text-2xl font-bold rounded-3xl px-4 py-4 w-56 hover:bg-blue-500">
            Predict
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
