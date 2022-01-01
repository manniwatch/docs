'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@manniwatch/client-ng documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' : 'data-target="#xs-components-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' :
                                            'id="xs-components-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' : 'data-target="#xs-injectables-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' :
                                        'id="xs-injectables-links-module-AppModule-5e512494604ae638f382c718a4d359aaf431571b69ff6047def2c7dbfbb27d9f0d35b6038eb99424dbe51dd80f07ee5309552901964c5034710db7bc5c26a317"' }>
                                        <li class="link">
                                            <a href="injectables/AppNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StopPointService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopPointService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserLocationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLocationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppRoutingModule-caa31685ff30e4560f90e6a98c3de164b1953c077ba8d26e37ff9d3a7f96ed150408f9d24356946b7e668005d69fdfe004b3a252def76000d9c1bb60c310bdda"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-caa31685ff30e4560f90e6a98c3de164b1953c077ba8d26e37ff9d3a7f96ed150408f9d24356946b7e668005d69fdfe004b3a252def76000d9c1bb60c310bdda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-caa31685ff30e4560f90e6a98c3de164b1953c077ba8d26e37ff9d3a7f96ed150408f9d24356946b7e668005d69fdfe004b3a252def76000d9c1bb60c310bdda"' :
                                        'id="xs-injectables-links-module-AppRoutingModule-caa31685ff30e4560f90e6a98c3de164b1953c077ba8d26e37ff9d3a7f96ed150408f9d24356946b7e668005d69fdfe004b3a252def76000d9c1bb60c310bdda"' }>
                                        <li class="link">
                                            <a href="injectables/AppPreloadingStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppPreloadingStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownTimerModule.html" data-type="entity-link" >CountdownTimerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CountdownTimerModule-88971b6d0644cf8d1883982bde5ab36dfb9866ceb58f76063ce1703d838f299a9f3b396e6937f8671abcae709bd933c1d938a04d5a42f09259bda50486c367b8"' : 'data-target="#xs-directives-links-module-CountdownTimerModule-88971b6d0644cf8d1883982bde5ab36dfb9866ceb58f76063ce1703d838f299a9f3b396e6937f8671abcae709bd933c1d938a04d5a42f09259bda50486c367b8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CountdownTimerModule-88971b6d0644cf8d1883982bde5ab36dfb9866ceb58f76063ce1703d838f299a9f3b396e6937f8671abcae709bd933c1d938a04d5a42f09259bda50486c367b8"' :
                                        'id="xs-directives-links-module-CountdownTimerModule-88971b6d0644cf8d1883982bde5ab36dfb9866ceb58f76063ce1703d838f299a9f3b396e6937f8671abcae709bd933c1d938a04d5a42f09259bda50486c367b8"' }>
                                        <li class="link">
                                            <a href="directives/CountdownTimerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountdownTimerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepartureListModule.html" data-type="entity-link" >DepartureListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DepartureListModule-d9e9752d94ec05630a4e0c9cdbbb2d88570bba0f5792b4814549ec2880345274e1ef7cbaeaea4910b52975e4ad32d8dca777f91e59f0fc9f873e1c7fd4ea05c6"' : 'data-target="#xs-components-links-module-DepartureListModule-d9e9752d94ec05630a4e0c9cdbbb2d88570bba0f5792b4814549ec2880345274e1ef7cbaeaea4910b52975e4ad32d8dca777f91e59f0fc9f873e1c7fd4ea05c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DepartureListModule-d9e9752d94ec05630a4e0c9cdbbb2d88570bba0f5792b4814549ec2880345274e1ef7cbaeaea4910b52975e4ad32d8dca777f91e59f0fc9f873e1c7fd4ea05c6"' :
                                            'id="xs-components-links-module-DepartureListModule-d9e9752d94ec05630a4e0c9cdbbb2d88570bba0f5792b4814549ec2880345274e1ef7cbaeaea4910b52975e4ad32d8dca777f91e59f0fc9f873e1c7fd4ea05c6"' }>
                                            <li class="link">
                                                <a href="components/DepartureListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartureListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DepartureListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartureListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorModule.html" data-type="entity-link" >ErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ErrorModule-79f44feed2cf31a36db8a3088e2adc6d14ef5a1e2ca4ba8c1ded04e0c28ae3231ed30ffa40f4561b332f08719b8364feb960e7c81db8d311199f93e60f6871af"' : 'data-target="#xs-components-links-module-ErrorModule-79f44feed2cf31a36db8a3088e2adc6d14ef5a1e2ca4ba8c1ded04e0c28ae3231ed30ffa40f4561b332f08719b8364feb960e7c81db8d311199f93e60f6871af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-79f44feed2cf31a36db8a3088e2adc6d14ef5a1e2ca4ba8c1ded04e0c28ae3231ed30ffa40f4561b332f08719b8364feb960e7c81db8d311199f93e60f6871af"' :
                                            'id="xs-components-links-module-ErrorModule-79f44feed2cf31a36db8a3088e2adc6d14ef5a1e2ca4ba8c1ded04e0c28ae3231ed30ffa40f4561b332f08719b8364feb960e7c81db8d311199f93e60f6871af"' }>
                                            <li class="link">
                                                <a href="components/CommonErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundMessageSwitchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundMessageSwitchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorRoutingModule.html" data-type="entity-link" >ErrorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderBoxModule.html" data-type="entity-link" >HeaderBoxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderBoxModule-094ccc06ed64b8b41a3864749353755795bdad106a083fb9b113036f8d46f3a9d1b33065760718c61c18f339416dc9a574d287ca1c091200afcedf849d4cb864"' : 'data-target="#xs-components-links-module-HeaderBoxModule-094ccc06ed64b8b41a3864749353755795bdad106a083fb9b113036f8d46f3a9d1b33065760718c61c18f339416dc9a574d287ca1c091200afcedf849d4cb864"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderBoxModule-094ccc06ed64b8b41a3864749353755795bdad106a083fb9b113036f8d46f3a9d1b33065760718c61c18f339416dc9a574d287ca1c091200afcedf849d4cb864"' :
                                            'id="xs-components-links-module-HeaderBoxModule-094ccc06ed64b8b41a3864749353755795bdad106a083fb9b113036f8d46f3a9d1b33065760718c61c18f339416dc9a574d287ca1c091200afcedf849d4cb864"' }>
                                            <li class="link">
                                                <a href="components/HeaderBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainMapModule.html" data-type="entity-link" >MainMapModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' : 'data-target="#xs-directives-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' :
                                        'id="xs-directives-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' }>
                                        <li class="link">
                                            <a href="directives/OlMainMapDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlMainMapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' : 'data-target="#xs-injectables-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' :
                                        'id="xs-injectables-links-module-MainMapModule-f1631d70df5c66304ec9d278e0953bfa0062ccb255c4e2c9f39c4de6b273b69e105193fc8c974fa749a20d4f50a4da9551986dfcf17bc5a356f86835cb2fa477"' }>
                                        <li class="link">
                                            <a href="injectables/OlMainMapService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlMainMapService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainToolbarModule.html" data-type="entity-link" >MainToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainToolbarModule-81210808cf80e822a9663983070f08947e0df98802ce45df8bd79bbfc2028b8309ca36eb16ac1bd7c258f3806ebd2251955576b40c427e28dbc080d5ca43649d"' : 'data-target="#xs-components-links-module-MainToolbarModule-81210808cf80e822a9663983070f08947e0df98802ce45df8bd79bbfc2028b8309ca36eb16ac1bd7c258f3806ebd2251955576b40c427e28dbc080d5ca43649d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainToolbarModule-81210808cf80e822a9663983070f08947e0df98802ce45df8bd79bbfc2028b8309ca36eb16ac1bd7c258f3806ebd2251955576b40c427e28dbc080d5ca43649d"' :
                                            'id="xs-components-links-module-MainToolbarModule-81210808cf80e822a9663983070f08947e0df98802ce45df8bd79bbfc2028b8309ca36eb16ac1bd7c258f3806ebd2251955576b40c427e28dbc080d5ca43649d"' }>
                                            <li class="link">
                                                <a href="components/MainToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouteLoadingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteLoadingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarSearchBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarSearchBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OlStaticMapModule.html" data-type="entity-link" >OlStaticMapModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-OlStaticMapModule-6871f256e84155497c615f2c65dbead173216da92a146413b8d156f664ceb156375138ababdc1c5629c27724e70b2d5810fc03cedba43bff1d20212edd6b2767"' : 'data-target="#xs-directives-links-module-OlStaticMapModule-6871f256e84155497c615f2c65dbead173216da92a146413b8d156f664ceb156375138ababdc1c5629c27724e70b2d5810fc03cedba43bff1d20212edd6b2767"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OlStaticMapModule-6871f256e84155497c615f2c65dbead173216da92a146413b8d156f664ceb156375138ababdc1c5629c27724e70b2d5810fc03cedba43bff1d20212edd6b2767"' :
                                        'id="xs-directives-links-module-OlStaticMapModule-6871f256e84155497c615f2c65dbead173216da92a146413b8d156f664ceb156375138ababdc1c5629c27724e70b2d5810fc03cedba43bff1d20212edd6b2767"' }>
                                        <li class="link">
                                            <a href="directives/OlStaticMapDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlStaticMapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestUpdateDialogModule.html" data-type="entity-link" >RequestUpdateDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequestUpdateDialogModule-4c5f5c58c28725ba4f947568f621f7cdd87a6f589c309af6ece0bdd0105f094c9c2ac2dc36f2c82432cc84a6488628972979a80c7dd0ac6cdc41f46a30f26248"' : 'data-target="#xs-components-links-module-RequestUpdateDialogModule-4c5f5c58c28725ba4f947568f621f7cdd87a6f589c309af6ece0bdd0105f094c9c2ac2dc36f2c82432cc84a6488628972979a80c7dd0ac6cdc41f46a30f26248"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestUpdateDialogModule-4c5f5c58c28725ba4f947568f621f7cdd87a6f589c309af6ece0bdd0105f094c9c2ac2dc36f2c82432cc84a6488628972979a80c7dd0ac6cdc41f46a30f26248"' :
                                            'id="xs-components-links-module-RequestUpdateDialogModule-4c5f5c58c28725ba4f947568f621f7cdd87a6f589c309af6ece0bdd0105f094c9c2ac2dc36f2c82432cc84a6488628972979a80c7dd0ac6cdc41f46a30f26248"' }>
                                            <li class="link">
                                                <a href="components/RequestUpdateDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestUpdateDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RetryDialogModule.html" data-type="entity-link" >RetryDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RetryDialogModule-2ab640bcdebd5b27d6aafdcf8303368a9a470f5625bf8dcf0a091bb9c4af5813e9555cab50c32cf69b8c0aaf0f80bfdcf3df1e0cd028978ee88a66d3f2bba435"' : 'data-target="#xs-components-links-module-RetryDialogModule-2ab640bcdebd5b27d6aafdcf8303368a9a470f5625bf8dcf0a091bb9c4af5813e9555cab50c32cf69b8c0aaf0f80bfdcf3df1e0cd028978ee88a66d3f2bba435"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RetryDialogModule-2ab640bcdebd5b27d6aafdcf8303368a9a470f5625bf8dcf0a091bb9c4af5813e9555cab50c32cf69b8c0aaf0f80bfdcf3df1e0cd028978ee88a66d3f2bba435"' :
                                            'id="xs-components-links-module-RetryDialogModule-2ab640bcdebd5b27d6aafdcf8303368a9a470f5625bf8dcf0a091bb9c4af5813e9555cab50c32cf69b8c0aaf0f80bfdcf3df1e0cd028978ee88a66d3f2bba435"' }>
                                            <li class="link">
                                                <a href="components/RetryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RetryDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RouteListModule.html" data-type="entity-link" >RouteListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RouteListModule-9e5aeeb8558e39c551b9451222bff4c99b627b30a613f22c877b29b1a19fe4753d0dbf502f40aa731ff118ea106e8c14d936c37d0e8e553ec000b9bfba9c1e5b"' : 'data-target="#xs-components-links-module-RouteListModule-9e5aeeb8558e39c551b9451222bff4c99b627b30a613f22c877b29b1a19fe4753d0dbf502f40aa731ff118ea106e8c14d936c37d0e8e553ec000b9bfba9c1e5b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RouteListModule-9e5aeeb8558e39c551b9451222bff4c99b627b30a613f22c877b29b1a19fe4753d0dbf502f40aa731ff118ea106e8c14d936c37d0e8e553ec000b9bfba9c1e5b"' :
                                            'id="xs-components-links-module-RouteListModule-9e5aeeb8558e39c551b9451222bff4c99b627b30a613f22c877b29b1a19fe4753d0dbf502f40aa731ff118ea106e8c14d936c37d0e8e553ec000b9bfba9c1e5b"' }>
                                            <li class="link">
                                                <a href="components/RouteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-e69e9197dfdf2b69b49ad7c10b11c611ffeb535254f9e9d47b91a1b08ad28ff8e065e5bb3347f42ab3f8d1b8b0ee31e0d5d6461e87e8da2dbc71f80e8e9f55fc"' : 'data-target="#xs-components-links-module-SearchModule-e69e9197dfdf2b69b49ad7c10b11c611ffeb535254f9e9d47b91a1b08ad28ff8e065e5bb3347f42ab3f8d1b8b0ee31e0d5d6461e87e8da2dbc71f80e8e9f55fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-e69e9197dfdf2b69b49ad7c10b11c611ffeb535254f9e9d47b91a1b08ad28ff8e065e5bb3347f42ab3f8d1b8b0ee31e0d5d6461e87e8da2dbc71f80e8e9f55fc"' :
                                            'id="xs-components-links-module-SearchModule-e69e9197dfdf2b69b49ad7c10b11c611ffeb535254f9e9d47b91a1b08ad28ff8e065e5bb3347f42ab3f8d1b8b0ee31e0d5d6461e87e8da2dbc71f80e8e9f55fc"' }>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link" >SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-93be584d81003619d4098e9d743e491c1435c5b84bd3218bb02a70a1ffa7449e05f124bdf422ce66ccf3e40e3e8e660f319c42a4bce1f7c0471d6546dc8332ce"' : 'data-target="#xs-components-links-module-SettingsModule-93be584d81003619d4098e9d743e491c1435c5b84bd3218bb02a70a1ffa7449e05f124bdf422ce66ccf3e40e3e8e660f319c42a4bce1f7c0471d6546dc8332ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-93be584d81003619d4098e9d743e491c1435c5b84bd3218bb02a70a1ffa7449e05f124bdf422ce66ccf3e40e3e8e660f319c42a4bce1f7c0471d6546dc8332ce"' :
                                            'id="xs-components-links-module-SettingsModule-93be584d81003619d4098e9d743e491c1435c5b84bd3218bb02a70a1ffa7449e05f124bdf422ce66ccf3e40e3e8e660f319c42a4bce1f7c0471d6546dc8332ce"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-b81199802477a039a6f2806d8759c2761cd974b69041625bbb640ce6a44477dbfdf88115300723ca856a94571a377e9fef9cba8a5603b65b0c1d16956caa51a5"' : 'data-target="#xs-components-links-module-SidebarModule-b81199802477a039a6f2806d8759c2761cd974b69041625bbb640ce6a44477dbfdf88115300723ca856a94571a377e9fef9cba8a5603b65b0c1d16956caa51a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-b81199802477a039a6f2806d8759c2761cd974b69041625bbb640ce6a44477dbfdf88115300723ca856a94571a377e9fef9cba8a5603b65b0c1d16956caa51a5"' :
                                            'id="xs-components-links-module-SidebarModule-b81199802477a039a6f2806d8759c2761cd974b69041625bbb640ce6a44477dbfdf88115300723ca856a94571a377e9fef9cba8a5603b65b0c1d16956caa51a5"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StopModule.html" data-type="entity-link" >StopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' : 'data-target="#xs-components-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' :
                                            'id="xs-components-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' }>
                                            <li class="link">
                                                <a href="components/StopInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' : 'data-target="#xs-injectables-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' :
                                        'id="xs-injectables-links-module-StopModule-15f71bb7bdbc13348f05c79e7d610acd8bde0377ea64c53b5afa0439289919edb2d9927fe4434741106632adbd738f31b01b52c3b7182b73bc69c3053a30ddf1"' }>
                                        <li class="link">
                                            <a href="injectables/StopInfoResolver.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopInfoResolver</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StopPointModule.html" data-type="entity-link" >StopPointModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' : 'data-target="#xs-components-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' :
                                            'id="xs-components-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' }>
                                            <li class="link">
                                                <a href="components/StopPointInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopPointInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' : 'data-target="#xs-injectables-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' :
                                        'id="xs-injectables-links-module-StopPointModule-70f5d33ea4901b47dd4ecfa3b76c7767b17daa15f507d9674678165cd3a21b71092a8f01f0eb930233b287600b66e3910e04110ebb6a69a0c28839510c30330a"' }>
                                        <li class="link">
                                            <a href="injectables/StopPointInfoResolver.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopPointInfoResolver</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StopPointRoutingModule.html" data-type="entity-link" >StopPointRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StopRoutingModule.html" data-type="entity-link" >StopRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StopsModule.html" data-type="entity-link" >StopsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' : 'data-target="#xs-components-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' :
                                            'id="xs-components-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' }>
                                            <li class="link">
                                                <a href="components/StopsInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopsInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' : 'data-target="#xs-injectables-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' :
                                        'id="xs-injectables-links-module-StopsModule-eda49a71e3203fe35c1900e0c9fa66b6a379d5dc7a2d3c3f6ce76ba4e2e600938d8a79a86c7d2db75bc5c4f7911a69d53364de5b885db06f47e587a4ba787864"' }>
                                        <li class="link">
                                            <a href="injectables/StopsResolver.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopsResolver</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StopsRoutingModule.html" data-type="entity-link" >StopsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeSelectorModule.html" data-type="entity-link" >ThemeSelectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThemeSelectorModule-58da5b3c73c91f76f871f80fe4c176e7993a94d05849660f35f9dff12c3ba72651b599bcff4b7927aebbc7a65ef83428393a9c113662146b0f68c302f9b26f60"' : 'data-target="#xs-components-links-module-ThemeSelectorModule-58da5b3c73c91f76f871f80fe4c176e7993a94d05849660f35f9dff12c3ba72651b599bcff4b7927aebbc7a65ef83428393a9c113662146b0f68c302f9b26f60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeSelectorModule-58da5b3c73c91f76f871f80fe4c176e7993a94d05849660f35f9dff12c3ba72651b599bcff4b7927aebbc7a65ef83428393a9c113662146b0f68c302f9b26f60"' :
                                            'id="xs-components-links-module-ThemeSelectorModule-58da5b3c73c91f76f871f80fe4c176e7993a94d05849660f35f9dff12c3ba72651b599bcff4b7927aebbc7a65ef83428393a9c113662146b0f68c302f9b26f60"' }>
                                            <li class="link">
                                                <a href="components/ThemeSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TripPassagesModule.html" data-type="entity-link" >TripPassagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' : 'data-target="#xs-components-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' :
                                            'id="xs-components-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' }>
                                            <li class="link">
                                                <a href="components/TripPassagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripPassagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripPassagesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripPassagesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripPassagesListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripPassagesListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' : 'data-target="#xs-injectables-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' :
                                        'id="xs-injectables-links-module-TripPassagesModule-a843dfca12a8ea33dc433075b961fc6638d732d8e45e65348b9efc2ea7e43a39d9ae9a40d93aa534fe101f979459f92a99155bc1b897e868a98b98704ae0bf6f"' }>
                                        <li class="link">
                                            <a href="injectables/TripPassagesResolver.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripPassagesResolver</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TripPassagesRoutingModule.html" data-type="entity-link" >TripPassagesRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BaseOlMapDirective.html" data-type="entity-link" >BaseOlMapDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/OsmOlMapDirective.html" data-type="entity-link" >OsmOlMapDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/VectorOlMapDirective.html" data-type="entity-link" >VectorOlMapDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApiService.html" data-type="entity-link" >ApiService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElectronApiService.html" data-type="entity-link" >ElectronApiService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MapStorage.html" data-type="entity-link" >MapStorage</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigationSubscriber.html" data-type="entity-link" >NavigationSubscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/OlMarkerHandler.html" data-type="entity-link" >OlMarkerHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/OlUtil.html" data-type="entity-link" >OlUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/OlVehicleHandler.html" data-type="entity-link" >OlVehicleHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteLoadingSubscriber.html" data-type="entity-link" >RouteLoadingSubscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/TripPassagesUtil.html" data-type="entity-link" >TripPassagesUtil</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppDialogService.html" data-type="entity-link" >AppDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppErrorHandler.html" data-type="entity-link" >AppErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestUpdateDialogService.html" data-type="entity-link" >RequestUpdateDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link" >SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StopInfoService.html" data-type="entity-link" >StopInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StopPointInfoService.html" data-type="entity-link" >StopPointInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripPassagesService.html" data-type="entity-link" >TripPassagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VehicleService.html" data-type="entity-link" >VehicleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebApiService.html" data-type="entity-link" >WebApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RetryResolver.html" data-type="entity-link" >RetryResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/SearchResultResolver.html" data-type="entity-link" >SearchResultResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAppNotification.html" data-type="entity-link" >IAppNotification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppNotification-1.html" data-type="entity-link" >IAppNotification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppNotificationDismiss.html" data-type="entity-link" >IAppNotificationDismiss</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppNotificationDismiss-1.html" data-type="entity-link" >IAppNotificationDismiss</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfig.html" data-type="entity-link" >IConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmationDialogSettings.html" data-type="entity-link" >IConfirmationDialogSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IData.html" data-type="entity-link" >IData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IData-1.html" data-type="entity-link" >IData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInKeysResult.html" data-type="entity-link" >IInKeysResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassageStatus.html" data-type="entity-link" >IPassageStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRetryDialogData.html" data-type="entity-link" >IRetryDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStaticMapData.html" data-type="entity-link" >IStaticMapData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatus.html" data-type="entity-link" >IStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatus-1.html" data-type="entity-link" >IStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStorage.html" data-type="entity-link" >IStorage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimestampVehicleLocation.html" data-type="entity-link" >ITimestampVehicleLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleDiff.html" data-type="entity-link" >IVehicleDiff</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link" >Window</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});