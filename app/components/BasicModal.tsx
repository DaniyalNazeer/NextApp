import React from 'react'
import Link from "next/link";

function BasicModal({ data,openModal,isOpen}: any ) {
  
  const classBox = isOpen == true ? 'team-box-backdescribe':'team-box-close'
  return (
    <div> 
      {
        isOpen && 
      <div className={classBox}>
          <div className="box-backdescribe-container">
              <div className="team-backdescribe-btn" onClick={openModal}>
                
                <button className="cross-btn">X</button>
            
              </div>
              <div className="team-backdescribe-inner">
                  <div className="team-backdescribe-box">
                        {
                          data == false ? null :
                          <>
                      <div className="backdescribe-box-img">
                          <img 
                          src={data?.team_member_image} 
                          alt="img" 
                          className="img-fluid" />
                      </div>
                      <div className="backdescribe-box-content">
                          <h4>{ data?.title.rendered }</h4>
                          <span>{ data?.team_member_designation }</span>
                          <p dangerouslySetInnerHTML={{ __html: data?.content.rendered }} />
                      </div>
                      </>
                        }
                  </div>
              </div>
          </div>
      </div>
      }
    </div>
  )
}

export default BasicModal
