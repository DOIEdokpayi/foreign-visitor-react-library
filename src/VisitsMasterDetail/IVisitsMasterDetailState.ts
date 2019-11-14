import { SPUserProfile, SPUserProfileValue } from "../types";
export interface IVisitsMasterDetailState {
    Bureau?: string;
    ErrorMessage?: string;
    HasError: boolean;
    UserProfile?: SPUserProfile;
    UserProfileInfo: Map<string, SPUserProfileValue>;
}
