import { ITelephone, ISPTelephone } from "../types";

export function ConvertTelephone(VisitorId: number, data: ITelephone[]): ISPTelephone[] {
    const result: ISPTelephone[] = [];
    const entity = process.env.VISITOR_PHONE_ENTITY || "SP.Data.Visitor_x0020_TelephonesListItem";
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
