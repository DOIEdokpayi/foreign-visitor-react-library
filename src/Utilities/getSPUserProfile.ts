import { SPUserProfile, SPUserProfileResponse } from "../types";
import Get from "./Get";

export default function getSPUserProfile(): Promise<SPUserProfile> {

    return new Promise<SPUserProfile>(
        (
            resolve: (value?: any) => void,
            reject: (reason: any) => void
        ) => {
            if (typeof _spPageContextInfo !== "undefined") {
                const url: string = _spPageContextInfo.siteAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
                Get<SPUserProfileResponse>(url)
                    .then((data: SPUserProfileResponse) => resolve(data.d))
                    .catch((reason: any) => reject(reason));
            }
            else {
                reject("_spPageContextInfo is not defined!");
            }

        }

    );
}