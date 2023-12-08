'use client || use server'
import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import Image from "next/image";
import React from "react";
import BaseLayout from "../base-layout/base-layout";
// import BasicModal from '../components/BasicModal'
import { ModalComponent } from "./teamdetail";
// reactstrap components

const getAboutPageData = async (context) => {
const AboutPageurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/about_page`;
  try {
    const AboutPageSec = await fetch(AboutPageurl);
    const AboutInnerPage = await AboutPageSec.json();
    return AboutInnerPage ;
  } catch (error) {}
};
const getOurTeamData = async (context) => {
const OurTeamurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/our_team?order=asc`;
  try {
    const OurTeamData = await fetch(OurTeamurl);
    const GetOurTeam = await OurTeamData.json();
    return GetOurTeam ;
  } catch (error) {}

};
const page = async ({ searchParams }) => {
// const Func = searchParams?.modal;  
const AboutinnerPageData = await getAboutPageData();
const getOurTeamRes = await getOurTeamData();
  return (
    <BaseLayout>
      <div>
        <div className="about-us-wrap">
          <div className="container">
            <div className="about-us-inner">
              <div className="about-us-box">
                <h2>{ AboutinnerPageData[0]?.title?.rendered }</h2>
                <div dangerouslySetInnerHTML={{ __html:  AboutinnerPageData[0]?.content?.rendered }} />
              </div>
            </div>
          </div>
        </div>
        <div className="our-team-wrap">
          <div className="container">
            <div className="custom-container">
              <div className="our-team-head">
                <h3>
                { AboutinnerPageData[0]?.about_page_our_team_title }
                </h3>
              </div>
              <div>
                <ModalComponent data={getOurTeamRes}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </BaseLayout>
  );
};

export default page;
