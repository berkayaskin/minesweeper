import { act, renderHook } from '@testing-library/react'
import { useMouseDown } from './useMouseDown'

describe('useMouseDown', () => {
  it('should toggle state after onMouseDown and onMouseUp function calls', () => {
    const { result } = renderHook(() => useMouseDown())

    const [mouseDown, onMouseDown, onMouseUp] = result.current

    expect(mouseDown).toBe(false)

    act(() => {
      onMouseDown()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      onMouseUp()
    })

    expect(result.current[0]).toBe(false)
  })
})
