import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/pagination.module.scss'

const Pagination = ({ pageContext }) => {
	const { numPages } = pageContext
	return (
		<div className={styles.peger}>
			{Array.from({ length: numPages }, (_, i) => (
					<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} activeClassName="current">
					{i + 1}
					</Link>
			))}
		</div>
	)
}
export default Pagination