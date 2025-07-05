
function RandomNum(){
  let num = Math.random() * 100;

  return <h2 style={{"background-color":"yellow"}}>Random Number : {Math.round(num)}</h2>
}

export default RandomNum