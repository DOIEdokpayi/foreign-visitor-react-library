import { IEmail, ISPEmail } from "../types";

export default function ConvertEmail(VisitorId: number, data: IEmail[]): ISPEmail[] {
    const result: ISPEmail[] = [];
    const entity = process.env.VISITOR_EMAIL_ENTITY || "SP.Data.Visitor_x0020_Email_x0020_AddressesListItem";
    for (const telephone of data) {
        telephone.VisitorID = undefined;

        result.push({
            __metadata: { type: entity },
            ...telephone,
            VisitorId: VisitorId
        })
    }
    return result;
}
