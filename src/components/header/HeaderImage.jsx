import images from "../../constants/images";

const HeaderImage = () => {
  return (
    <div className="header__image-div">
      <img className="header__image" src={images.header_image} alt="myself" />
    </div>
  );
};

export default HeaderImage;
