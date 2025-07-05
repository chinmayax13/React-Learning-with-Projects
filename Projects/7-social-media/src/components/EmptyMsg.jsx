
const EmptyMsg = ({onGetPostsClick}) =>{
  return <center className="empty-msg">
    <h2 >Currently no post available</h2>
    <button type="button"
    className="btn btn-primary"
    onClick={onGetPostsClick}
    >Get Posts from Server</button>
    </center>
}
export default EmptyMsg;