import React from 'react';
import Link from 'next/link';

export function HookLink({uid, id, children}) {
	return <Link href={`/hook/${uid}`}>{children ? children : id}</Link>;
}

export function ReleaseLink({id}) {
	return <Link href={`/release/${id}`}>{id}</Link>;
}

export function SchemaLink({id}) {
	return <Link href={`/schema/${id}`}>{id}</Link>;
}
