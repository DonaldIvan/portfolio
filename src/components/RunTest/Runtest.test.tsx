// helloWorld.test.tsx
import { render, screen } from '@testing-library/react';
import Runtest from './Runtest';

test('renders donald', () => {
  render(<Runtest />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
