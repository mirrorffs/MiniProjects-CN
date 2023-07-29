import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useSelector,useDispatch } from "react-redux";
import { notyActions, notySelector } from "../redux/reducers/alertReducer";
 
export const Timer = () => {
  const message = useSelector(notySelector)
  const dispatch = useDispatch()
  // get alert message here
  if(message){
    setTimeout(() => {
      dispatch(notyActions.reset())
    }, 2000);
  }
  // create effect to reset alert message here

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message&&
          <div className="alert">
            {message}
          </div>
      }
    
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
