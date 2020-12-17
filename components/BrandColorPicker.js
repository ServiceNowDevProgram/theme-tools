import React, {Component, Fragment} from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';

const BrandColor = ({label, color, onChange}) => {
	return (
		<div>
			<p>
				<small>{label}</small>
			</p>
			<button
				className="py-1 px-2 rounded"
				style={{
					width: '150px',
					height: '20px',
					backgroundColor: color,
					border: '1px solid #dddddd',
				}}
				onClick={() => {
					onChange(color);
				}}></button>
		</div>
	);
};

class BrandColorPicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isColorPickerOpen: false,
		};
	}

	onChange = (color) => {
		this.props.onChange(color);
		this.setState({isColorPickerOpen: false});
	};

	render() {
		const styles = reactCSS({
			default: {
				popover: {
					position: 'absolute',
					zIndex: '2',
					right: '-167px',
					bottom: 0,
				},
				cover: {
					position: 'fixed',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
					zIndex: '-1',
				},
			},
		});

		const {neutral, primary, secondary} = this.props;

		return (
			<div className="flex items-end" style={{position: 'relative'}}>
				<a
					role="button"
					tabIndex="0"
					onClick={() =>
						this.setState({isColorPickerOpen: !this.state.isColorPickerOpen})
					}>
					<small>Change Brand</small>
				</a>
				{this.state.isColorPickerOpen ? (
					<div style={styles.popover}>
						<div
							style={{
								backgroundColor: '#ffffff',
								color: '#000000',
								padding: '4px',
								borderRadius: '3px',
								border: '1px solid #dddddd',
							}}>
							<BrandColor
								color={neutral}
								label="Brand Neutral"
								onChange={this.onChange}
							/>
							<BrandColor
								color={primary}
								label="Brand Primary"
								onChange={this.onChange}
							/>
							<BrandColor
								color={secondary}
								label="Brand Secondary"
								onChange={this.onChange}
							/>
						</div>
						<div
							style={styles.cover}
							onClick={() => this.setState({isColorPickerOpen: false})}></div>
					</div>
				) : null}
			</div>
		);
	}
}

BrandColorPicker.propTypes = {
	neutral: PropTypes.string,
	primary: PropTypes.string,
	secondary: PropTypes.string,
	onChange: PropTypes.func,
};

export default BrandColorPicker;
