import { ISPUser, ISPUsersResponse } from "../types";
import { IGetUsersByGroupProps } from "./IGetUsersByGroupProps";
import Get from "./Get";

export default function getUsersByGroup(props: IGetUsersByGroupProps): Promise<ISPUser[]> {
    const { group, requestDigest } = props;
    return new Promise<ISPUser[]>(
        (resolve: (value: ISPUser[]) => void, reject: (reason: any) => void) => {
            if (typeof _spPageContextInfo !== "undefined") {
                var siteurl = _spPageContextInfo.webServerRelativeUrl;
                var siteGroupRESTEndpoint = siteurl + `/_api/web/sitegroups/getbyname('${group}')/Users`;
                Get<ISPUsersResponse>(siteGroupRESTEndpoint, requestDigest)
                    .then((value: ISPUsersResponse) => resolve(
                        value.d.results
                    ))
                    .catch((reason: any) => reject(reason));
            }
            else {
                reject(new Error("SharePoint page context is not defined!"));
            }
        }
    );
}