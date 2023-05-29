import propTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import classes from './MemesCard.module.css';

const MemesCard = ({ name, image, boxCount }) => (
  <div className={classes.memes_container__card}>
    <h1 className={classes.back__icon}>
      <BsArrowRightCircle />
    </h1>
    <img src={image} alt="memes" className={classes.image__itm} />
    <h1>
      Name:
      <span>{name}</span>
    </h1>
    <p>
      Box Count:
      <span>{boxCount}</span>
    </p>
  </div>
);

MemesCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  boxCount: propTypes.number,
};

export default MemesCard;
