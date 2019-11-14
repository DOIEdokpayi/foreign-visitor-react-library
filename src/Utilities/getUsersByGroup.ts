import { ISPUser } from "../types";

export interface IGetUsersByGroupProps {
    group: string;
    requestDigest?: string;
}

export default function getUsersByGroup(props: IGetUsersByGroupProps): Promise<ISPUser[]> {
    const { group, requestDigest } = props;
    return new Promise<ISPUser[]>(
        (resolve: (value:ISPUser[]) => void, reject: (reason: any) => void) => {
            if (typeof _spPageContextInfo !== "undefined") {
                var siteurl = _spPageContextInfo.webServerRelativeUrl;
                var siteGroupRESTEndpoint = siteurl + `/_api/web/sitegroups/getbyname('${group}')/Users`;
                fetch(siteGroupRESTEndpoint, {
                    credentials: "same-origin",
                    headers: requestDigest ? {
                        accept: "application/json;odata=verbose",
                        "content-type": "application/json;odata=verbose",
                        "X-RequestDigest": requestDigest
                    } :
                        {
                            accept: "application/json;odata=verbose",
                            "content-type": "application/json;odata=verbose"
                        },
                    method: "POST"
                })
                    .then((response: Response) => {
                        if (response.ok) {
                            response.json()
                                .then((value:{d:{results:ISPUser[]}}) => resolve(
                                    value.d.results
                                ));
                        } else {
                            reject(new Error(response.statusText));
                        }
                    })
                    .catch((reason: any) => reject(reason));
            }
            else {
                reject(new Error("SharePoint page context is not defined!"));
            }
        }
    );
}