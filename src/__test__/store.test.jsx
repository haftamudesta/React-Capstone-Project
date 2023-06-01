import store from '../redux/store';
import memesReducer from '../redux/memeSlice';

test('Configures the store correctly', () => {
  expect(store.getState()).toEqual({
    memess: memesReducer(undefined, {}),
  });
});
