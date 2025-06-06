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



// totalCount: notes,
// limit: notePerPage,
// skip: i * notePerPage,
// numPages,
// currentPage: i + 1,
// const info = { id: '123', age: 88 };
// const userName = info.userName ? info.userName : 'no_name';

// const nextNoteTitle = index === notes.length - 1 ? null : notes[index + 1].node.frontmatter.title
// const previousNotetSlug = index === 0 ? null : notes[index - 1].node.frontmatter.slug
// const signalColor = 'red';
// const action = { red: 'Stop', yellow: 'Be careful', blue: 'Go!!' }[signalColor];

// const previousPage = string;
// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
// console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
// function example() {
//     return 
// 		condition1 ? value1 : condition2 ? value2 : condition3 ? value3: value4;
// }
