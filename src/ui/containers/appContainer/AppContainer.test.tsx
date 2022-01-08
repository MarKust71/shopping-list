import React from 'react';
import { render, screen } from '@testing-library/react';

import { AppContainer } from './AppContainer';

describe('AppContainer', () => {
  test('renders', () => {
    render(<AppContainer />);
    const element = screen.getByText('AppContainer');
    expect(element).toBeInTheDocument();
  });
});
