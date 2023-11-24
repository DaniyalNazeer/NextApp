"use client";
import {useState}  from "react";
import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import {getPathNameFromUrl} from "../../../../src/utils/miscellaneous.js";


const Header = ({ data }) => {
   

  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } = data;

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className="main-header">
        <div className="header-inner flex justify-center py-4">
          <div className="container">
            <div className="header-inner-data flex justify-around items-center">
              <Link href="/">

        {
				siteLogoUrl ? (
				<img className="mr-2" src={ siteLogoUrl } alt={ `${ siteTitle } logo` }
				width="800"
        height="800"/>
				) : <TailwindIcon/>
			  }
                
              </Link>

              <ul className="navbar flex">
              { ! isEmpty( headerMenuItems ) && headerMenuItems.length ? headerMenuItems.map( (menuItem, index ) => (
									<li key={ menuItem?.ID } className="mr-2 ml-2">
                  <Link href={menuItem?.url }
                        dangerouslySetInnerHTML={ { __html: menuItem.title } }>
									
									</Link>
                  </li>
								) ) : null }
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
