// MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = (props) => {
  return (
    <Helmet>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imageUrl} />
      <meta property="og:url" content={props.url} />
    </Helmet>
  );
};

export default MetaTags;
