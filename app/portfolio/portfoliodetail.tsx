'use client'
import { useState } from "react";
import PortfolioModal from "../components/PortfolioModal";

export  const ModalComponent =(data:object) => {
    const [_data,setData] = useState(false)
    const [obj,setObj] = useState<object>([])  
    var conditionModal = false;
    const modalData :any= []; 

    const showModalFunc=(val:object) => {
    setData(!_data) 
    setObj(val)
    conditionModal = !conditionModal
}

const closeModal=()=>{
    conditionModal = !conditionModal
    setData(false)
}
    
    return(
      <div>  
      <div className="realized-portfolio-inner flex-row">
      
      {
         data.data.map((item , index) => {
           
         return (

            <div className="realized-portfolio-item" key={index} onClick={()=>{showModalFunc(item)}}>
            <div className="realized-item-img">
                <img src={ item.property_featured_image.guid } alt="img" className="img-fluid" />
                <h4>{ item.title.rendered }</h4>
            </div>
        </div>
          )
        })    
        }
         <PortfolioModal data = {obj}  openModal={closeModal} isOpen = {_data} />
        
      </div> 
      </div>
    )
  }

