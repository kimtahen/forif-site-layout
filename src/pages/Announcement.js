import React from "react"
import renderHTML from 'react-render-html';

import Layout from "../components/layout"
import styles from "./Announcement.module.css"

export default function Studies({ data, location }) {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout sideList={0} pathName={location.pathname}>
      <div className={styles.wrapper}>
        {edges.map((value, index)=><Template key={index} title={value.node.frontmatter.title} date={value.node.frontmatter.date} html={value.node.html}/>)}
      </div>
    </Layout>
  )
}
function Template({title, date, html}){
  return(
    <div className={styles.announcementWrapper}>
      <div className={styles.frontmatter}>
        <h1 style={{
          margin: '5px',
        }}>
          {title}
        </h1>
        <span style={{
          color: 'gray',
          fontSize: '0.8rem',

        }}>
          <i>{date}</i>
        </span>
      </div>
      {renderHTML(html)}
    </div>
  )
}

export const pageQuery = graphql`
  query {
  allMarkdownRemark (sort: { fields: frontmatter___number, order: DESC }) {
    edges {
      node {
        frontmatter {
          title
          date
        }
        html
      }
    }
  }
}

`
