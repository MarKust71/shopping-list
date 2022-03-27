import React from 'react';
import { render, screen } from '@testing-library/react';

import { Toast } from './Toast';
import { ToastPropsSeverity } from './Toast.types';

describe('Toast', () => {
  test('renders', () => {
    render(<Toast autoHideDuration={3000} isOpen={false} message={'message'} severity={ToastPropsSeverity.SUCCESS} />);
    const element = screen.getByText('Toast');
    expect(element).toBeInTheDocument();
  });
});
