import { FileData } from "../types";

export default function PostAttachment(
  file: FileData,
  attachmentRESTEndPoint: string,
  RequestDigest?: string)
  : Promise<void> {
  return new Promise<void>
    ((
      resolve: () => void,
      reject: (reason: any) => void
    ) => {

      if (!!file.Buffer) {
        const buffer: ArrayBuffer = file.Buffer as ArrayBuffer;
        fetch(attachmentRESTEndPoint, {
          body: file.Buffer,
          credentials: "same-origin",
          headers: RequestDigest ? {
            accept: "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": RequestDigest,
            "content-length": buffer.byteLength.toString()
          } :
            {
              accept: "application/json;odata=verbose",
              "content-type": "application/json;odata=verbose",
              "content-length": buffer.byteLength.toString()
            },
          method: "POST"
        })
          .then((response: Response) => {
            if (response.ok) {
              resolve();
            }
            else {
              reject(response.statusText);
            }
          })
          .catch((reason: any) => reject(reason));
      }
      else {
        reject(file.Error)
      }
    });
}

