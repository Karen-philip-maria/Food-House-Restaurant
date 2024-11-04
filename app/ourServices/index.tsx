const OurServices=()=>{
    return(
<div className="my-[-123px]">
     <div>
            <h1 className="text-5xl text-center">Our Services</h1>
      </div>
        <div className="flex gap-9 justify-evenly  my-12 mx-64">
            <div>
            <img className="mr-80 mt-[-24px]" src="./images/restaurant.png"/> 
            <h1 className="text-3xl">55+ Restaurants</h1>  
            </div>
            <div>
            <img  className="mr-80" src="./images/quality.png"/> 
            <h1 className="text-3xl mx-12">Good Quality</h1>  
            </div>
            <div>
            <img  className="mr-80" src="./images/discount.png"/> 
            <h1 className="text-3xl  mx-5">Discount System</h1>  
            </div>
            <div>
            <img  className="mr-80 mt-[30px]" src="./images/delivery.png"/> 
            <h1 className="text-3xl  mx-12">fast Delivery</h1>  
            </div>
        </div>
        </div>
    );
};
export default OurServices;