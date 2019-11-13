export type NavLinkRenderer = (index: number) => JSX.Element;
export type RouterRenderer = (index: number) => JSX.Element;
export interface PageMatcher {
    Hash: string;
    Page: string;
}
export interface IWizardPage {
    Name: string;
    Order: number;
    MatchHash: PageMatcher;
    RenderNavLink?: NavLinkRenderer;
    RenderRouter: RouterRenderer;
}

