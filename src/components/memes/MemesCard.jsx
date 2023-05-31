import propTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import classes from './MemesCard.module.css';

const MemesCard = ({ name, image, boxCount }) => (
  <div className={classes.memes_container__card}>
    <h1 className={classes.forward__icon}>
      <BsArrowRightCircle />
    </h1>
    <img src={image} alt="memes" className={classes.image__itm} />
    <h1 className={classes.memes__name}>
      Name:
      <span>{name}</span>
    </h1>
    <p className={classes.box__content}>
      Box Count:
      <span>{boxCount}</span>
    </p>
  </div>
);

MemesCard.defaultProps = {
  image: {},
  name: '',
  boxCount: '',
};

MemesCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  boxCount: propTypes.number,
};

export default MemesCard;
