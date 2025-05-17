"use client";
import { useCheckStorage } from "@/hooks/useCheckStorage";
import { Button, Pagination } from "@heroui/react";

export default function Home() {
	// const cookies = useCookies();
	// console.log(cookies);

	const { data, setUserName } = useCheckStorage();

	return (
		<>
			<div className="flex justify-center p-10">
				<Button color="primary" onPress={() => setUserName("aaaaa")}>
					Press me
				</Button>
			</div>
			<div className="flex justify-center p-10">
				<Pagination initialPage={1} total={10} />
			</div>
			<div className="flex justify-center p-10">{data && <p>{data}</p>}</div>
		</>
	);
}
