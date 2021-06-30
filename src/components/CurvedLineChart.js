import React, {useState,useEffect, useRef} from 'react'
import {select, line, curveCardinal} from 'd3';

function CurvedLineChart() {
    const [data, setData] = useState([10,30, 50,40,20,45]);
    const svgPieRef = useRef();
    useEffect(() => {
        const svg = select(svgPieRef.current);
        console.log("svg : ",svg)
        //------------------------------------------------
        const myLine = line().x((value,index)=> index*50).y(value=>(svg._groups[0][0].clientHeight-value)).curve(curveCardinal);
        //------------------------------------------------
        svg
            .selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value=>  myLine(value))
            .attr("fill", "yellow")
            .attr("stroke","blue");


    }, [data])
    return (
        <React.Fragment>
            <svg ref={svgPieRef}>
            </svg>
        </React.Fragment>
    )
}

export default CurvedLineChart;
