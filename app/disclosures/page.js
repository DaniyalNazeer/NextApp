import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import Image from "next/image";
import React from "react";
import BaseLayout from "../base-layout/base-layout";

const DisclosuresData = async () => {

  const DisclosuresApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/disclosures`;
    try {
        const getdisclosuresurl = await fetch(DisclosuresApiUrl);
        const disclosuresres = await getdisclosuresurl.json();
        return disclosuresres ;
      } catch (error) {}
    
    };
   
const page = async () => {

const disclosuresRes = await DisclosuresData();

  return (
    <BaseLayout>
    <div class="privacy-terms-wrap">
        <div class="container">
            <div class="custom-container">
                <div class="privacy-terms-content">
                <h4>{ disclosuresRes[0]?.title?.rendered }</h4>
              <p dangerouslySetInnerHTML={{ __html:   disclosuresRes[0]?.content?.rendered}} />
                </div>
            </div>
        </div>
    </div>
    </BaseLayout>
   
  )
}

export default page
