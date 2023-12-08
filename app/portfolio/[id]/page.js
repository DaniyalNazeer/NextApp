import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; 
import React from 'react';
import BaseLayout from '../../base-layout/base-layout'

const page = async ({params}) => {

    const fetchPortfolio = async (id) => {
    const DetailPortfolioApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/acg_property/${id}`;   
    const res = await fetch(DetailPortfolioApiUrl);
    const resJson = await res.json();
    return resJson;
    }   
    const res = await fetchPortfolio(params.id)

// const AcgProperty = await getAcgPropertyData();  

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
                        
                        <h4>{ res?.title?.rendered }</h4>
                        <span>{ res?.property_location }</span>
                        <p dangerouslySetInnerHTML={{ __html: res?.content.rendered }} />
                        <ul>
                            <li>
                                <p><span>Strategy:</span> { res?.property_strategy } </p>
                            </li>
                            <li>
                                <p><span>Property Type:</span> { res?.property_type } </p>
                            </li>
                            <li>
                                <p><span>Size:</span> { res?.property_size } </p>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio-detail-img">
                        <img src={ res?.property_featured_image.guid }
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
