import { ISPListItemPostResponse } from "../types";

export default function Post(stringifiedData: string, url: string, requestDigest?: string): Promise<ISPListItemPostResponse> {
  return new Promise<ISPListItemPostResponse>(
    (
      resolve: (value?: any) => void,
      reject: (reason: any) => void
    ) => {
      fetch(url, {
        body: stringifiedData,
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
              .then((data: ISPListItemPostResponse) => resolve(data));
          } else {
            response.json()
              .then((data:any)=>reject(data))
              .catch(()=>reject(response.statusText));
          }
        })
        .catch((reason: any) => reject(reason));
    }
  );
}