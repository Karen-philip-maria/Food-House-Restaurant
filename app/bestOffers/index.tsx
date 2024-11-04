const BestOffers=()=>{
    return(
        <div className="my-[600px]">
            <div>
                <p className="mx-64 text-center text-2xl font-extrabold">Quality Food</p>
                <h1 className="mx-64 text-center  text-5xl font-extrabold">Get The Best Offers</h1>
                <div className="text-center">
                <p className="mx-64 my-[23px]">The food at your doorstep. Why starve when you have us.
                    <br/>
                     You hunger partner.Straight out of the oven to your doorstep. 
                </p>
                </div>
            </div>
            <div className="flex gap-80 mx-80  my-12">
            <div>
                <h1 className="font-extrabold text-3xl">Any day Offers</h1>
                <p>New phenomenon</p>
                <p>Burger taste</p>
                <p className="text-yellow-400 text-3xl">$12.90</p>
                <img src="./images/line.png"/>
                <div>
            <img className="ml-[132px] my-[-203px]"  src="./images/burger.png"/>
            </div>
            </div>
            <div>
                <h1 className="font-extrabold text-3xl">Other <br></br> flavors</h1>
                <p>Save roo.we</p>
                <p>made salats</p>
                <p className="text-yellow-400 text-3xl">$12.90</p>
                <img src="./images/line.png"/>
                <div>
            <img className="ml-[110px] my-[-223px]" src="./images/salats.png"/>
            </div>
            </div>
            <div>
                <h1 className="font-extrabold text-3xl">Find <br></br> a poco</h1>
                <p>store near</p>
                <p>you</p>
                <img src="./images/line.png"/>
                <div>
            <img className="ml-[100px] my-[-173px]"  src="./images/poco.png"/>
            </div>
            </div>
            </div>
            </div>
    )
}
export default BestOffers;