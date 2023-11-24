import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../base-layout/base-layout'


const getBlogData = async (context) => {

  const BlogApiurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts`;
  
    try {
      const BlogData = await fetch(BlogApiurl);
      const getBlogData = await BlogData.json();
      return getBlogData ;
    } catch (error) {}
  
  };

const page = async () => {

  const BlogRes = await getBlogData();



  return (
    <div>
      <BaseLayout>
      
      {/* <!-- Blog main Section Start Here --> */}
    <div className="blog-main-wrap">
       <div className="container">
        <div className="custom-container">
            <div className="blog-main-inner flex-row">
                
            {
              BlogRes.map((item) => {

              return(

                <div className="blog-main-box">
                <div className="blog-main-img">
                    <img src="images/b1.webp" alt="img" className="img-fluid"/>
                </div>
                <div className="blog-main-content">
                    <span className="tag-date">Aug 1</span>
                    <h4>{ item.title.rendered }</h4>
                    <p>{ item.excerpt.rendered }</p>
                </div>
            </div>

              )  

              })

            }
            </div>
        </div>
       </div>
    </div>
    {/* <!-- Blog main Section End Here --> */}
      
      </BaseLayout>
    </div>
  )
}

export default page
