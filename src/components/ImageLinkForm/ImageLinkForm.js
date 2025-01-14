import React from "react"; 
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="form center br2" >

            <p className='b f3 center white'>
               {`This magic brain App will connect the dots and detect faces in your pictures. Just paste in an image URL and give it a try`}
            </p>    

            <div className=' center pa2 br3 shadow-5' >
                    <input className='f4 hover-bg-light-blue pa2 w-70 center' type="text" onChange={onInputChange} />
                    <button className='w-30 grow f4 link pv2 dib white bg-light-purple bg-animate hover-bg-purple' onClick={onButtonSubmit}> Detect</button>
            </div>            
        </div>
    );
      
}

export default ImageLinkForm;