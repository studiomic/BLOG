import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, title = '', image, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            developer
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  
  return (
    <>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} />
      {children}
    </>
  )
}
export default Seo



// import { Helmet } from 'react-helmet'
//<meta name="image" content={seo.image} />
//<meta property="og:image" content={`${site.siteMetadata?.siteUrl}${imgPath}`} />