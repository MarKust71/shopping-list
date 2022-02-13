import React from 'react';
import { render, screen } from '@testing-library/react';

import { Logout } from './Logout';

describe('Logout', () => {
  test('renders', () => {
    render(<Logout />);
    const element = screen.getByText('Logout');
    expect(element).toBeInTheDocument();
  });
});
