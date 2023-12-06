import React from 'react';
import { useRouter } from 'next/router';

export default function Page() {
    const {
        query: { slug },
    } = useRouter();
    return (
        <>
            <h1>Topics {slug}</h1>
        </>
    );
}
