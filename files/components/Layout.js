import React from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../util/gtag';


const Layout = (props) => {

        // if (!global.window.GA_INITIALIZED) {
        //   initGA();
        //   window.GA_INITIALIZED = true;
        // }
        // logPageView();

        // if (global.window == null) {
        //     logPageView();
        // } else {
        //     initGA();
        //     window.GA_INITIALIZED = true;
        //     logPageView();
        // }
      

    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/images/favicon.png" />
                <link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/font-awesome.css" />
                <link rel="stylesheet" href="/css/animate.min.css" />
                <link rel="stylesheet" href="/css/fontello.css" />
                <link rel="stylesheet" href="/plugins/accordion.css" />
                <link rel="stylesheet" href="/plugins/glightbox.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99305777-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-99305777-1', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                /> */}
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                        gtag('config', 'AW-854422845');
                    `,
                        }}
                    />
            </Head>

            {props.children}


            <script src="/plugins/accordion.min.js"></script>
            <script src="/plugins/glightbox.min.js"></script>

        </div>
    )
}
export default Layout;