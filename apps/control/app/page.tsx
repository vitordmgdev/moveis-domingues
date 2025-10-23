"use client";

import { trpc } from "../lib/utils/trpc";

export default function Home() {
	const req = trpc.helloWorld.useQuery();

	if(req.isError) {
		return <>Error...</>
	};

	if(req.isLoading) {
		return <>Carregando...</>
	};

    return (
        <div>
            <h1>{req.data}</h1>
        </div>
    );
};