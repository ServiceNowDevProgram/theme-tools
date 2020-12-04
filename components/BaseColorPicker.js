import React, {Component, Fragment} from 'react';
import Input from '../components/Input';
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';

class BaseColorPicker extends Component {
	state = {
		isColorPickerOpen: false,
	};

	render() {
		const {name, label, value, onChange} = this.props;
		console.log(this.state.isColorPickerOpen);
		const styles = reactCSS({
			default: {
				swatch: {
					padding: '5px',
					background: '#fff',
					borderRadius: '1px',
					boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
					display: 'inline-block',
					cursor: 'pointer',
				},
				popover: {
					position: 'absolute',
					zIndex: '2',
					bottom: '32px',
					left: '207px',
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

		return (
			<div className="flex items-end" style={{position: 'relative'}}>
				<Input
					type="text"
					name={name}
					label={label}
					value={value}
					onChange={(value) => onChange(value)}
					placeholder="#000000"
				/>
				{value ? (
					<Fragment>
						<button
							style={{
								height: '30px',
								width: '100px',
								backgroundColor: value,
								position: 'relative',
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
				) : null}
			</div>
		);
	}
}

BaseColorPicker.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

export default BaseColorPicker;
