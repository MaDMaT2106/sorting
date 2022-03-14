import { useDispatch, useSelector } from "react-redux";
import {
  setArrayToSort,
  setViewType,
  setAlgorithmType,
  setAnimationSpeed,
} from "../../redux/actions/action";
import InputArray from "../../components/InputArray/InputArray";

import { insertionSort } from "../../algorithms/insertion";
import { bubbleSort } from "../../algorithms/bubblesort";
import { quickSort } from "../../algorithms/quicksort";
import { sleep } from "../../algorithms/sleep";

import "./SidebarMenu.css";

const SidebarMenu = () => {
  const dispatch = useDispatch();

  const arrayToSort = useSelector((state) => state.sortReducer.arrayToSort);
  const animationSpeed = useSelector(
    (state) => state.sortReducer.animationSpeed
  );
  const algorithm = useSelector((state) => state.sortReducer.algorithm);
  const viewType = useSelector((state) => state.sortReducer.viewType);


  async function choose() {
    let animations = [];

    switch (algorithm) {
      case "bubblesort":
        animations = bubbleSort(arrayToSort);
        break;
      case "quicksort":
        animations = quickSort(arrayToSort);
        break;
      case "insertsort":
        animations = insertionSort(arrayToSort);
        break;
      default:
        animations = bubbleSort(arrayToSort);
        break;
    }
    await parseAnimations(animations);
  }

  async function parseAnimations(animations) {
	  
    if (viewType === "custom") {
      for (const animation of animations) {
        const [type, data, arr] = Object.entries(animation);
        const [i, j] = data[1];

        if (type[1] === "swap") {
          document.querySelector(`#bar-${i}`).style.backgroundColor = "#ff2400";
          document.querySelector(`#bar-${j}`).style.backgroundColor = "#ff2400";
        } else if (type[1] === "select") {
          document.querySelector(`#bar-${i}`).style.backgroundColor = "#00587a";
          document.querySelector(`#bar-${j}`).style.backgroundColor = "#00587a";
        }
        await sleep(animationSpeed);
        document.querySelector(`#bar-${i}`).style.backgroundColor = "##dd85e7";
        document.querySelector(`#bar-${j}`).style.backgroundColor = "##dd85e7";
        if (type[1] === "swap" && arr[1] !== undefined) {
          dispatch(setArrayToSort(arr[1]));
        }
      }
    } else if (viewType === "line") {
      for (const animation of animations) {
        const [type, data, arr] = Object.entries(animation);
		const [i, j] = data[1];
		await sleep(animationSpeed);
        if (type[1] === "swap" && arr[1] !== undefined) {
          dispatch(setArrayToSort(arr[1]));
        }
      }
    }
  }

  

  return (
    <div className="sidebar">
      <header>Sorting Algorithms</header>

      <InputArray />

      <div className="select-box">
        <label>Select view</label>
        <select
          className="select"
          value={viewType}
          onChange={(e) => dispatch(setViewType(e.target.value))}
        >
          <option value="custom">Custom</option>
          <option value="line">Line</option>
        </select>
      </div>

      <div className="select-box">
        <label htmlFor="algo">Select algorithm</label>
        <select
          name="algo"
          className="select"
          value={algorithm}
          onChange={(e) => dispatch(setAlgorithmType(e.target.value))}
        >
          <option value="bubblesort">Bubble sort</option>
          <option value="insertionsort">Insertion sort</option>
          <option value="quicksort">Quick sort</option>
        </select>
      </div>
      <button
        className="button sort-btn"
        onClick={() => {
          // arrayToSort.length < 2 && alert("Please, enter at list two values");
          arrayToSort.length === 0 && alert("Enter array values!");
          choose();
        }}
      >
        Sort
      </button>

      <div className="speed">
        <label>Speed</label>
        <div className="speed-buttons">
          <button className="button speed-button" onClick={()=>dispatch(setAnimationSpeed(600))}>x1</button>
          <button className="button speed-button" onClick={()=>dispatch(setAnimationSpeed(300))}>x2</button>
          <button className="button speed-button" onClick={()=>dispatch(setAnimationSpeed(200))}>x3</button>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
