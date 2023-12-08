'use client'
import { useState } from "react";
import BasicModal from "../components/BasicModal";

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
      <div className="our-team-inner flex-row">
      
      {
         data.data.map((item , index) => {
           
         return (
          
                <div className="our-team-box" key={index} onClick={()=>{showModalFunc(item)}}>
                   
                <div className="team-box-img">
                <img
                src={item?.team_member_image}
                width={"150px"}
                height={"150px"}
                alt="Picture of the author"
                />
                </div>
                <div className="team-box-content">
                <h4>{ item?.title?.rendered }</h4>
                <span>{ item.team_member_designation }</span>
                </div>
                </div>
                
                )
                
            })
            
        }
         <BasicModal data = {obj}  openModal={closeModal} isOpen = {_data} />
        
      </div> 
      </div>
    )
  }

