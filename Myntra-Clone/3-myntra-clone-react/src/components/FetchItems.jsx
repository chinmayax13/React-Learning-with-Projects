import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems =() => {
  const fetchStatus = useSelector(store => store.fetchStatus);

  const dispatch = useDispatch();

   useEffect(() => {
      if(fetchStatus.fetchDone){
        return;
      }
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusActions.markFetchingStarted());
      fetch("http://localhost:8008/items", {signal})
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items));
      });

      return () =>{
        controller.abort();
      };
      
  },[fetchStatus])

  return <>
  
  </>
}

export default FetchItems;