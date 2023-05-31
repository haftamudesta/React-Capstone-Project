import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchingMemesInfo } from '../../redux/memeSlice';
import MemesCard from './MemesCard';
import classes from './Memes.module.css';

const Memes = () => {
  const navigate = useNavigate();
  const { isLoading, memesData } = useSelector((state) => state.memess);
  const [renderedMemes, setRenderedMemes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingMemesInfo());
  }, [dispatch]);

  const navigateDetail = (detail) => {
    if (detail.id) {
      navigate(`/memesDetail/${detail.id}`);
    }
  };

  const filteredMemes = memesData
    ? memesData.filter((item) => {
      if (renderedMemes === '') {
        return item;
      }

      if (item.name.toLowerCase().includes(renderedMemes)) {
        return item;
      }
      return null;
    })
    : [];
  let colorPicker = true;
  let checkColor = 1;

  return (
    <div>
      <div className={classes.title__input}>
        <h1 className={classes.memes__title}>Memes Generator</h1>
        <input
          type="text"
          onChange={(e) => setRenderedMemes(e.target.value)}
          placeholder="Search for a memes..."
          value={renderedMemes}
          className={classes.input__container}
        />
      </div>
      <div className={classes.grid}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          filteredMemes.length > 0
          && filteredMemes.map((meme, index) => {
            checkColor += 1;
            if (checkColor === 3) {
              colorPicker = !colorPicker;
              checkColor = 1;
            }
            return (
              <div
                key={index}
                className={
                  colorPicker
                    ? classes.memes__container1
                    : classes.memes__container2
                }
                aria-hidden="true"
                onClick={() => navigateDetail(meme)}
              >
                <MemesCard
                  image={meme.url}
                  name={meme.name}
                  boxCount={meme.box_count}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Memes;
