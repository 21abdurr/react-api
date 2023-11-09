import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-x-5 p-5 shadow bg-blue-500 text-white ">
      <div className="block">
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="self-end">
        <Link to="/products">Products</Link>
      </div>
      <div className="absolute right-0 mr-5 flex gap-x-5">
        <div>
          <Link to="/author">Author</Link>
        </div>
        <div></div>
        <div className="">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png"
            alt="fast-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
