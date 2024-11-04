
const  PopularFoods=()=>{
    return(
        <div className="ml-[83px] ">
        <div className="my--124 text-center font-extrabold">
        <p className=" my--128 italic">Online Store </p>
        <h1 className="text-3xl">Popular Food</h1>
            </div>
        <div className="flex justify-evenly ml-2">
        <div className="flex gap-9 justify-evenly ml-2 mx-16 ">
        <div>
        <img  className="ml-8  my-6" src="./images/FruitDish.png"/>
        <h1 className="mx-32">Fruit Dish</h1>
        <p className="mx-32">Dinko Food</p>
        <img  className="mx-24" src="./images/ratings.png"/>
        <button  className="my-[30px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px] ml-24">Add to Cart   $696</button>
        </div>
        <div>
        <img  className="mr-24" src="./images/chips.png"/>
        <h1 className="mx-32">Fruit Dish</h1>
        <p className="mx-32">Dinko Food</p>
        <img  className="mx-24" src="./images/ratings.png"/>
        <button  className="my-[30px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px] ml-24">Add to Cart   $696</button>
        </div>
        <div>
        <img  className="mr-24" src="./images/potatoes.png"/>
        <h1 className="mx-32">Fruit Dish</h1>
        <p className="mx-32">Dinko Food</p>
        <img  className="mx-24" src="./images/ratings.png"/>
        <button  className="my-[30px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px] ml-24">Add to Cart   $696</button>
        </div>
        <div>
        <img  className="mx-32 ml-[-23px]" src="./images/pizza.png"/>
        <h1 className="mx-32">Fruit Dish</h1>
        <p className="mx-32">Dinko Food</p>
        <img  className="mx-24" src="./images/ratings.png"/>
        <button  className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px] ml-24">Add to Cart   $696</button>
        </div>
        </div>
        </div>
        </div>
    );
};
export default PopularFoods;
