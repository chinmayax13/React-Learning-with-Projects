function AddTodo(){
  return (
    <div class="container items-container">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Tod Here"/>
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success myButton">
            Add</button>
          </div>
        </div>
     </div> 
  );
}

export default AddTodo;