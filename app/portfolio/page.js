'use client || use server'
import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../base-layout/base-layout'
// import PortfolioModal from '../components/PortfolioModal'
import { ModalComponent } from "./portfoliodetail";


const getAcgPropertyData = async (context) => {

const AcgPropertyurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/acg_property?order=asc`;

try {
      const AcgProperty = await fetch(AcgPropertyurl);
      const AcgProp = await AcgProperty.json();
      return AcgProp ;
    } catch (error) {}
  };


  const getRealizedProperty = async (context) => {

    const RealizedPropertyurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/realized_property?order=asc`;
    
    try {
          const RealizedProperty = await fetch(RealizedPropertyurl);
          const RealizedProp = await RealizedProperty.json(); 
          return RealizedProp ;
        } catch (error) {}
      }; 

const page = async ({ searchParams }) => {

const showModal = searchParams?.modal;    

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
                     <Link href={ `/portfolio/${ item?.id }` } key={item.id}>
                    
                     <img 
                     src={ item.property_featured_image.guid } 
                     alt="img" 
                      />
                    <h4>{ item.title.rendered }</h4>
                    
                    </Link>
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

                <ModalComponent data={RealizedPropRes}/>

                {/* <div className="realized-portfolio-inner flex-row">
                    
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

                    
                </div> */}
                
            </div>
        </div>
    </div>
    {/* <!-- Realized Portfolio Section End Here --> */}
</div>  


</BaseLayout>

  )
}

export default page
