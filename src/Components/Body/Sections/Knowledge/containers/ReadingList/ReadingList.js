import React, {Fragment, useEffect} from 'react';

import './ReadingList.scss';
const ReadingList = () => {
	const printBook = bookList => {
		let list = bookList.map(book => {
			const
				{ authorCount, authorList, bookLink, bookName } = book,
				authorLabel = authorCount > 1 ? 'Authors: ' : 'Author: ',
				authors = authorLabel.concat(authorList);
			return <li className="bookEntry"><a href={bookLink}>{bookName}</a><br/>
				<span className="bookAuthor">
					{authors}
				</span>
			</li>
		});
		return (<div>
			<ol>
				{list}
			</ol>
		</div>);
	};
	return (
		<Fragment>
			<h3 className="booksListHeader">Reading<br/>Top 5 Or Current Lists</h3>
			<div className="col-lg-12 readingPanel">
				<div className="col-sm-4">
					<h4 className="bookListType">Tech</h4>
					{printBook(require('./data/tech.json'))}
				</div>
				<div className="col-sm-4">
					<h4 className="bookListType">Fun</h4>
					{printBook(require('./data/fun.json'))}
				</div>
				<div className="col-sm-4">
					<h4 className="bookListType">Favorite Literature</h4>
					{printBook(require('./data/lit.json'))}
				</div>
			</div>
		</Fragment>
	);
};

export default ReadingList;