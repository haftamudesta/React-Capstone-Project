import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MemesDetails from '../components/memes/MemesDetails';
import store from '../redux/store';

it('Test MemesContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemesDetails />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
