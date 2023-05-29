import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MemesCard from '../components/memes/MemesCard';
import store from '../redux/store';

it('Test MemesContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemesCard />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
