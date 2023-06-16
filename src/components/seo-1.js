import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// export const Seo = ({ description = '', lang = 'ja', meta = [], title, image }) => {

export const SEO = ({ description, meta, title, image, children }) => {
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
  // export const SEO = ({ title, description, pathname, children }) => {
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  // const defaultDescription = site.siteMetadata?.description
  // const { description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    // title: title `%s | ${defaultTitle}`,
    description: description || metaDescription,
    image: `${site.siteMetadata.siteUrl}${image}`,
    // url: `${site.siteMetadata.siteUrl}${pathname || ``}`,


    // title={title},
    // defaultTitle={defaultTitle},
    // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null},
  }

  return (
    <>
      
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			{/* <meta property="og:type" content={type} /> */}
			{/* <meta property="og:image" content={`${site.siteMetadata?.siteUrl}${imgPath}`} /> */}
			{/* <meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      
      {children}
    </>
  )
}