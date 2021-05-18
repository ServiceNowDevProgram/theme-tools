import React, {Component} from 'react';
import {copyText} from '../lib/common/copy';
import cx from '../lib/cx';
import {toast} from 'react-toastify';

export default class CopyValue extends Component {
	constructor(props) {
		super(props);
		this.state = {hover: false};
	}
	render() {
		const {value, children} = this.props;
		const {hover} = this.state;
		return (
			<div
				className={cx({
					relative: true,
					'cursor-pointer': true,
					'text-red-500': hover,
				})}
				onMouseEnter={() => this.setState({hover: true})}
				onMouseLeave={() => this.setState({hover: false})}
				onClick={() => {
					copyText(value);
					toast.success(`Copied to clipboard: ${value}`);
				}}>
				{children}
				{hover && (
					<div
						className="inline-block absolute bg-gray-800 text-white text-xs p-1"
						style={{
							left: '0',
							bottom: '-1.3rem',
							fontSize: '8px',
							width: '72px',
							borderRadius: '2px',
							zIndex: '100',
						}}>
						CLICK TO COPY
					</div>
				)}
			</div>
		);
	}
}
