import Button from "../Elements/Button/";

/* eslint-disable react/prop-types */
const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <div className="flex flex-col justify-between max-w-xs p-5 text-blue-600">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  const { image, name } = props;
  return (
    <div className="header">
      <img src={image} alt={image} className="h-72 h-60 object-cover " />
      <p className="font-bold text-xl mt-3">{name.substring(0, 20)}</p>
    </div>
  );
};

const Body = (props) => {
  const { desc } = props;
  return (
    <div className="body">
      <p className="text-sm mt-3 ">{desc.substring(0, 150)}...</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer mt-3">
      <Button type="submit" children="Add To Cart" />
    </div>
  );
};

Product.Header = Header;
Product.Body = Body;
Product.Footer = Footer;
export default Product;
