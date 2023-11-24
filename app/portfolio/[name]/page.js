import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; 
import React from 'react';
import BaseLayout from '../../base-layout/base-layout'


const getAcgPropertyData = async (context) => {

    const AcgPropertyurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/acg_property`;
    
    try {
          const AcgProperty = await fetch(AcgPropertyurl);
          const AcgProp = await AcgProperty.json();
          return AcgProp ;
        } catch (error) {}
      };

const page = async () => {

const AcgProperty = await getAcgPropertyData();  

//  console.log(AcgProperty[0].property_featured_image.guid);

  return (
    <BaseLayout>
   
    <div className="portfolio-detail-wrap">
       <div className="container">
        <div className="custom-container">
            <div className="portfolio-detail-inner flex-row">
                <div className="portfolio-detail-box">
                    <div className="portfolio-detail-content">
                        <div className="portdetail-content-icon">
                            {/* <img src="images/portfolio-detail-img.webp" alt="img" className="img-fluid" /> */}
                        </div>
                        <h4>{ AcgProperty[0].title.rendered }</h4>
                        <span>{ AcgProperty[0].property_location }</span>
                        <p>{ AcgProperty[0].content.rendered }</p>
                        <ul>
                            <li>
                                <p><span>Strategy:</span> { AcgProperty[0].property_strategy } </p>
                            </li>
                            <li>
                                <p><span>Property Type:</span> { AcgProperty[0].property_type } </p>
                            </li>
                            <li>
                                <p><span>Size:</span> { AcgProperty[0].property_size } </p>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio-detail-img">
                        <img src={ AcgProperty[0].property_featured_image.guid }
                         alt="img" 
                         className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>

    </BaseLayout>
  )
}

export default page
