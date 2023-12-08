import Image from "next/image";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import BaseLayout from './base-layout/base-layout'
import Link from "next/link";

// Home Banner Endpoint Start

const getBannerData = async (context) => {

  const bannerurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/banners`;

  try {
    const bannerres = await fetch(bannerurl);
    const banner = await bannerres.json();
    return banner ;
  } catch (error) {}
};

// Home Banner Endpoint End

// Home About Us Endpoint Start

const getAboutData = async (context) => {

  const abouturl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/abouts`;

  try {
    const aboutSec = await fetch(abouturl);
    const aboutData = await aboutSec.json();
    return aboutData ;
  } catch (error) {}
};

// Home About Us Endpoint End

// Home portfolios Section Endpoint Start

const getPortfolioData = async (context) => {

  const portfoliourl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/portfolios`;

  try {
    const portfolioSec = await fetch(portfoliourl);
    const portfolioData = await portfolioSec.json();
    return portfolioData ;
  } catch (error) {}
};

// Home portfolios Section Endpoint End


const Home = async (data) => {
 

const banners = await getBannerData();

const aboutData = await getAboutData();

const portfolioData = await getPortfolioData();

 //console.log('Portfolio', portfolioData);

const result = banners.map(banner => ({ text: banner.title.rendered, image: banner.banner_image.guid}));

const aboutRes = aboutData.map(aboutsec => ({ text: aboutsec.title.rendered, description: aboutsec.content.rendered, AboutImage: aboutsec.about_us_image.guid, aboutBtnLabel:aboutsec.about_btn_label}));

const portfolioRes = portfolioData.map(portfoliosec => ({ text: portfoliosec.title.rendered, PortfolioDescription: portfoliosec.content.rendered, PortfolioImage: portfoliosec.home_portfolio_section_image.guid, PortfolioBtnLabel:portfoliosec.home_portfolio_btn_label}));


 //console.log(portfolioRes[0].PortfolioBtnLabel) 

  return (
    <BaseLayout>
    <div> 

      <main className="">
        <div className="banner-main-wrap">
          <div className="container">
            <div className="banner-main-inner flex flex-row items-center justify-center">
              <div className="banner-inner-content">                
                <h1>
                  {result[0]?.text}
                </h1>
              </div>
              <div className="banner-inner-img">
                <img
                  src= {result[0]?.image}
                  width={"600px"}
                  height={"600px"}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-info-wrap items-center">
          <div className="container">
            <div className="about-info-inner flex flex-row items-center justify-center">
              <div className="about-info-img">
                <img
                  // style={{ width:100 , height : 400 }}
                  src={aboutRes[0]?.AboutImage}
                  width={"500px"}
                  height={"500px"}
                  alt="Picture of the author"
                />
              </div>
              <div className="about-info-box">
                <h2>{aboutRes[0]?.text}</h2>
      
                <p dangerouslySetInnerHTML={{ __html: aboutRes[0]?.description }} />
                
                <Link href="/about" className="read-more flex flex-row justify-center">
 
                {aboutRes[0]?.aboutBtnLabel}<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                               
                </Link>

              </div>
            </div>

            <div className="about-info-inner flex flex-row items-center justify-center">
              <div className="about-info-box about-info-box2">
                <h2>{portfolioRes[0]?.text}</h2>
                
                <p dangerouslySetInnerHTML={{ __html: portfolioRes[0]?.PortfolioDescription }} />
                
                <Link href="/portfolio" className="read-more flex flex-row justify-center">

                {portfolioRes[0]?.PortfolioBtnLabel}<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                
                </Link>
              
              </div>
              <div className="about-info-img about-info-img2">
                <img
                  src= {portfolioRes[0]?.PortfolioImage}
                  width={"500px"}
                  height={"500px"}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>   
      </main>
 
    </div>
    </BaseLayout>
  );
};

export default Home;
