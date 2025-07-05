function AddTodo(){
  return (
    <div className="container items-container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Tod Here"/>
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success myButton">
            Add</button>
          </div>
        </div>
     </div> 
  );
}

export default AddTodo;