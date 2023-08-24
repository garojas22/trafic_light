import React, { useState, useEffect } from "react";

export function Home() {
	const [selectedColor, setSelectedColor] = useState("");
  
	useEffect(() => {
	  const interval = setInterval(() => {

		if (selectedColor === "red") {
		  setSelectedColor("yellow");
		} else if (selectedColor === "yellow") {
		  setSelectedColor("green");
		} else if (selectedColor === "green") {
		  setSelectedColor("red");
		}
	  }, 3000); 
  
	  return () => {
		clearInterval(interval);
	  };
	}, [selectedColor]);

return (

	<div className="p-5">
        <div className="trafic-light">
            <div className="py-1">
            	    <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow-red" : "")}></div>
            </div>
            <div className="py-1">
            	    <div onClick={() => setSelectedColor("yellow")} className= {"light yellow" + (selectedColor === "yellow" ? " glow-yellow" : "")}></div>
            </div>
            <div className="py-1">	
            	    <div onClick={() => setSelectedColor("green")} className= {"light green" + (selectedColor === "green" ? " glow-green" : "")}></div>
            </div>
		</div>         
	</div>

);	
};

export default Home;