import { useState } from 'react'

export type SetMouseStatusDown = () => void
export type setMouseStatusUp = () => void

export const useMouseDown = (): [boolean, SetMouseStatusDown, setMouseStatusUp] => {
  const [mouseDown, setMouseDown] = useState(false)

  const onMouseDown: SetMouseStatusDown = () => setMouseDown(true)

  const onMouseUp: setMouseStatusUp = () => setMouseDown(false)

  return [mouseDown, onMouseDown, onMouseUp]
}
