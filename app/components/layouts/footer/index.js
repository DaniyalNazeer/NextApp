'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { isEmpty, isArray } from 'lodash';


const Footer = ({ data }) => {
   
    // console.log('footer -------> ', data )

    const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = data;

	const [ isMounted, setMount ] = useState( false );

    useEffect( () => {
		setMount( true );
	}, [] );

    return(
        <>
<footer className="footer p-6">
			<div className="container">
				<div className="flex justify-around items-center overflow-hidden">
					
					{ isMounted ? (
						<>
							{/*Widget One*/ }
							<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
								<div dangerouslySetInnerHTML={ { __html: ( sidebarOne ) } }/>
							</div>



							{/*Widget Two*/ }
							<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
								<div dangerouslySetInnerHTML={ { __html: ( sidebarTwo ) } }/>
							</div>
						</>
					) : null }
					
					{/*	Footer Menus*/ }
			
				</div>


				<div className="mb-8 mt-8 w-full flex justify-around items-center">
					{/*Copyright Text*/ }
					<div className="w-full md:w-1/2 lg:w-1/4">
						{ copyrightText ? copyrightText : '© 2023 Ally Capital Group' }
					</div>
			
				</div>
			</div>
		</footer>

        </>

    )
    
}


export default Footer;