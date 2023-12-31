
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../../base-layout/base-layout.js'
import Date from '../../components/Date.js'

const getBlogData = async () => {

    const BlogApiurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?order=asc&status=publish&per_page=3`;
    
      try {
        const BlogData = await fetch(BlogApiurl);
        const getBlogData = await BlogData.json();
        return getBlogData ;
      } catch (error) {}
    
    };

    const BlogRes = await getBlogData();

const page = async({params}) => {
const fetchPost = async (id) => {
const DetailPostApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts/${id}`;   
const res = await fetch(DetailPostApiUrl);
const resJson = await res.json();
return resJson;
}
const res = await fetchPost(params.id)

  return (
    <>
  
      <BaseLayout>
      
      <div class="breadcrumb-sec-wrap">
        <div class="container">
            <div class="custom-container">
                <div class="breadcrumb-sec-inner">
                    <ul class="breadcrumb-sec-list">
                        
                        <li>
                            <Link href="/news">All Posts</Link>
                        </li>
                        <li>
                            <h2 dangerouslySetInnerHTML={{ __html: res?.title?.rendered }} />
                        </li>
                    </ul>
                    {/* <div class="breadcrumb-login-buttons">
                        <button class="login-btn">Log In / Sign Up</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
      <div className="blog-detail-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="blog-detail-inner flex-row">
                    <div className="blog-detail-box">
                        <div className="blog-detail-list">
                            <ul>
                                <li>
                            <img 
                            src="/images/user.png" 
                            alt="img" 
                            className="img-fluid" 
                            />
                            <h5>Ally Capital Group</h5>
                                </li>
                                <li><p>.<span><Date dateString={ res?.date } /></span>.</p></li>
                                <li><p><span>1 min read</span></p></li>
                            </ul>
                            <div className="shared-blog-post">
                                <span className="share-post-icon">:</span>
                                <button className="share-post-btn">Share Post</button>
                            </div>
                        </div>
                        <div className="blog-detail-content">
                        
                        <h2 dangerouslySetInnerHTML={{ __html: res?.title?.rendered }} />

                        <img src={res?.fimg_url} alt="img"  />
                         
                         <hp dangerouslySetInnerHTML={{ __html: res?.content?.rendered }} /> 
                            
                        </div>
                        <ul className="blog-detail-socials">
                        <li>
                        <button class="U4UjyH YYvuv0" aria-label="Share via Facebook" data-hook="share-button__facebook"><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" class="cXULmD blog-icon-fill"><path d="M8.08865986,17 L8.08865986,10.2073504 L5.7890625,10.2073504 L5.7890625,7.42194226 L8.08865986,7.42194226 L8.08865986,5.08269399 C8.08865986,3.38142605 9.46779813,2.00228778 11.1690661,2.00228778 L13.5731201,2.00228778 L13.5731201,4.50700008 L11.8528988,4.50700008 C11.3123209,4.50700008 10.874068,4.94525303 10.874068,5.48583089 L10.874068,7.42198102 L13.5299033,7.42198102 L13.1628515,10.2073892 L10.874068,10.2073892 L10.874068,17 L8.08865986,17 Z"></path></svg><span class="NHVyAh"></span></button>    
                        </li>
                        <li>
                            <button class="U4UjyH UL7TPh" aria-label="Share via Twitter" data-hook="share-button__twitter"><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" class="cXULmD blog-icon-fill"><path d="M18,4.65548179 C17.3664558,4.9413444 16.6940105,5.12876845 16.0053333,5.21143556 C16.7308774,4.76869949 17.2742158,4.07523994 17.5353333,3.25870539 C16.8519351,3.66952531 16.1046338,3.95967186 15.3253333,4.116758 C14.3449436,3.05903229 12.8270486,2.71461351 11.4952673,3.24769481 C10.1634861,3.78077611 9.28740204,5.08344943 9.28466667,6.53469742 C9.28603297,6.80525838 9.31643401,7.07486596 9.37533333,7.33876278 C6.57168283,7.1960128 3.95976248,5.85317869 2.19,3.64465676 C1.87608497,4.18262214 1.71160854,4.79663908 1.714,5.42164122 C1.61438697,6.56033644 2.09783469,7.6712643 2.99466667,8.36452045 C2.36720064,8.27274888 1.74900117,8.12475716 1.14733333,7.9222845 L1.14733333,7.96708243 C1.26738074,9.69877048 2.5327167,11.1265052 4.21866667,11.4326042 C3.96602896,11.5152522 3.7021383,11.5571156 3.43666667,11.55666 C3.23854288,11.557327 3.0409356,11.5361435 2.84733333,11.4934834 C3.31534048,12.9376046 4.63446966,13.9228162 6.134,13.9481801 C4.90488101,14.9328579 3.38271245,15.4661427 1.816,15.4609716 C1.5432586,15.4614617 1.27074516,15.4449665 1,15.411579 C4.05446938,17.394368 7.93290025,17.5303291 11.1152384,15.7661758 C14.2975765,14.0020226 16.2768505,10.6187983 16.2773333,6.94247342 C16.2773333,6.789701 16.266,6.63692858 16.266,6.4830075 C16.9469737,5.98359293 17.5342367,5.3646551 18,4.65548179 L18,4.65548179 Z"></path></svg><span class="NHVyAh"></span></button>
                        </li>
                            <li><button class="U4UjyH uuVeWU" aria-label="Share via LinkedIn" data-hook="share-button__linked-in"><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" class="cXULmD blog-icon-fill"><path d="M17,17 L13.89343,17 L13.89343,12.1275733 C13.89343,10.9651251 13.87218,9.47069458 12.2781416,9.47069458 C10.660379,9.47069458 10.4126568,10.7365137 10.4126568,12.0434478 L10.4126568,17 L7.30623235,17 L7.30623235,6.98060885 L10.2883591,6.98060885 L10.2883591,8.3495072 L10.3296946,8.3495072 C10.7445056,7.56190587 11.7585364,6.7312941 13.2709225,6.7312941 C16.418828,6.7312941 17,8.80643844 17,11.5041407 L17,17 Z M3.80289931,5.61098151 C2.80647978,5.61098151 2,4.80165627 2,3.80498046 C2,2.80903365 2.80647978,2 3.80289931,2 C4.79669898,2 5.60434314,2.80903365 5.60434314,3.80498046 C5.60434314,4.80165627 4.79669898,5.61098151 3.80289931,5.61098151 Z M2.24786773,17 L2.24786773,6.98060885 L5.35662096,6.98060885 L5.35662096,17 L2.24786773,17 Z"></path></svg><span class="NHVyAh"></span></button></li>
                            <li><button class="U4UjyH" aria-label="Share via link" data-hook="share-button__link"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" role="img" class="cXULmD blog-icon-fill blog-button-hover-fill"><path d="M10.6000004,11.7622375 L14.2108923,11.7622375 C15.4561791,11.7622375 16.4656836,10.7527331 16.4656836,9.50744629 L16.4656836,9.50744629 L16.4656836,9.50744629 C16.4656836,8.26215946 15.4561791,7.25265503 14.2108923,7.25265503 L10.6000004,7.25265503 L10.6000004,5.84470702 L10.6000004,5.84470702 C10.6000004,5.73425007 10.6895434,5.64470702 10.8000004,5.64470702 L14.3209766,5.64470702 C16.4501961,5.64470702 18.1762695,7.37078048 18.1762695,9.5 C18.1762695,11.6292195 16.4501961,13.355293 14.3209766,13.355293 L10.8000004,13.355293 L10.8000004,13.355293 C10.6895434,13.355293 10.6000004,13.2657499 10.6000004,13.155293 L10.6000004,11.7622375 Z M8.39999962,7.25265503 L4.82047474,7.25265503 C3.57518792,7.25265503 2.56568348,8.26215946 2.56568348,9.50744629 L2.56568348,9.50744629 L2.56568348,9.50744629 C2.56568348,10.7527331 3.57518792,11.7622375 4.82047474,11.7622375 L8.39999962,11.7622375 L8.39999962,13.1578418 C8.39999962,13.2682987 8.31045657,13.3578418 8.19999962,13.3578418 L4.60784179,13.3578418 C2.4772146,13.3578418 0.75,11.6306272 0.75,9.5 C0.75,7.36937281 2.4772146,5.64215821 4.60784179,5.64215821 L8.19999962,5.64215821 L8.19999962,5.64215821 C8.31045657,5.64215821 8.39999962,5.73170126 8.39999962,5.84215821 L8.39999962,7.25265503 Z M6.66568358,8.69999981 L12.2656836,8.69999981 C12.3761405,8.69999981 12.4656836,8.78954286 12.4656836,8.89999981 L12.4656836,10.1499998 C12.4656836,10.2604567 12.3761405,10.3499998 12.2656836,10.3499998 L6.66568358,10.3499998 C6.55522663,10.3499998 6.46568358,10.2604567 6.46568358,10.1499998 L6.46568358,8.89999981 C6.46568358,8.78954286 6.55522663,8.69999981 6.66568358,8.69999981 Z" transform="rotate(-45 9.463 9.5)"></path></svg><span class="NHVyAh"></span></button></li>
                        </ul>
                        <div className="blog-detail-comment">
                            <ul className="detail-comment-info">
                                <li><span>26</span> Views</li>
                                <li><span>0</span> Comments</li>
                            </ul>
                            <button className="detail-comment-fvrt">
                            <img src="/images/like.png" alt="img" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="blog-list-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="blog-list-head">
                    <h3>Recent Posts</h3>
                    <Link href="/news" className="more-btn">
                     See All
                    </Link>
                </div>
                <div className="blog-list-inner flex-row">
                    
                    <div className="blog-list-items">
                    {
                        BlogRes.map((post , i) => { 
                        return (

                            <div className="blog-listitem-box">
                            <div className="blog-list-boximg">
                                <img 
                                src={ post?.fimg_url } 
                                alt="img" 
                                className="img-fluid" />
                            </div>
                            
                            <h4 dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} />
                            
                            <ul className="blog-listitem-views">
                                <li><img src="/images/open-eye.png" alt="img" className="img-fluid" /> 4</li>
                                <li><button className="detail-comment-fvrt">
                            <img src="/images/like.png" alt="img" className="img-fluid" /></button></li>
                            </ul>
                        </div>
                        )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

    
      </BaseLayout>
    
    </>
  )
}

export default page
