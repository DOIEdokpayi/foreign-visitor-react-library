import * as React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { IWizardPage, NavLinkRenderer } from "./IWizardPage";
import IWizardProps from "./IWizardProps";
import IWizardState from "./IWizardState";

export default class Wizard extends React.Component<IWizardProps, IWizardState> {
  private hashChangeFunction: (ev: HashChangeEvent) => void;
  constructor(props: IWizardProps) {
    super(props);
    this.state = {
      currentPage: props.Pages[0],
      isMounted: false,
      userEmail: ""
    };
    this.hashChangeFunction = this.hashChange.bind(this);
  }
  public componentDidMount(): void {
    const {userEmailService} = this.props;
    userEmailService().then((email: string)=>this.setState({userEmail: email}));
    this.setState({ isMounted: true });
    this.updateCurrentPage();
    window.onhashchange = this.hashChangeFunction;
  }
  public render(): JSX.Element {
    const sortedPages: IWizardPage[] = this.props.Pages.sort((a: IWizardPage, b: IWizardPage) => a.Order - b.Order);
    return (
      <div className="container-fluid wizard-container">
        <div className="row">
          <HashRouter>
            <div className="container wizard">
              <ol className="nav nav-pills">
                {sortedPages.filter((page: IWizardPage) => (!!page.RenderNavLink)).map((page: IWizardPage, index: number) => {
                  const renderNavLink: NavLinkRenderer =
                    page.RenderNavLink as NavLinkRenderer;
                  const liClassName: string =
                    this.state.currentPage.Name === page.Name ? "active" : "";
                  return <li
                    onClick={() => this.navClick(page)}
                    className={liClassName}
                    key={"nav" + index} role="presentation">
                    {renderNavLink(index)}
                  </li>;
                })}
              </ol>
              <Switch>
                {sortedPages.map((page: IWizardPage, index: number) => page.RenderRouter(index))}
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
  private navClick(page: IWizardPage): void {
    this.setState({ currentPage: page });
  }
  private hashChange(): void {
    if (this.state.isMounted) {
      this.updateCurrentPage();
    }
  }

  private updateCurrentPage(): void {
    const hash: string = window.location.hash;
    const matchingPages: IWizardPage[] = this.props.Pages.filter((page: IWizardPage) => page.MatchHash.Hash === hash);
    const matchingPage: IWizardPage = matchingPages.filter((page: IWizardPage) => page.Name === matchingPages[0].MatchHash.Page)[0];
    if (matchingPage && matchingPage.Name !== this.state.currentPage.Name) {
      this.setState({ currentPage: matchingPage });
    }
  }
}
