import SpinnerStyles from './LoaderSpinner.module.css'

export default function LoaderSpinner() {
  return (
    <>
      <div
        className={` ${SpinnerStyles.spinner} blur-radial-gradient animate-spin`}
      >
        <div className={`${SpinnerStyles.spinner1} bg-pinkTheme-500 `}></div>
      </div>
    </>
  )
}
