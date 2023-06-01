import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import store from '../redux/store';

it('Test NavContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders back arrow', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('back-arrow')).toBeInTheDocument;
});

it('renders Title correctly', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('memes-title')).toBeInTheDocument;
});

it('renders Icon correctly', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('icon-michrophone')).toBeInTheDocument;
});

it('renders setting Icon correctly', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('icon-setting')).toBeInTheDocument;
});
