import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authService } from "@/services";

export const useCurrentUser = () => {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const currentUser = Cookies.get("currentUser");
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);

    const reFetchUser = async () => {
        const userInfo = await authService.useInfo();

        if (userInfo) {
            Cookies.set("currentUser", JSON.stringify(userInfo));
            setUser(userInfo);
        }
    };

    return { user, reFetchUser };
};