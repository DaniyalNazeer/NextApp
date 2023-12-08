import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; 
import react from 'react';
import BaseLayout from '../base-layout/base-layout'

const getContactInfo = async (context) => {

const ContactInfoUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/contact_info`;
  
try {
      const ContactInfoSec = await fetch(ContactInfoUrl);
      const ContactInfo = await ContactInfoSec.json();
      return ContactInfo ;
    } catch (error) {}
  
  };

const page = async () => {

    const ContactInfo = await getContactInfo(); 
    
    const ContactInfoRes = ContactInfo?.map(ContactInfoSec => ({

     Logo: ContactInfoSec?.contact_page_image.guid,
     Address: ContactInfoSec?.contact_page_address,
     Title: ContactInfoSec?.contact_info_title,
     Text: ContactInfoSec?.contact_info_text,
     Email: ContactInfoSec?.contact_info_email,
     Heading: ContactInfoSec?.contact_info_heading,
     Pera: ContactInfoSec?.contact_info_pera,
     Email_address: ContactInfoSec?.contact_info_email_address

    }))
    
  return (
    <div>
      <BaseLayout>
      
    <div className="contact-main-wrap">
       <div className="container">
        <div className="custom-container">
            <div className="contact-main-inner flex-row">
                <div className="contact-main-box">
                    <div className="contact-main-content">
                        <div className="contact-main-logo">
                            <Link href="/"> 
                            <img 
                            src={ ContactInfoRes[0]?.Logo }
                            width={"250px"}
                            height={"250px"} 
                            alt="img"
                            className="img-fluid"/>
                            </Link>
                        </div>
                        <p>{ ContactInfoRes[0]?.Address }</p>
                        <h5>{ ContactInfoRes[0]?.Title }</h5>
                        <p>{ ContactInfoRes[0]?.Text }</p>
                        <a href="void:;" className="email-link">{ ContactInfoRes[0]?.Email }</a>
                        <h5>{ ContactInfoRes[0]?.Heading }</h5>
                        <p>{ ContactInfoRes[0]?.Pera }</p>
                        <a href="void:;" className="email-link">{ ContactInfoRes[0]?.Email_address }</a>
                    </div>
                    <div className="contact-main-form">
                        <h3>Contact Us</h3>
                        <form action="">
                            <div className="form-group">
                                <label for="first-name">First Name</label>
                                <input type="text" name="first-name" required/>
                            </div>
                            <div className="form-group">
                                <label for="last-name">Last Name</label>
                                <input type="text" name="last-name" required/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <label for="message">Write A Message</label>
                                <textarea name="message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
      </BaseLayout>
    </div>
  )
}

export default page
