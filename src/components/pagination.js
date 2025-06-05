import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/pagination.module.scss'

const Pagination = ({ pageContext }) => {
	// const { numPages,previousPagePath,nextPagePath } = pageContext
	const { numPages,currentPage } = pageContext

	const previousPage = currentPage -1
	const nextPage = currentPage +1


	// String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";
	// String str = 条件式1 ? (条件式2 ? "A" : "B") : "C";
	// String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";



	// const previousPage = {
	// 	if (
	// 		currentPage === 0 ? null
	// 	)


	// };
	

	// String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";


	// pageNumber === 0 ? '/blog' : '/blog/page'
	// const { numPages,currentPage,previousPagePath,nextPagePath } = pageContext
	
	// const previousPage = currentPage -1

	// const actionpreviousPage = { 0: null, 1: '/', blue: 'Go!!' }[previousPage];


	

// const info = { id: '123', age: 88 };
	// const userName = info.userName ? info.userName : 'no_name';

	// const nextNoteTitle = index === notes.length - 1 ? null : notes[index + 1].node.frontmatter.title
	// const previousNotetSlug = index === 0 ? null : notes[index - 1].node.frontmatter.slug
	// const signalColor = 'red';
	// const action = { red: 'Stop', yellow: 'Be careful', blue: 'Go!!' }[signalColor];

// const previousPage = string;
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."



  //       const previousPageNum = i === 0 ? null : numPages[i - 1]
  //       const nextPagePath = i === numPages.length - 1 ? null : numPages[i + 1]
  //       const nextPageNum = i === numPages.length - 1 ? null : numPages[i + 1]

// {pagenav.previous && (
// 	<li>
// 		<Link to={`/notes/${pagenav.previous}`} rel="prev">
// 			← {pagenav.previousTitle}
// 		</Link>
// 	</li>
// )}

	return (
		<div className={styles.peger}>
			{
        previousPage
          ? <Link to={`/${previousPage}`} className={styles.pnbtn}><span>&lsaquo;</span>Prev</Link>
          : null
      }
			{Array.from({ length: numPages }, (_, i) => (
				<Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} activeClassName="current">
				{i + 1}
				</Link>
			))}
			{
        nextPage
          ? <Link to={`/${nextPage}`} className={styles.pnbtn}>Next<span>&rsaquo;</span></Link>
          : null
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