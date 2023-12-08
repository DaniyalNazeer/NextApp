import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../base-layout/base-layout'
import Date from '../components/Date.js';

const getBlogData = async () => {

  const BlogApiurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?order=asc&status=publish&per_page=50`;
  
    try {
      const BlogData = await fetch(BlogApiurl);
      const getBlogData = await BlogData.json();
      return getBlogData ;
    } catch (error) {}
  
  };

const page = async ({ params }) => {

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
                
                <Link href={ `/news/${ item?.id }` }>
                  <img 
                    src={item?.fimg_url}
                    alt="img" 
                  />
                  </Link>
                
                </div>
                <div className="blog-main-content">   
                  <span className="tag-date">
                  <Date dateString={item?.date} /> 
                  </span>
                  <h4 dangerouslySetInnerHTML={{ __html: item?.title?.rendered }} />
                  <span dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
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
