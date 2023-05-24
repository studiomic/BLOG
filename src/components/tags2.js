//Tags/index.js

import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import * as styles from '../styles/tags.module.scss'

// import styles from './index.module.scss';

const Tag = ({ tag }) => (
	<Link to={`/tags/${kebabCase(tag)}/`}>
		<li className={tag}>{tag}</li>
	</Link>
);

const Tags = ({ tags }) => (
	<ul className={tags}>
		{(tags || []).map(tag => (
		<Tag key={tag} tag={tag} />
		))}
	</ul>
);

export default Tags;