import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import Image from "next/image";
import React from "react";
import BaseLayout from "../base-layout/base-layout";

const LegalDisclaimerData = async () => {

    const LegalDisclaimerApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/legal_disclaimer`;
    
      try {
        const getLegalDisclaimerresurl = await fetch(LegalDisclaimerApiUrl);
        const legaldisres = await getLegalDisclaimerresurl.json();
        return legaldisres ;
      } catch (error) {}
    
    };

const page = async () => {

const legaldisclosuresRes = await LegalDisclaimerData();

  return (
    <BaseLayout>
        <div class="privacy-terms-wrap">
        <div class="container">
            <div class="custom-container">
                <div class="privacy-terms-content">
                <h4>{ legaldisclosuresRes[0]?.title?.rendered }</h4>
              <p dangerouslySetInnerHTML={{ __html:  legaldisclosuresRes[0]?.content?.rendered }} />
                </div>
            </div>
        </div>
    </div>
    </BaseLayout>
  )
}

export default page
