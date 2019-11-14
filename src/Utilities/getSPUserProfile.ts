import { SPUserProfile, SPUserProfileResponse } from "../types";

export default function getSPUserProfile(): Promise<SPUserProfile> {

    return new Promise<SPUserProfile>(
        (
            resolve: (value?: any) => void,
            reject: (reason: any) => void
        ) => {
            if (typeof _spPageContextInfo !== "undefined") {
                const url: string = _spPageContextInfo.siteAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
                fetch(url, {
                    credentials: "same-origin",
                    headers: {
                        accept: "application/json;odata=verbose",
                        "content-type": "application/json;odata=verbose"
                    }
                }).then((response: Response) => {
                    if (response.ok) {
                        response.json()
                            .then((data: SPUserProfileResponse) => resolve(data.d));
                    } else {
                        reject(response.statusText);
                    }
                }).catch((reason: any) => reject(reason));
            }
            else {
                reject("_spPageContextInfo is not defined!");
            }

        }

    );
}