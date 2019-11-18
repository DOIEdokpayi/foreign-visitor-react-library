import { ISendEmailProps } from "./ISendEmailProps";
import Post from "./Post";

export default function sendEmail(props: ISendEmailProps): Promise<any> {
    const { body, cc, from, requestDigest, subject, to } = props;
    return new Promise<any>(
        (resolve: (value:any) => void, reject: (reason: any) => void) => {
            if (typeof _spPageContextInfo !== "undefined") {
                var siteurl = _spPageContextInfo.webServerRelativeUrl;
                var emailRESTEndpoint = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
                Post(JSON.stringify({
                    "properties": {

                        "__metadata": { "type": "SP.Utilities.EmailProperties" },

                        "From": from,

                        "To": { "results": to },

                        "Body": body,

                        "CC": { "results": cc },

                        "Subject": subject
                    }
                }), emailRESTEndpoint, requestDigest)
                    .then((data:any) => resolve(data))
                    .catch((reason: any) => reject(reason));
            }
            else {
                reject(new Error("SharePoint page context is not defined!"));
            }
        }
    );
}