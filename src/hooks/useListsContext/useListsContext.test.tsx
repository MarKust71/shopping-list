import { renderHook } from '@testing-library/react-hooks';

import { useListsContext } from './useListsContext';

describe('useListsContext', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useListsContext());

    expect(result.current).toEqual('1');
  });
});