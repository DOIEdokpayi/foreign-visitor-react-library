import * as React from "react";
import { IVisitsMasterDetailState } from "./IVisitsMasterDetailState";
import { IVisitsMasterDetailProps } from "./IVisitsMasterDetailProps";
import { SPUserProfileValue, SPUserProfile, bureaus } from "../types";
import ErrorComponent from "../ErrorComponent";
import { getProfileValue, defaultProfileValue } from "./getProfileValue";
import VisitsMasterDetailImpl from "./VisitsMasterDetailImpl";




export default class VisitsMasterDetail extends React.Component<IVisitsMasterDetailProps, IVisitsMasterDetailState>{
    constructor(props: IVisitsMasterDetailProps) {
        super(props);
        this.state = {
          HasError: false,
          UserProfileInfo: new Map<string, SPUserProfileValue>()
        };
      }
      public componentDidMount() {
          const {userProfileService} = this.props;
          userProfileService()
          .then((userProfile: SPUserProfile) => {
            const userProfilePropertyMap = this.state.UserProfileInfo;
            for (const profileValue of userProfile.UserProfileProperties.results) {
              userProfilePropertyMap.set(profileValue.Key, profileValue);
            }
            this.setBureau(userProfilePropertyMap);
            this.setState({ UserProfileInfo: userProfilePropertyMap });
            this.setState({ UserProfile: userProfile });
          })
          .catch((reason: any) => this.setState({ ErrorMessage: (reason || "Unable to retrieve user profile").toString() }));
      }

      public render(): React.ReactNode {
        return this.state.HasError ?
          <ErrorComponent errorMessage={this.state.ErrorMessage as string} /> :
          <VisitsMasterDetailImpl 
            hasUserProfile={!!this.state.UserProfile}
            LEPortalArrivalDate={this.props.LEPortalArrivalDate}
            LEPortalDepartureDate={this.props.LEPortalDepartureDate}
            LEPortalForeignVisitorSponsorFir={this.props.LEPortalForeignVisitorSponsorFir}
            Title={this.props.Title}
            LEPortalPurposeOfVisit={this.props.LEPortalPurposeOfVisit}
            LEPortalSponsoringBureau={this.props.LEPortalSponsoringBureau}
            LEPortalSponsorTelephone={this.props.LEPortalSponsorTelephone}
            LEPortalSponsorEmail={this.props.LEPortalSponsorEmail}
            LEPortalForeignVisitorPriority={this.props.LEPortalForeignVisitorPriority}
            FirstName={this.getUserProfileValue("FirstName")}
            LastName={this.getUserProfileValue("LastName")}
            Telephone={this.getUserProfileValue("WorkPhone")}
            Email={this.state.UserProfile ? this.state.UserProfile.Email : ""}
            Bureau={this.state.Bureau}
            EarliestArrivalDate={this.props.EarliestArrivalDate}
            Redirect={this.props.Redirect}
            listItemEntityTypeFullName={this.props.listItemEntityTypeFullName}
            DispatchAttachment={this.props.DispatchAttachment}
            DispatchVisitInfo={this.props.DispatchVisitInfo}
            />
      }
    
      public getUserProfileValue(key: string): string {
        return getProfileValue(this.state.UserProfileInfo.get(key));
      }
    
      public setBureau(userProfileProperties: Map<string, SPUserProfileValue>): void {
        const userProfileBureauInformation: string = (userProfileProperties.get("Department") || defaultProfileValue).Value;
        if (!!userProfileBureauInformation) {
          const bureau: string | undefined = bureaus.find((b: string) => -1 !== userProfileBureauInformation.indexOf(b));
          this.setState({ Bureau: bureau });
        }
      }
}