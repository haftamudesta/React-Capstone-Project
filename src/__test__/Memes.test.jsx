import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
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

it('renders  input element correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Memes />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByPlaceholderText('Search for a memes...'))
    .toBeInTheDocument;
});
