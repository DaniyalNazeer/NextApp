import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../base-layout/base-layout'


const getAcgPropertyData = async (context) => {

const AcgPropertyurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/acg_property`;

try {
      const AcgProperty = await fetch(AcgPropertyurl);
      const AcgProp = await AcgProperty.json();
      return AcgProp ;
    } catch (error) {}
  };


  const getRealizedProperty = async (context) => {

    const RealizedPropertyurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/realized_property`;
    
    try {
          const RealizedProperty = await fetch(RealizedPropertyurl);
          const RealizedProp = await RealizedProperty.json(); 
          return RealizedProp ;
        } catch (error) {}
      }; 

const page = async () => {

const AcgProperty = await getAcgPropertyData();

const RealizedPropRes = await getRealizedProperty();

// console.log(RealizedPropRes); 

    return (
    <BaseLayout>
<div>
    <div className="current-portfolio-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="current-portfolio-head">
                    <h3><span>Current</span> Portfolio</h3>
                </div>
                <div className="current-portfolio-inner flex-row">
                  {
                    AcgProperty.map((item) => {
                    return (
                    <div className="current-portfolio-item">
                     <a href="#" key={item.id}>
                     <img 
                     src={ item.property_featured_image.guid } 
                     alt="img" 
                      />
                    <h4>{ item.title.rendered }</h4>
                    </a>
                    </div>  
                    )
                    })
                    }   
                </div>
            </div>
        </div>
    </div>
  

    {/* <!-- Realized Portfolio Section Start Here --> */}
    <div className="realized-portfolio-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="realized-portfolio-head">
                    <h3><span>Realized</span> Portfolio</h3>
                </div>
                <div className="realized-portfolio-inner flex-row">
                    
                    {
                        RealizedPropRes.map((item) => {

                        return (

                            <div className="realized-portfolio-item">
                            <div className="realized-item-img">
                                <img src={ item.property_featured_image.guid } alt="img" className="img-fluid" />
                                <h4>{ item.title.rendered }</h4>
                            </div>
                        </div>
                        )    
                        })
                    }

                    {/* <div className="realized-item-backdescribe">
                            <div className="realized-backdescribe-container">
                                <div className="realized-backdescribe-btn">
                                    <button className="cross-btn" id="crossBtn2">X</button>
                                </div>
                                <div className="realized-backdescribe-inner">
                                    <div className="realized-backdescribe-box">
                                        <div className="realized-backdescribe-img">
                                            <img src="images/realized-img1.webp" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="realized-backdescribe-content">
                                            <h4>Andrew Wright</h4>
                                            <span>Chief Executive Officer</span>
                                            <ul>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Realized Portfolio Section End Here --> */}
</div>  

</BaseLayout>

  )
}

export default page
