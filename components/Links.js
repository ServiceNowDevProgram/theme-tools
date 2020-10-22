import React from 'react';
import Link from 'next/link';

export function HookLink({uid, id}) {
	return (
		<Link href={`/hooks/${uid}`}>
			<a>{id}</a>
		</Link>
	);
}

export function ReleaseLink({id}) {
	return (
		<Link href={`/releases/${id}`}>
			<a>{id}</a>
		</Link>
	);
}