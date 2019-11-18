export default function Get<T>(url: string, requestDigest?: string): Promise<T> {
  return new Promise<T>(
    (
      resolve: (value?: any) => void,
      reject: (reason: any) => void
    ) => {
      fetch(url, {
        credentials: "same-origin",
        headers: requestDigest ? {
          accept: "application/json;odata=verbose",
          "content-type": "application/json;odata=verbose",
          "X-RequestDigest": requestDigest
        } :
          {
            accept: "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
          }
      })
        .then((response: Response) => {
          if (response.ok) {
            response.json()
              .then((data: T) => resolve(data));
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