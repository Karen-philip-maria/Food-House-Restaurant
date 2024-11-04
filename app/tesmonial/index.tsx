import { PiQuotesFill } from "react-icons/pi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Tesmonial=()=>{
    return(
        <div className="text-center my-[460px]">
            <div className="mx-32 text-6xl">
                <h1 className="mx-32 text-3xl">Tesmonial</h1>
                <h1 className="mx-32 text-7xl my-[53px] font-extrabold">What Our Clients Say</h1>
                <div className="ml-[764px] text-yellow-400	text-9xl  my-[53px]">   
                    <PiQuotesFill/>
                    </div>
            </div>
                <div>
               <p className="mx-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
                ut labore et dolore magan aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                ullamco laboris nisis ut aliquip ex ea commodo
                </p> 
                <div className=" flex justify-center my-[53px]">
            <img src="./images/teamgroup.png"/> 
            </div>  
            <h1 className="mx-80 text-3xl font-extrabold">Mitchell Marsh</h1>  
            <p className="mx-80">CEO, Bexon Agency</p>
            <div>
            <MdOutlineArrowForwardIos />
            </div>
            <div className="flex gap-24 justify-center">


            <div className="my-[353px]">
            <img src="./images/phoneSales.png"/> 
            </div> 

        <div className="grid my-[500px]">
               <h1 className="text-2xl my-[23px] text-amber-400	">Download Our App</h1>
               <h1 className="text-5xl my-[23px]"> It's all here.</h1>
               <h1 className="text-5xl my-[23px]">All in one app.</h1>
             <p className="">
                Doscover local, on-demand delivery or pickup from <br />
                restaurants, nearby grocery and convinience stores. <br />
                and more
            </p>
            <div>
            <img src="./images/socilaMedias.png"/> 
            </div> 
          </div> 
            

        </div>
            <div className="flex justify-evenly">
                <div>
                    <h1 className="text-5xl my-[12px]">Subscribe Our Newsletter</h1>
                    <p className="text-2xl"> 
                        Subscribe on our newsletter to get our 
                        news
                    </p>
                    </div>
                    <div className="my-10">
    <label htmlFor="email" className="block text-gray-700 mb-2">Your email address:</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter your email" 
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
    />
</div>

                
                  <button  className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[60px] text-[25px] rounded-lg mr-[60px]">Subscribe</button>
            </div>
                </div> 
        </div>
    );
};
export default Tesmonial;