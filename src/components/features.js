import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const features = [
    {
      icon: <BotMessageSquare />,
      text: "Drag-and-Drop Interface",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <Fingerprint />,
      text: "Multi-Platform Compatibility",
      description:
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      icon: <ShieldHalf />,
      text: "Built-in Templates",
      description:
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon: <BatteryCharging />,
      text: "Real-Time Preview",
      description:
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      icon: <PlugZap />,
      text: "Collaboration Tools",
      description:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      icon: <GlobeLock />,
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
];

export default function Features(){
     return(
        <div className="features px-5 py-10 md:px-32 flex justify-center items-center flex-col" id="features">
            <div className="features-header bg-gray-900 px-2 rounded">
                <p className="text-orange-500">Features</p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6x mt-10 lg:mt-20 text-white">Easily build <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">your code</span></h2>
        
            <div className="features-box mt-10 lg:mt-20 grid items-center grid-rows-6 grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 gap-6 gap-y-16">
              {features.map((feature) =>
                 <div className="flex items-center">

                    <div className="flex items-center">
                    <div className="left-section-feature text-orange-500 transition-all duration-500 bg-gray-900 p-2 rounded-full mr-6 hover:bg-orange-500 hover:text-white">{feature.icon}</div>      
                    <div className="right-section-feature text-white block">
                    {feature.text}

                    <p className="text-gray-500 mt-3">{feature.description}</p>

                    </div>
                    </div>

                 </div>
                 )}
            </div>

        </div>
     )
}