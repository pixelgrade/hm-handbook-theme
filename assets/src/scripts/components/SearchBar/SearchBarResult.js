import React, { Component } from 'react';
import classNames from 'classnames';

/**
 * History List.
 */
export default class SearchBarResult extends Component {

	render() {

		let classes = classNames({
			'search-bar__result':         true,
			'search-bar__result  search-bar__comment': 'comment' === this.props.type,
			'search-bar__result  search-bar__post':    'post' === this.props.type
		});

		let style = { width: ( this.props.containerWidth - 60 ) + 'px' }

		return (
			<div style={ style } className={ classes }>
				<a href={ this.props.url }>
					<h3 className="search-bar__results-title">{ this.props.title }</h3>
					<div className="search-bar__text">{ this.props.excerpt }</div>
				</a>
			</div>
		);
	}

}

SearchBarResult.propTypes = {
	query:          React.PropTypes.string,
	containerWidth: React.PropTypes.number,
};

SearchBarResult.defaultProps = {
	query:          '',
	containerWidth: 0,
}
