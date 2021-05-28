import React, {Component} from 'react';
import Select from './Select';
import {getContrastRatio} from './../lib/color-generator/generateColorsP';

class A11ySelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedIndex: 0,
		};
	}

	onSelect = (id) => {
		const index = this.props.items.findIndex((item) => item.id === id);
		this.setState({
			selectedIndex: index,
		});
	};

	renderContrastRatio = (items) => {
		if (items && items.length && items[this.state.selectedIndex]) {
			const ratio = getContrastRatio(
				this.props.baseColor,
				items[this.state.selectedIndex].color
			);
			return ratio.ratio + ' : 1';
		}
	};

	render() {
		const {selectedIndex} = this.state;
		const {items} = this.props;
		if (!items || !items.length) {
			return null;
		}

		return (
			<div className="flex items-center">
				<div className="w-7/12 mr-4">
					<Select
						items={items}
						selected={items[selectedIndex].id}
						onSelect={this.onSelect}
					/>
				</div>
				<small>{this.renderContrastRatio(items)}</small>
			</div>
		);
	}
}

export default A11ySelect;
