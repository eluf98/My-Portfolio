import { skillIcons } from "../Data.js";

export function Skill() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-[4rem] mb-14">Skills</h1>
        <div className="flex gap-14  w-[66.2%] overflow-auto mb-8">
          {skillIcons.map((item, index) => {
            return (
              <div key={item.id || index}  className="relative flex flex-col ">
                <div
                  className={
                    item.tcClass +
                    " flex items-center justify-center " +
                    item.boxColor
                  }
                >
                  <img className="absolute w-36 " src={item.icon} />
                </div>
                <label className="text-center mt-4 font-semibold text-[1.75rem] text-gray-500">
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute z-10 w-[9rem] h-[3.5rem] bg-gray-600 rounded-r-[5rem]  translate-y-[1rem]"></div>
    </>
  );
}