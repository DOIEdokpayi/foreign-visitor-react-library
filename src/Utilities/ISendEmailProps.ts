export interface ISendEmailProps {
    body: string;
    cc: string[];
    from: string;
    requestDigest?: string;
    subject: string;
    to: string[];
}
