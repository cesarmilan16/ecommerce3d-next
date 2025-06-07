import { ENV } from "@/utils";

export class Product {

    async getLastPublished() {
        try {
            const sort = "sort=publishedAt:desc";
            const pagination = "pagination[limit]=1";
            const populate = "populate=*";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${sort}&${pagination}&${populate}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getLatestPublished({ limit = 9, categoryId = null}) {

        try {
            const filterCategory = categoryId && `filters[category][id][$eq]=${categoryId}`;
            const paginationLimit = `pagination[limit]=${limit}`;
            const sort = `sort[0]=publishedAt:desc`;
            const populate = `populate=*`;

            const urlParams = `${sort}&${paginationLimit}&${filterCategory}&${populate}`;
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}
