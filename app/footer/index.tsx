import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";


const Footer=()=>{
    return(
        <div className="flex justify-evenly bg-black my-[-434px]">
        <div className="text-white  ml-[10px]" >
           <p className="text-white-500 text-[30px] font-extrabold" >Food House.</p>
           <p className="text-[20px] font-light text-zinc-550">Best cooks and best delivery guys all <br />
            at your service.Hot tasty food will <br />
            reach you in 60 minutes</p>
        <div className="flex gap-8 text-yellow-400 text-5xl	">
        <ImFacebook2 />
        <FaSquareTwitter />
        <ImLinkedin />
        </div><br /><br />
      </div>
      <div className="text-white my-4 ml-[300px] mt-[-6px]" >
         <p className="text-white-500 text-[30px] font-extrabold">Company</p><br />
         <p className="text-[20px] font-light text-zinc-550">Career</p>
         <p className="text-[20px] font-light text-zinc-550">About Us </p>
         <p className="text-[20px] font-light text-zinc-550">Blog</p>
         <p className="text-[20px] font-light text-zinc-550">Press Info</p>
         <p className="text-[20px] font-light text-zinc-550">Features</p>
      </div>
      <div className="text-white my-4 ml-[300px] mt-[-6px]" >
         <p className="text-white-500 text-[30px] font-extrabold">Fudo</p><br />
         <p className="text-[20px] font-light text-zinc-550">Why Fudo</p>
         <p className="text-[20px] font-light text-zinc-550">How it Works</p>
         <p className="text-[20px] font-light text-zinc-550">Why Choose Us</p>
         <p className="text-[20px] font-light text-zinc-550">Client Stories</p>
         <p className="text-[20px] font-light text-zinc-550">Gallery</p>
      </div>
      <div className="text-white my-4 ml-[100px] mt-[-10px]" >
         <p className="text-white-500 text-[30px] font-extrabold ml-[-23px]">Menu</p><br />
         <p className="text-[20px] mt-[-18px] ml-[-20px] font-light text-zinc-550">Breakfast</p>
         <p className="text-[20px] ml-[-20px] font-light text-zinc-550">Lunch</p>
         <p className="text-[20px] ml-[-20px] font-light text-zinc-550">Dinner</p>
         <p className="text-[20px] ml-[-20px] font-light text-zinc-550">Fast Foods</p>
         <p className="text-[20px] ml-[-20px] font-light text-zinc-550">Drinks</p>
      </div>
       </div>
        
    );
};
export default Footer;

