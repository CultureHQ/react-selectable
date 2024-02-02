import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';

const createSelectable = (WrappedComponent) => {
	class SelectableItem extends React.Component {

		componentDidMount () {
			this.context.selectable.register(this.props.selectableKey, findDOMNode(this));
		}


		componentWillUnmount () {
			this.context.selectable.unregister(this.props.selectableKey);
		}


		render () {
			return (
				<WrappedComponent {...this.props} id={"selectableItem-"+this.props.selectableKey}>
					{this.props.children}
				</WrappedComponent>
			)
		}
	}

	SelectableItem.contextTypes = {
		selectable: PropTypes.object
	};

	SelectableItem.propTypes = {
		children: PropTypes.node,
		selectableKey: PropTypes.any.isRequired,
		style: PropTypes.object
	};

	return SelectableItem;
};

export default createSelectable;
