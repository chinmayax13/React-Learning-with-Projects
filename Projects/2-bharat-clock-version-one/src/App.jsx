import ClockHeading from './components/clockHeading'
import ClockSlogan from './components/clockSlogan'
import CurrentTime from './components/currentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return <center class = "container">
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>

}

export default App
