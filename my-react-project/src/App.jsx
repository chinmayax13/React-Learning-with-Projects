import MyButton from "./MyButton";
import DynaHello from "./DynaHello";
import RandomNum from "./RandomNum";
function App(){
  return <div>
    <h1>Hello World</h1>
    <DynaHello></DynaHello>
    <RandomNum></RandomNum>
    <RandomNum></RandomNum>
    <RandomNum></RandomNum>
    <button type="button" class="btn btn-primary">
      Notifications <span class="badge text-bg-secondary">4</span>
    </button>
    <MyButton></MyButton>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
  </div>
}

export default App;