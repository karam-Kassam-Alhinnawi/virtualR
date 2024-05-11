import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export default function Testimonials(){
     return(
        <div className="testimonials px-5 pt-10 md:px-32 flex  flex-col justify-center items-n" id="testimonials">
            <h2 className="text-3xl text-center sm:text-5xl lg:text-6x mt-10 lg:mt-20 text-white">What people are saying</h2>
            <div className="test mt-10 grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-10">
           {testimonials.map((testimonial) => 
           <div className="testimonial flex flex-col justify-between w-[350px] border rounded border-neutral-800 p-6 text-white">
              <p className="font-thin">{testimonial.text}</p>
              <div className="testimonials-info flex mt-4">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt="" />
                <div className="testimonials-text">
                <span>{testimonial.user}</span>
                <p>{testimonial.company}</p>
                </div>
              </div>
           </div>
        )}
           </div>
         </div>
     )
}