import workflowImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
    {
      title: "Code merge made easy",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Review code without worry",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "AI Assistance to reduce time",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Share work in minutes",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
];

export default function Workflow(){
     return(
        <div id="workflow" className="workflow to-black px-5 pt-20 md:px-32 flex justify-center flex-col items-center">
           <h2 className="text-3xl text-center sm:text-5xl lg:text-6x mt-10 lg:mt-20 text-white">
            Accelerate your 
            <span  className="bg-gradient-to-r from-orange-500
             to-red-800 bg-clip-text text-transparent"> coding workflow.</span></h2>
        
        <div className="flex flex-row items-center flex-wrap mt-12">
            <img className="w-full lg:w-[48%]" src={workflowImg} alt="" />
       
        <div className="checklistItems flex flex-col gap-6 items-center">
          {checklistItems.map((item) => 
          <div className="text-white flex items-center">

          
           
           <div className="item-descripton flex items-center mb-8">
           <div className="circle text-green-500 mr-4">
           <CheckCircle2/>
           </div>
           <div className="desc block">
           <p className="text-xl mb-2">{item.title}</p>
           <p className="text-gray-500">{item.description}</p>
           </div>
           </div>

          </div>
        )}
        </div>

        </div>
        
        </div>
     )
}