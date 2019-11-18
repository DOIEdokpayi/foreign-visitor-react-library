import { ISPListItemEntityTypeResponse } from "../types";
import Get from "./Get";

export default function getListItemEntityType(listTitle: string): Promise<string> {
    return new Promise<string>(
        (resolve: (value: string) => void, reject: (reason: any) => void) => {
            if (typeof _spPageContextInfo !== "undefined") {
                const url: string = _spPageContextInfo.webAbsoluteUrl + `/_api/Web/Lists/getbytitle('${listTitle}')/ListItemEntityTypeFullName`;
                Get<ISPListItemEntityTypeResponse>(url)
                    .then((data: ISPListItemEntityTypeResponse) => resolve(data.d.ListItemEntityTypeFullName))
                    .catch((reason: any) => reject(reason));
            }
            else {
                reject("SharePoint Page Context is not defined!");
            }
        }
    );
} 