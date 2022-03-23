import { renderHook } from '@testing-library/react-hooks';

import { useAuthenticationContext } from './useAuthenticationContext';

describe('useAuthContext', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useAuthenticationContext());

    expect(result.current).toEqual('1');
  });
});
