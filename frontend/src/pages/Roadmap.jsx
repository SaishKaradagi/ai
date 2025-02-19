import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const Roadmap = ({ data }) => {
  console.log(data);

  //   const data = {
  //     roadmapTitle: "8-Month DevOps Roadmap",
  //     overallTimeFrame: "8 months",
  //     sections: [
  //       {
  //         sectionTitle: "Prerequisites (1 month)",
  //         topics: [
  //           "Linux fundamentals",
  //           "Networking concepts",
  //           "Git",
  //           "Bash scripting",
  //         ],
  //         time: "1 month",
  //       },
  //       {
  //         sectionTitle: "Fundamentals (2 months)",
  //         topics: [
  //           "Cloud provider (AWS, Azure, GCP)",
  //           "Virtualization",
  //           "Docker",
  //           "CI/CD concepts",
  //           "Basic Infrastructure as Code",
  //         ],
  //         time: "2 months",
  //       },
  //       {
  //         sectionTitle: "Intermediate (3 months)",
  //         topics: [
  //           "Kubernetes",
  //           "Container orchestration",
  //           "Advanced Infrastructure as Code",
  //           "Monitoring and logging",
  //           "CI/CD pipeline implementation",
  //         ],
  //         time: "3 months",
  //       },
  //       {
  //         sectionTitle: "Advanced (2 months)",
  //         topics: [
  //           "DevSecOps",
  //           "Automated testing",
  //           "Advanced Kubernetes",
  //           "Serverless computing",
  //           "Performance tuning",
  //         ],
  //         time: "2 months",
  //       },
  //     ],
  //   };

  return (
    <>
      <div className="">
        <h3 className="text-center font-bold text-lg">{data.roadmapTitle}</h3>
        <h3 className="text-center font-semibold">Time: {data.overallTimeFrame}</h3>
        <div className="border flex gap-3 rounded-lg  border-gray-500 p-3 mt-2">
          {data.sections.map((cur, index) => {
            return (
              <>
                <div
                  className=" mt-2 h-fit p-2 flex flex-col justify-center items-center rounded-lg  bg-slate-400"
                  key={index}
                >
                  <p className="text-green-300 text-lg" key={index}>
                    {cur.sectionTitle}
                  </p>
                  <p className="text-lg">{cur.time}</p>
                  <div className=" p-3 w-fit">
                    {cur.topics.map((topic, idx) => {
                      return (
                        <p
                          className="border p-1 bg-slate-200 mt-1 rounded-lg"
                          key={idx}
                        >
                          {topic}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    
    </>
  );
};

export default Roadmap;
