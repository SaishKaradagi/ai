import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Roadmap = () => {
  const [field, setField] = useState("");
  const [months, setMonths] = useState("");

  const [data, setData] = useState([]);
  console.log(data)

  // "Generate a structured JSON roadmap for becoming a software engineer in 8 months. The JSON should have four main sections: prerequisites, basic, intermediate, and advanced. Each section should include "topics" as a list of key concepts and "time" as the estimated time to complete them. Adjust the time for each section based on the goal of completing the roadmap in 8 months. The output should be formatted as clean and structured JSON, without additional explanations or resources."

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3000/roadmap", {
        field,
        months,
      });
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }

    console.log("Seacrching");
  };
  return (
    <div>
      {
        
       data.length==0 && <Dialog>
          <DialogTrigger className="text-white w-full">
            Search for roadmap{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col gap-2  "
              >
                <input
                  onChange={(e) => setField(e.target.value)}
                  type="text"
                  placeholder="Enter your field of Interest"
                  className=" border border-gray-400 rounded-lg p-2"
                />
                <input
                  onChange={(e) => setMonths(e.target.value)}
                  type="text"
                  placeholder="Enter months"
                  className="border border-gray-400 rounded-lg p-2"
                />
                <button className="text-white bg-red-500" type="submit">
                  Search
                </button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      }
    </div>
  );
};

export default Roadmap;


// /src/app/components/timeline/timeline-layout.tsx & timeline.tsx