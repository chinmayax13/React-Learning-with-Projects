
let name = 'Chinmaya'

let fullName = () =>{
  return "Chinmaya Subudhi"
}
function DynaHello(){
  return <h3>
    Hello this is just an explanation about dynamic component.. Hello from {name}.. my full name {fullName()}
  </h3>
}

export default DynaHello