import React, { useState } from "react";
import './stylesheet/form.css';

const Form = ({first, second, third}) =>{
    const [demo,setDemo] = useState(false);
    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = third;
        link.download = "Form.pdf";
        link.click();
      };
    const handleDemo = () =>{
        if(!demo)
            setDemo(true);
        else   
            setDemo(false);
    }
    return(
        <div>
            <div className="headerdiv">
                <button onClick={downloadPDF}>
                    Download
                </button>
                <button onClick={handleDemo} style={{backgroundColor: demo ? "lightblue" : "white",}}>
                    Demo
                </button>
            </div>

            {!demo && Array.isArray(first) && (
                first.map((image, index) => (
                    <img
                        key={index}
                        src={image} 
                        className="image"
                        alt={`Image ${index + 1}`}
                    />
                ))
            )}
            {demo && Array.isArray(second) && (
                second.map((image, index) => (
                    <img
                        key={index}
                        src={image} 
                        className="image"
                        alt={`Image ${index + 1}`}
                    />
                ))
            )}

            

        </div>
    )
}

export default Form;