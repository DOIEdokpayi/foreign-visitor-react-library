import { IPassportInformation, ISPPassportInformation } from "../types";

export function ConvertPassportInformation(VisitorId: number, data: IPassportInformation[]): ISPPassportInformation[] {
    const result: ISPPassportInformation[] = [];
    const entity = process.env.COUNTRY_INFO_ENTITY || "SP.Data.Foreign_x0020_Visitor_x0020_Country_x0020_InformationListItem";
    for (const countryInformation of data) {
        countryInformation.VisitorID = undefined;

        result.push({
            __metadata: { type: entity },
            ...countryInformation,
            VisitorId: VisitorId
        })
    }
    return result;
}