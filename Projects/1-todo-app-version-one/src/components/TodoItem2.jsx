let todo = "Go to college"
let date = "07/07/2025"

function TodoItem2(){
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

export default TodoItem2;