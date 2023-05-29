import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Memes from '../components/memes/memes';
import store from '../redux/store';

it('Test MemesContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Memes />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
