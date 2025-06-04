import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
	const { numPages } = pageContext
	return (
		<div>
			{Array.from({ length: numPages }, (_, i) => (
					<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
					{i + 1}
					</Link>
			))}
		</div>
	)
}
export default Pagination