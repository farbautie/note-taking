import { css } from '../styled-system/css'

export default function App() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column' })}>
      <h1>Hello Vite!</h1>
      <div className={css({ display: 'flex', gap: 10 })}>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </div>
  )
}
