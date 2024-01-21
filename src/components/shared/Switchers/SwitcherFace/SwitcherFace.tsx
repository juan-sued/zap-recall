import { InputHTMLAttributes } from 'react'
import './SwitcherSunAndMoon.css'

export default function SwitcherFace(
  props: InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input checked id="check-5" type="checkbox" {...props} />
        <label htmlFor="check-5"></label>
      </div>
    </div>
  )
}
