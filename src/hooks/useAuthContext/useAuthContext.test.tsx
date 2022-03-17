import { renderHook } from '@testing-library/react-hooks';

import { useAuthContext } from './useAuthContext';

describe('useAuthContext', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useAuthContext());

    expect(result.current).toEqual('1');
  });
});