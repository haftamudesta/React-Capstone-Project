import store from '../redux/store';
import memesReducer, { fetchingMemesInfo } from '../redux/memeSlice';

describe('Redux Functionalities', () => {
  test('Configures the store correctly', () => {
    expect(store.getState()).toEqual({
      memess: memesReducer(undefined, {}),
    });
  });

  test('Dispatches fetchingMemesInfo action and updates memes state', async () => {
    const mockData = { memess: {} };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    await store.dispatch(fetchingMemesInfo('memesId'));
    const state = store.getState();
    expect(state.memess.isLoading).toBe(false);
    expect(state.memess.memesData).toEqual(mockData.memess);
  });
});
