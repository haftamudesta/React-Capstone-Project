import store from '../redux/store';

test('Configures the store correctly', () => {
  expect(store.getState()).toEqual({
    memess: memesReducer(undefined, {}),
  });
});
