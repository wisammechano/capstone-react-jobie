import { FaListUl } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

const summary = {
  salaryMin: 45000,
  salaryMax: 180000,
  currency: {
    name: "United States Dollars",
    symbolShort: "$",
    symbolLong: "USD",
  },
  gender: "any",
  experience: "2+ years",
  workLevel: "senior",
  category: "Web Development",
};

export default function PositionSummary() {
  return (
    <div className=" bg-light h-auto w-80">
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <BsCurrencyDollar className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">offered salary</h1>
          <h1 className="text-base">
            {summary.salaryMin +
              summary.currency.symbolShort +
              "-" +
              summary.salaryMax +
              summary.currency.symbolShort}
          </h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaUserAlt className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Gender</h1>
          <h1 className="text-base">{summary.gender}</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaLightbulb className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Experience</h1>
          <h1 className="text-base">{summary.experience}</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaLayerGroup className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Work Level </h1>
          <h1 className="text-base"> {summary.workLevel}</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaListUl className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Category</h1>
          <h1 className="text-base">{summary.category}</h1>
        </div>
      </div>
    </div>
  );
}