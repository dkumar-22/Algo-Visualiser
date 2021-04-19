import React from 'react';
import "./Legend.css";

const Legend = () => {
    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="row mx-4">
                    <div className="mx-2 start-node"></div>
                    <span className="sn">start node</span>    
                </div>
                <div className="row mx-4">
                    <div className="mx-2 target-node"></div>
                    <span className="sn">target node</span>    
                </div>
                <div className="row mx-4">
                    <div className="mx-2 wall-node"></div>
                    <span className="sn">wall node</span>    
                </div>
                <div className="row mx-4">
                    <div className="mx-2 unvisited-node"></div>
                    <span className="sn">unvisited node</span>    
                </div>
                <div className="row mx-4">
                    <div className="mx-2 visited-node"></div>
                    <span className="sn">visited node</span>    
                </div>
                <div className="row mx-4">
                    <div className="mx-2 shortest-path-node"></div>
                    <span className="sn">shortest path node</span>    
                </div>
            </div>
        </div>
    );
}
 
export default Legend;