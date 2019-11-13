import genericMapToArray from "./genericMapToArray";
import { IAppState, IForeignVisitData } from "../types";
function getForeignVisitorData(state: IAppState): IForeignVisitData {

    return {
        AcceptTerms: state.AcceptTerms,
        EmailAddresses: genericMapToArray(state.EmailAddresses),
        Escorts: genericMapToArray(state.Escorts),
        Locations: genericMapToArray(state.Locations),
        PassportInformation: genericMapToArray(state.Passports),
        TelephoneNumbers: genericMapToArray(state.Telephones),
        Translators: genericMapToArray(state.Translators),
        Visitors: state.Visitors,
        VisitAttachments: state.VisitAttachments,
        VisitInformation: state.VisitInfo,
        VisitorAttachments: state.VisitorAttachments
    };
}

export default getForeignVisitorData
