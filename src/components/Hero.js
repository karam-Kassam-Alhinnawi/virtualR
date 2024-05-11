import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export default function Hero(){
    return(
        <div className="hero px-5 pt-20 md:px-32 flex justify-center flex-col items-center">
            <h1 className="text-4xl text-center lg:text-7xl text-white">VirtualR 
            build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent"> for <br /> developers</span>
            </h1>
            <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>

            <div className="buttons hidden flex-col md:flex md:flex-row mt-10">
       <button className="text-white bg-gradient-to-r from-orange-500 to-red-800 rounded mr-5 px-6 py-3">Start For Free</button>

       <button className="text-white border rounded border-white mr-8 px-6 py-3 transition-transform duration-1000 hover:bg-gradient-to-r from-orange-500 to-red-800 hover:border-none">Documentation</button>
       </div>  

       <div className="videos flex mt-8">
       <video
           autoPlay loop muted 
            className="rounded-lg w-1/2 border border-orange-700 
            shadow-sm shadow-orange-400 mx-0 my-4 md:mx-2">
            <source src={video1} type="video/mp4" />
          </video>
          <video
           autoPlay loop muted 
            className="rounded-lg w-1/2 border border-orange-700 
            shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4" />
         </video>
        </div> 
    
        </div>
    )
}
