import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
    };

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    };

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    };

    hasExpired(token) {
        const decoded = jwtDecode(token);
        const expiredDate = decoded.exp * 1000;
        const currentDate = new Date().getTime();

        if (currentDate > expiredDate) {
            return true;
        };

        return false;
    };
};
