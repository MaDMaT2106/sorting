import {useSelector } from "react-redux";

import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import { Histogram } from "../components/Histogram/Histogram";
import LineGraph from '../components/Line/Line';


// stylesheet
import './SortingVisualizer.css';

const Visualizer = () => {

	const arrayToSort = useSelector((state) => state.sortReducer.arrayToSort)
	const viewType = useSelector((state) => state.sortReducer.viewType);

  return (
      <div className="container">
		<SidebarMenu/>
		{viewType === 'custom' && <Histogram/>}
		{viewType === 'line' && <LineGraph array={arrayToSort}/>}
      </div>
  );
};

export default Visualizer;
