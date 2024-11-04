const Navbar = () => {
    return (
        <div className="fixed top-0 w-full flex justify-evenly bg-white shadow-lg z-50 p-4">
            <h3 className="text-yellow-400 italic text-[20px]">FoodHouse</h3>
            <div className="flex gap-12 text-[18px]">
                <p className="text-yellow-400 hover:shadow-lg hover:text-yellow-500 active:underline cursor-pointer transition-shadow duration-200">HOME</p>
                <p className="hover:shadow-lg hover:text-yellow-500 active:underline cursor-pointer transition-shadow duration-200">RESTAURANT</p>
                <p className="hover:shadow-lg hover:text-yellow-500 active:underline cursor-pointer transition-shadow duration-200">SERVICES</p>
                <p className="hover:shadow-lg hover:text-yellow-500 active:underline cursor-pointer transition-shadow duration-200">CART</p>
            </div>
        </div>
    );
};

export default Navbar;
