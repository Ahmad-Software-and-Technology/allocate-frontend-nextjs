import { request } from "./apiHandler"

export const base_url = "http://localhost:8000/api";

export const API = {

    // User API's

    login: (body) => request.post(base_url + "/user/sign-in", body),


    // Emissary API's

    createEmissary: (body) => request.post(base_url + "/emissary/create-emissary", body),
    getUserEmissaries: () => request.get(base_url + "/emissary/get-user-emissaries"),
    getUserEmissaryWithUniqueCode: (body) => request.post(base_url + "/emissary/get-emissary-with-unique-code", body),


    // Emissary Roles API's

    getEmissaryController: (body) => request.post(base_url + "/emissary-role/get-all-emissary-roles", body),




    // Safe API's

    createSafe: (body) => request.post(base_url + "/safe/create-safe", body)
};
