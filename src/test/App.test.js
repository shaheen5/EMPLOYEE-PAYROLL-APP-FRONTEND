import { render, screen } from '@testing-library/react';
import App from '../App';

test('login form should be in the document', () => {
  const component = render(<App />);
  console.log(component);
 // expect(linkElement).toBeInTheDocument();
});
