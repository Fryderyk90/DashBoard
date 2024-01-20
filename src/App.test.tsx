import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App  />);

    const test = screen.getByTestId('test');
    expect(test).toBeInTheDocument();

    // check if App components renders headline
  });
});