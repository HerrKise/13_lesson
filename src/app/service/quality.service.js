import httpService from "./http.service";

const qualityEndpoint = "quality/";

const qualityService = {
    get: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        console.log(data);
        return data;
    }
};

export default qualityService;
