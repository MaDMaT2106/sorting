import { useDispatch} from "react-redux";
import {setArrayToSort} from '../../redux/actions/action'

const InputArray = () =>{
    const dispatch = useDispatch();

    const parseArray = (string) => {
        const parsedString = [...string.split(/\D/)];
        return parsedString;
      };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setArrayToSort(parseArray(event.target[0].value)));
      };

    return(
        <div className="input-array">
            <label>Enter array value</label>
            <div className="inputBlock">
                <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" />
                <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
}

export default InputArray;