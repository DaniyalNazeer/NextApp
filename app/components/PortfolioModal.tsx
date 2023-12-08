import React from 'react'
import Link from "next/link";
function PortfolioModal({ data,openModal,isOpen }: any ) {
const classBox = isOpen == true ? 'realized-item-backdescribe':'realized-box-close'
  return (
   
    <div>
    {
    isOpen && 
    <div className={classBox}>
    <div className="realized-backdescribe-container" onClick={openModal}>
        <div className="realized-backdescribe-btn">
        <button className="cross-btn">X</button>
        </div>
        <div className="realized-backdescribe-inner">
            <div className="realized-backdescribe-box">
            {
                          data == false ? null :
                          <>
                <div className="realized-backdescribe-img">
                    <img src={data?.property_featured_image?.guid} alt="img" className="img-fluid" />
                </div>
                <div className="realized-backdescribe-content">
                    <h4>{ data?.title?.rendered }</h4>
                    <span>{ data?.property_location }</span>
                    <ul>
                        <li>
                        <img src="/images/strategy.jpg" alt="icon" className="img-fluid" />
                            <p><span>Strategy:</span> { data?.property_strategy }</p>
                        </li>
                        <li>
                            <img src="/images/property-type.jpg" alt="icon" className="img-fluid" />
                            <p><span>Property Type:</span> { data?.property_type }</p>
                        </li>
                        <li>
                            <img src="/images/property-size.jpg" alt="icon" className="img-fluid" />
                            <p><span>Property Size:</span> { data?.property_size }</p>
                        </li>
                        <li>
                            <img src="/images/irr.jpg" alt="icon" className="img-fluid" />
                            <p><span>IRR:</span> { data?.property_irr_ }</p>
                        </li>
                        <li>
                            <img src="/images/equity.jpg" alt="icon" className="img-fluid" />
                            <p><span>Equity Multiple (EMx):</span> { data?.property_equity_multiple }</p>
                        </li>
                    </ul>
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

export default PortfolioModal
