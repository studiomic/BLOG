import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/pagination.module.scss'

const Pagination = ({ pageContext }) => {
	const { numPages,currentPage } = pageContext
	
	const previousPage = currentPage !== 1 ? currentPage !== 2 ? `/${currentPage -1}`: `/` : null
	const nextPage = currentPage < numPages ? `/${currentPage +1}` : null

	return (
		<div className={styles.peger}>
			{ 
        previousPage ? <Link to={previousPage} className={styles.pnbtn}>
					<span className={styles.symbol}>&lsaquo;</span><span className={styles.prev}>Prev</span></Link> : null
      }
			{Array.from({ length: numPages }, (_, i) => (
				<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} activeClassName="current">
				{i + 1}
				</Link>
			))}
			{
        nextPage ? <Link to={nextPage} className={styles.pnbtn}>
					<span className={styles.next}>Next</span><span className={styles.symbol}>&rsaquo;</span></Link> : null
      }
		</div>
	)
}
export default Pagination
