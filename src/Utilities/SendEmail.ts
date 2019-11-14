import { ISendEmailProps } from "./ISendEmailProps";

export default function sendEmail(props: ISendEmailProps): Promise<void> {
    const { body, cc, from, requestDigest, subject, to } = props;
    return new Promise<void>(
        (resolve: () => void, reject: (reason: any) => void) => {
            if (typeof _spPageContextInfo !== "undefined") {
                var siteurl = _spPageContextInfo.webServerRelativeUrl;
                var emailRESTEndpoint = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
                fetch(emailRESTEndpoint, {
                    body: JSON.stringify({
                        "properties": {

                            "__metadata": { "type": "SP.Utilities.EmailProperties" },

                            "From": from,

                            "To": { "results": to },

                            "Body": body,

                            "CC": { "results": cc },

                            "Subject": subject
                        }
                    }),
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
                                .then(() => resolve());
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