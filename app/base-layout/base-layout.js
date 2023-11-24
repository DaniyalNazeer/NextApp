import Image from "next/image";
import Header from '../components/layouts/header/index'
import Footer from '../components/layouts/footer/index'

 
// Header & Footer Endpoint Start

const getData = async (context) => {
  
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;

  try {
    const res = await fetch(url);
    const HeaderFooter = await res.json();
    return HeaderFooter;
  } catch (error) {}
};

const BaseLayout = async ({children}) => {
  const {
    data: { header, footer},
  } = await getData();

  return (
    <div>
      <Header data={header} />
      {children}
      <Footer data={footer} />
    </div>
  );
};

export default BaseLayout;
