import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/pagination.module.scss'

const Pagination = ({ pageContext }) => {
	
	const { numPages } = pageContext
	// const {limit} = pageContext

	const {limit} = pageContext
	// const skip = get(this, 'props.pageContext')
	// const {numPages} = pageContext
	// const {currentPage} = pageContext
	// const {TOTAL} = pageContext
	

	return (

		
		<div className={styles.peger}>
			<a href="numPages">{ pageContext.numPages }</a>
			<a href="currentPage">{ pageContext.currentPage }</a>
			<a href="numPages">{ limit }</a>
			<span> / </span>
		
			{Array.from({ length: numPages }, (_, i) => (
				<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} activeClassName="current">
				{i + 1}
				</Link>
			))}
		
		
		
		</div>
	)
}
export default Pagination
