import './App.css'
import Confetti from 'react-confetti'

function App() {
  return (
    <>
          <h1>Welcome Freshers!</h1>
          <div className="card">

            <Confetti
              width={screen.width}
              height={screen.height}
              initialVelocityY={10}
              initialVelocityX={5}
              gravity={0.02}
            />k


          </div>
    
    </>
  )
}

export default App
