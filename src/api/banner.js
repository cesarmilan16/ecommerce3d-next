import { ENV } from "@/utils";

export class Banner {

    async getBanner() {
        try {
            const sort = "sort=order:asc";
            const populate = "populate=*";
            const filter = "filters[active][$eq]=true";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BANNER}?${sort}&${filter}&${populate}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}
