import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import Image from "next/image";
import React from "react";
import BaseLayout from "../base-layout/base-layout";

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

const OurTeamurl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/our_team`;

  try {
    const OurTeamData = await fetch(OurTeamurl);
    const GetOurTeam = await OurTeamData.json();
    return GetOurTeam ;
  } catch (error) {}

};


const page = async (data) => {

const AboutinnerPageData = await getAboutPageData();
const getOurTeamRes = await getOurTeamData();

  return (
    <BaseLayout>

      <div>
        <div className="about-us-wrap">
          <div className="container">
            <div className="about-us-inner">
              <div className="about-us-box">
                <h2>{ AboutinnerPageData[0].title.rendered }</h2>
                <p>
                  { AboutinnerPageData[0].content.rendered }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-team-wrap">
          <div className="container">
            <div className="custom-container">
              <div className="our-team-head">
                <h3>
                { AboutinnerPageData[0].about_page_our_team_title }
                </h3>
              </div>
              <div className="our-team-inner flex-row">
               
              {
                 getOurTeamRes.map((item) => {
                 return (
                        <div className="our-team-box">
                        <div className="team-box-img">
                        <img
                        src= { item.team_member_image.guid}
                        width={"150px"}
                        height={"150px"}
                        alt="Picture of the author"
                        />
                        </div>
                        <div className="team-box-content">
                        <h4>{ item.title.rendered }</h4>
                        <span>{ item.team_member_designation }</span>
                        </div>
                        </div>
                        )
                       })
                      }

                {/* popup Desc */}

                {/* <div className="team-box-backdescribe" id="backDescribeShow">
                  <div className="box-backdescribe-container">
                    <div className="team-backdescribe-btn">
                      <button className="cross-btn" id="crossBtn">
                        X
                      </button>
                    </div>
                    <div className="team-backdescribe-inner">
                      <div className="team-backdescribe-box">
                        <div className="backdescribe-box-img">
                          <img
                            src="images/MG_3134_edited_edited.webp"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="backdescribe-box-content">
                          <h4>Andrew Wright</h4>
                          <span>Chief Executive Officer</span>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
