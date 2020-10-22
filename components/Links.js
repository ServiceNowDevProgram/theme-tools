import React from 'react';
import Link from 'next/link';

export function HookLink({uid, id, children}) {
	return (
		<Link href={`/hook/${uid}`}>
			<a>{children ? children : id}</a>
		</Link>
	);
}

export function ReleaseLink({id}) {
	return (
		<Link href={`/release/${id}`}>
			<a>{id}</a>
		</Link>
	);
}
