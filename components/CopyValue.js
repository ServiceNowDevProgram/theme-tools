import React, {Component} from 'react';
import {copyText} from '../lib/common/copy';
import cx from '../lib/cx';
import {toast} from 'react-toastify';

export default class CopyValue extends Component {
	constructor(props) {
		super(props);
		this.state = {hover: false};
	}

	copyValue = () => {
		const {value} = this.props;
		copyText(value);
		toast.success(`Copied to clipboard: ${value}`);
	};

	render() {
		const {value, withButton, children} = this.props;
		const {hover} = this.state;
		if (withButton) {
			return (
				<div className="flex">
					<div className="pr-4">{children}</div>
					<button
						className="ml-auto text-2xs uppercase bg-black text-white rounded font-semibold py-1 px-2"
						onClick={this.copyValue}>
						Copy
					</button>
				</div>
			);
		}
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
						}}>
						CLICK TO COPY
					</div>
				)}
			</div>
		);
	}
}
