import React, {Component, Fragment} from 'react';
import Input from '../components/Input';
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';

const positions = {
	top: '0',
	middle: '-150px',
	bottom: '-276px',
};

class BaseColorPicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isColorPickerOpen: false,
		};
	}

	renderButton = () => {
		const {disabled, value, onChange, isDark, position} = this.props;
		const styles = reactCSS({
			default: {
				popover: {
					position: 'absolute',
					zIndex: '2',
					right: '-225px',
					bottom: position ? positions[position] : 0,
				},
				cover: {
					position: 'fixed',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
			},
		});

		if (disabled) {
			return (
				<div
					style={{
						height: '30px',
						width: '100px',
						backgroundColor: value,
						position: 'relative',
						border: `2px solid ${isDark ? '#ffffff' : '#000000'}`,
						borderRadius: '3px',
					}}
					className="ml-2"></div>
			);
		} else {
			return (
				<Fragment>
					<button
						style={{
							height: '30px',
							width: '100px',
							backgroundColor: value,
							position: 'relative',
							border: `2px solid ${isDark ? '#ffffff' : '#000000'}`,
							borderRadius: '3px',
						}}
						className="ml-2"
						onClick={() =>
							this.setState({
								isColorPickerOpen: !this.state.isColorPickerOpen,
							})
						}></button>
					{this.state.isColorPickerOpen ? (
						<div style={styles.popover}>
							<div
								style={styles.cover}
								onClick={() => this.setState({isColorPickerOpen: false})}
							/>
							<SketchPicker color={value} onChange={(c) => onChange(c.hex)} />
						</div>
					) : null}
				</Fragment>
			);
		}
	};

	render() {
		const {name, label, value, onChange, disabled} = this.props;

		return (
			<div className="flex items-end" style={{position: 'relative'}}>
				<Input
					type="text"
					name={name}
					label={label}
					value={value}
					onChange={(value) => onChange(value)}
					placeholder="#000000"
					disabled={disabled}
				/>
				{this.renderButton()}
			</div>
		);
	}
}

BaseColorPicker.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	position: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

export default BaseColorPicker;
