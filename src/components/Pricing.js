import { CheckCircle2 } from "lucide-react";

const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advance)",
        "Private Mode",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
    },
];

export default function Pricing(){
    return(
        <div className="pricing to-black px-5 pt-20 md:px-32 flex justify-center flex-col items-center mb-16" id="pricing">
            <h2 className="text-3xl sm:text-5xl text-white lg:text-6xl text-center my-8 tracking-wide">Pricing</h2>
        
        <div className="pricing-plans flex items-center justify-center flex-wrap gap-6 mt-6">
            {pricingOptions.map((plan) => 
                <div className="plan text-white border border-gray-600 rounded-xl p-8 w-[350px] h-[500px] md:w-[400px] md:h-[500px]">
                    <h3 className="text-4xl ">
                        {plan.title}
                        {plan.title === "Pro" && 
                         <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                        }
                    </h3>

                    <p className="mt-8">
                    <span className="text-5xl mt-6 mr-2">{plan.price}</span>
                    <span className="text-neutral-400 tracking-tight"> / Month</span>
                    </p>

                  <ul className="mt-8">
                    {plan.features.map((feature) =>
                      <li className="flex gap-4 mb-6"> <CheckCircle2/> <span>{feature}</span> </li>
                    )}
                  </ul>  

                  <div className="buttons flex justify-center items-center">
                  <button className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</button>
                  </div>
                </div>
            )}
        </div>
         
        </div>
    )
}