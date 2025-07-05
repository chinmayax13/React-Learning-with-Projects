import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Home = () => {
  const allItems = useSelector(store => store.items);
  return (
    <main>
      <div className="items-container">
        {allItems.map(item => <HomeItem key={item.id} item={item}></HomeItem>)}
      </div>
    </main>
  );
};

export default Home;
