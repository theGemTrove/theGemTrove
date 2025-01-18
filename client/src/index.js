import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { HelmetProvider, Helmet } from 'react-helmet-async';

import "./utils/i18n";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    SEO_DESCRIPTION, SEO_KEYWORDS,
    SEO_OG_IMG_REF,
    SEO_OG_TYPE,
    SEO_SITE_AUTHOR,
    SEO_SITE_URL,
    SEO_TITLE
} from "./constants/seo.constants";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet prioritizeSeoTags>
              { /* Standard metadata tags */}
              <meta charSet="utf-8"/>
              <title>{SEO_TITLE}</title>
              <meta name='description' content={SEO_DESCRIPTION}/>
              <meta name="keywords" content={SEO_KEYWORDS}/>
              <meta name="author" content={SEO_SITE_AUTHOR}/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="google" content="notranslate"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              { /* End standard metadata tags */}

              { /* Open Graphic metadata tags */}
              <meta property="og:type" content={SEO_OG_TYPE}/>
              <meta property="og:site_name" content={SEO_TITLE}/>
              <meta property="og:title" content={SEO_TITLE}/>
              <meta property="og:url" content={SEO_SITE_URL}/>
              <meta property="og:image" content={SEO_OG_IMG_REF}/>
              <meta property="og:description" content={SEO_DESCRIPTION}/>
              { /* End Open Graphic metadata tags */}

              { /* Apple */}
              <meta name="apple-mobile-web-app-title" content={SEO_TITLE}/>
              <link rel="apple-touch-icon" href="/logo192.png"/>
              { /* End Apple */}

              { /* Robots & Manifest & Other Links */}
              <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"/>
              <meta name="robots" content="index, follow"/>
              {/*<link rel="manifest" href="/manifest.json"/>*/}
              <link rel="canonical" href={SEO_SITE_URL}/>
              <link rel="icon" href="/favicon.ico"/>
              { /* End Robots & Manifest & Other Links */}
          </Helmet>
          <App/>
      </HelmetProvider>
  </React.StrictMode>
);
