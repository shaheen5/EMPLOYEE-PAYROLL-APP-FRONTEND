import { render} from '@testing-library/react';
import { Login } from '../pages/login'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Heading tags test', () => {

  it('render title element', () => {
    const {getByTestId} = render(<Login />);
    const title = getByTestId('title');
    expect(title).toHaveTextContent("EMPLOYEE PAYROLL");
  })

  it('render header h2', () => {
    const {getByTestId} = render(<Login />);
    const header = getByTestId('signin');
    expect(header).toHaveTextContent('Sign In')
  })

});

describe('Login Form test', () => {

  test('check if form displays', () => {
    const { getByTestId } = render(<Login />);
    const logo = getByTestId('logo');
    const form = getByTestId('form');
    const email = getByTestId('email');
    const password = getByTestId('password');
    const button = getByTestId('submitButton');

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });


  test('check elements value', () => {
    const { getByTestId } = render(<Login />);
    const email = getByTestId('email');
    const password = getByTestId('password');

    expect(email).toHaveTextContent('email');
    expect(password).toHaveTextContent('password');

  });
});
