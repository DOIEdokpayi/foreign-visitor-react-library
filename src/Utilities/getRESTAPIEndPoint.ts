import getListByTitle from "./getListByTitle";
export default function getRESTAPIEndPoint(baseURL: string, title: string): string {
    const SPSiteURL = baseURL.endsWith("/") ? baseURL : baseURL + "/";
    return SPSiteURL + "_api/lists/" + getListByTitle(title) + "/items";
}
