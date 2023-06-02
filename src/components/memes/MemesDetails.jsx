import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchingMemesInfo } from '../../redux/memeSlice';
import classes from './MemesDetail.module.css';

const MemesDetails = () => {
  const { memesId } = useParams();
  const dispatch = useDispatch();
  const { memesData } = useSelector((state) => state.memess);
  useEffect(() => {
    dispatch(fetchingMemesInfo());
  }, [dispatch, memesId]);

  const [filterMemes] = memesData.filter((data) => data.id === memesId);
  if (!filterMemes || memesData.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={classes.memes__card}>
      <h1 className={classes.name__item}>
        Name:
        {filterMemes.name}
      </h1>
      <img src={filterMemes.url} alt="" className={classes.memes__image} />
      <div className={classes.memes__parametrs}>
        <p className={classes.memes__item__width}>
          Width
          <span className={classes.memes__parametr}>{filterMemes.width}</span>
        </p>
        <p className={classes.memes__item__height}>
          Height
          <span className={classes.memes__parametr}>{filterMemes.height}</span>
        </p>
        <p className={classes.memes__item__box}>
          Box Count:
          <span className={classes.memes__parametr}>
            {filterMemes.box_count}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MemesDetails;
