import "./App.css";
import R1 from "../src/images/r1.svg";
import R2 from "../src/images/r2.svg";
import R3 from "../src/images/r3.svg";

import JD from "../src/images/jd.svg";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Reward1 from "../src/images/reward1.png";

function App() {
  return (
    <div className="App">
      {/* Rank Award Sections */}

      <div>
        <h2 className="text-2xl font-medium font-prompt mt-12 px-5">
          Rank Awards
        </h2>
      </div>

      {/* --------------------------------------------- */}

      <div className="px-5 mt-8 grid md:grid-cols-10 sm:grid-1 gap-[35px]  sm:px-5">
        <div className="col-span-7">
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-gradient-to-r from-slate-300 to-zinc-200 rounded- border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-xl font-normal font-prompt ">Rank</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">User</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">
                7-Day Win Rate
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">7-Day Profit</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-gradient-to-r from-orange-300 to-orange-50 border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <img src={R1} alt="" />
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-gradient-to-r from-slate-200 to-slate-50 border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <img src={R2} alt="" />
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <img src={R3} alt="" />
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black  text-sm font-semibold font-prompt">
                5
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
          <div className="flex justify-around max-w-[960px] h-[70px] items-center bg-white border-b-slate-200 border-2 border-r-0 border-l-0">
            <div>
              <h3 className="text-black text-sm font-semibold font-prompt">
                6
              </h3>
            </div>
            <div className="flex gap-2">
              <img src={JD} alt="name" />
              <h3 className="text-xl font-normal font-prompt ">Jhon Doe</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">91.84 %</h3>
            </div>
            <div>
              <h3 className="text-xl font-normal font-prompt ">5.664</h3>
            </div>
          </div>
        </div>

        {/* Features Section */}

        <div className="col-span-3 md:m-0 sm:m-auto">
          <div className="rounded-md bg-gradient-to-r from-indigo-200 to-blue-100  max-w-[385px] h-[70px]  ">
            <h2 className="py-5 px-40 text-xl font-normal font-prompt">
              Future
            </h2>
          </div>
          <div className="bg-gradient-to-r from-indigo-200 to-blue-50 rounded-md max-w-[385px] min-h-[662px] mt-5">
            <div className="pt-[26px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
            <div className="pt-[20px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
            <div className="pt-[20px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
            <div className="pt-[20px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
            <div className="pt-[20px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
            <div className="pt-[20px]">
              <div className="rounded-md bg-white max-w-[335px] h-[85px] m-auto   ">
                <h2 className="py-5 px-32 text-xl font-normal font-prompt">
                  Future
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/* <div>
        <div className="text-center mt-[60px]">
          <ChevronLeftIcon />
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            1
          </span>
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            2
          </span>
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            3
          </span>
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            4
          </span>
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            5
          </span>
          <span className="text-[21px] hover:text-white text-base font-prompt font-medium font-prompt gap-3  hover:bg-[#4949EE] px-4 rounded-full py-2 ">
            6
          </span>

          <ChevronRightIcon />
        </div>
      </div> */}

      {/* Ranks Reward Sections */}
      <div className="mt-10 px-5 rounded-md ">
        <div className="bg-gray-400">
          <div className="p-10">
            <h1 className="font-prompt text-center text-4xl font-medium">
              Rank Rewards
            </h1>
          </div>

          <div className="flex justify-around flex-wrap p-20 ">
            <div className="flex flex-col items-center gap-y-2">
              <img widht="100%" src={Reward1} alt="" />
              <span>L1</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <img widht="100%" src={Reward1} alt="" />
              <span>L1</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <img widht="100%" src={Reward1} alt="" />
              <span>L1</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <img widht="100%" src={Reward1} alt="" />
              <span>L1</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <img widht="100%" src={Reward1} alt="" />
              <span>L1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
