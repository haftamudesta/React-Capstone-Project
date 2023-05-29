import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchingMemesInfo } from '../../redux/memeSlice';
import classes from './MemesDetail.module.css';

const MemesDetails = () => {
  const { memesId } = useParams();
  const dispatch = useDispatch();
  const { memesData } = useSelector((state) => state.memes);
  useEffect(() => {
    dispatch(fetchingMemesInfo());
  }, [dispatch, memesId]);

  const [filterMemes] = memesData.filter((data) => data.id === memesId);
  if (!filterMemes || memesData.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={classes.memes__card}>
      <div>
        <img src={filterMemes.url} alt="" className={classes.memes__image} />
      </div>
      <div className={classes.memes__content}>
        <h1>
          Name:
          {filterMemes.name}
        </h1>
        <div className={classes.memes__parametrs}>
          <p>
            Width:
            {filterMemes.width}
          </p>
          <p>
            Height:
            {filterMemes.height}
          </p>
          <p>
            Box Count:
            {filterMemes.box_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemesDetails;
