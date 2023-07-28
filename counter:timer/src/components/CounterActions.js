import { useSelector,useDispatch } from "react-redux";
// add action creators imports here
import { resetCOUNTER,incrementCOUNTER,decrementCOUNTER } from "../redux/actions/counterActions";
export const CounterActions = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button onClick={()=>dispatch(decrementCOUNTER())} disabled={count <= 0}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button onClick={()=>dispatch(incrementCOUNTER())} disabled={count >= 10}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={()=>dispatch(resetCOUNTER())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
