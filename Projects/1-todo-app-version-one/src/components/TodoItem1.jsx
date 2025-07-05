let todo = "Buy Milk"
let date = "26/06/2025"

function TodoItem1(){
  return( 
       <div class="container">
         <div class="row">
          <div class="col-6">{todo}</div>
          <div class="col-4"> {date}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger myButton">
            Delete</button>
          </div>
        </div>
        </div>
  );
}

export default TodoItem1;