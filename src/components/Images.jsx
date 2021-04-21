import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";
const options = {
    buttons: {
     
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
     
      
     
    },
    thumbnails: {
        showThumbnails: false,
    }
}

class Images extends Component {
    constructor(props){
        super(props);
       
    }
   
    
    render() { 
        return (
            <SRLWrapper options={options}>
            <div className="gallery">
           
           
            { this.props.Photos ? this.props.Photos.map(res => 
                  <img key={res.id} src= {`https://live.staticflickr.com/${res.server}/${res.id}_${res.secret}_w.jpg`} />
            ):null}

                  
              </div>
              </SRLWrapper>
              
    
            

                  
                  
                   
                   
        
             
          );
    }
}
 
export default Images;