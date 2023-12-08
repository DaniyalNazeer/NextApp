import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import Image from "next/image";
import React from "react";
import BaseLayout from "../base-layout/base-layout";


const PrivacyPolicyData = async () => {

    const PrivacyPolicyUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/privacy_policy`;
    
      try {
        const getPrivacyPolicyUrl = await fetch(PrivacyPolicyUrl);
        const PrivacyPolicyres = await getPrivacyPolicyUrl.json();
        return PrivacyPolicyres ;
      } catch (error) {}
    
    };
   
    

const page = async () => {

const PrivacyPolicyres = await PrivacyPolicyData();

// console.log(disclosuresRes);

  return (
    <BaseLayout>
        <div class="privacy-terms-wrap">
        <div class="container">
            <div class="custom-container">
                <div class="privacy-terms-content">
                <h4>{ PrivacyPolicyres[0]?.title?.rendered }</h4>
              <p dangerouslySetInnerHTML={{ __html:  PrivacyPolicyres[0]?.content?.rendered }} />
                </div>
            </div>
        </div>
    </div>
    </BaseLayout>
  )
}

export default page
