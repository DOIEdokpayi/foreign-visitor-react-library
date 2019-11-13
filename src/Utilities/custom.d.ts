import { country } from "../types";

declare module "countries.json" {
    const Countries: country[];
    export default Countries;
}

declare interface WebPermMasks {
    High: number;
    Low: number;
}
declare interface _spPageContextInfo {
    alertsEnabled: boolean;
    allowSilverlightPrompt: string;
    clientServerTimeDelta: number;
    crossDomainPhotosEnabled: false
    currentCultureName: string;
    currentLanguage: number;
    currentUICultureName: string;
    customMarkupInCalculatedFieldDisabled: boolean;
    isAppWeb: boolean;
    isSiteAdmin: boolean;
    layoutsUrl: string;
    pageItemId: boolean;
    pageListId: string;
    pagePersonalizationScope: number;
    serverRequestPath: string;
    siteAbsoluteUrl: string;
    siteClientTag: string;
    siteServerRelativeUrl: string;
    systemUserKey: string;
    tenantAppVersion: string;
    updateFormDigestPageLoaded: Date;
    userId: number;
    userLoginName: string;
    webAbsoluteUrl: string;
    webLanguage: number
    webLogoUrl: string;
    webPermMasks: WebPermMasks;
    webServerRelativeUrl: string;
    webTemplate: string;
    webTitle: string;
    webUIVersion: number;
}
declare var _spPageContextInfo: _spPageContextInfo;
