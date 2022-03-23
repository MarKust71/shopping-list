import React from 'react';
import { render, screen } from '@testing-library/react';

import { AppProviders } from './AppProviders';

describe('AppProviders', () => {
  test('renders', () => {
    render(<AppProviders />);
    const element = screen.getByText('AppProviders');
    expect(element).toBeInTheDocument();
  });
});
