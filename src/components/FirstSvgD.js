import React, {useRef,useEffect, useState} from 'react';
import { select } from 'd3'; // select will make the svg readable

function FirstSvgD() {
  const svgRef = useRef();
  const [data,setData] = useState([10,20,30,40,50]);
  
  useEffect(() => {
    console.log("svgRef : ",svgRef);
    const svg = select(svgRef.current);
    svg.selectAll("circle").data(data).join(   // join is where we defines 3 kind of elements, the elements to be created i.e. enter, update, elements whic exit
      /* enter => enter.append("circle")
        .attr("class","new")
        .attr("r", value=>value)
        .attr("cx", value=>value+2)
        .attr("cy", value=>value+2)
        .attr("stroke","red"),
      update => update.attr("circle","updated").attr("class","new")
        .attr("r", value=>value)
        .attr("cx", value=>value+2)
        .attr("cy", value=>value+2)
        .attr("stroke","red"), */
       enter => enter.append("circle").attr("class","new"),
      update => update.attr("circle","updated").attr("class","new"),
      exit => exit.remove()
    )
        .attr("r", value=>value)
        .attr("cx", value=>value*2)
        .attr("cy", value=>value*2)
        .attr("stroke","red")
        .attr("fill","rgba(206, 17, 38, 0.05)");
  }, [data]); // here we pass the data to make it dynamic

 
  return (
    <div className="App">
     <svg ref={svgRef}></svg>
     <br/>
     <button onClick={() => setData(data.map(value => value+20))}>Update Data</button>
     <button onClick={()=>setData(data.filter(value=>value<50))}>Filter Data</button>
     <br/>
     {/* <svg>
       {data.map(value=>(
         <circle r={value}></circle>
       ))}
     </svg> */}
    </div>
  );
}

export default FirstSvgD
