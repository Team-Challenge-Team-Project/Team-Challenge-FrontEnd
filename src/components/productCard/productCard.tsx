import './productCard.style.css';
import { ImageFinder, SvgFinder } from '../../Helper';

type Props = {
  src: string;
};

const ProductCard = ({ src = 'girl.jpg' }: Props) => {
  return (
    <div className="product__count">
      <div className="product__like">
        <SvgFinder src="heart.svg" className="product__like_svg" alt="heart" />
      </div>
      <div className="product__img">
        <ImageFinder src={src} className="product__img_com" alt="product" />
      </div>
      <h4 className="product__brand">Brand Name</h4>
      <p className="product__info">Text Text Text</p>
      <p className="product__prise">100$</p>
    </div>
  );
};
export default ProductCard;
