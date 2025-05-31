import { useEffect, useState } from "react";

import { appControllerGetHello } from '@/apiClient'

export const useCheckStorage = () => {
	const [data, setData] = useState<string>();

	useEffect(() => {
		checkUserName();
		res()
	}, []);

	const res = async() => {
      const response = await appControllerGetHello()
      alert(JSON.stringify(response.data.message));
    }

	const checkUserName = () => {
		const data = sessionStorage.getItem("username");
		if (data) {
			setData("sessionStorageにusernameが保存されています");
			return;
		}
		setData("usernameを保存してください");
	};

	const setUserName = (userName: string) => {
		sessionStorage.setItem("username", userName);
		setData("sessionStorageにusernameを保存しました");
	};

	return { data, setUserName };
};
