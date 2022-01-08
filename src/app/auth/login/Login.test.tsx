import React from 'react';
import { render, screen } from '@testing-library/react';

import { Login } from './Login';

describe('Login', () => {
  test('renders', () => {
    render(<Login />);
    const element = screen.getByText('Login');
    expect(element).toBeInTheDocument();
  });
});
