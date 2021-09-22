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
                                            'data-target="#components-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' : 'data-target="#xs-components-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' :
                                            'id="xs-components-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' : 'data-target="#xs-injectables-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' :
                                        'id="xs-injectables-links-module-AppModule-85f8def585e0b760c026a24e9d868ee1"' }>
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
                                        'data-target="#injectables-links-module-AppRoutingModule-5fa440adb3d7b0106fb39bf6d02b234f"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-5fa440adb3d7b0106fb39bf6d02b234f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-5fa440adb3d7b0106fb39bf6d02b234f"' :
                                        'id="xs-injectables-links-module-AppRoutingModule-5fa440adb3d7b0106fb39bf6d02b234f"' }>
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
                                        'data-target="#directives-links-module-CountdownTimerModule-dfaacf534f1573a8b4eb33ad2d632a5c"' : 'data-target="#xs-directives-links-module-CountdownTimerModule-dfaacf534f1573a8b4eb33ad2d632a5c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CountdownTimerModule-dfaacf534f1573a8b4eb33ad2d632a5c"' :
                                        'id="xs-directives-links-module-CountdownTimerModule-dfaacf534f1573a8b4eb33ad2d632a5c"' }>
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
                                            'data-target="#components-links-module-DepartureListModule-a40eb5076a851e9420e5f9ea1eeedb96"' : 'data-target="#xs-components-links-module-DepartureListModule-a40eb5076a851e9420e5f9ea1eeedb96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DepartureListModule-a40eb5076a851e9420e5f9ea1eeedb96"' :
                                            'id="xs-components-links-module-DepartureListModule-a40eb5076a851e9420e5f9ea1eeedb96"' }>
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
                                            'data-target="#components-links-module-ErrorModule-3ef937a9604c72016a62d04939a666c7"' : 'data-target="#xs-components-links-module-ErrorModule-3ef937a9604c72016a62d04939a666c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-3ef937a9604c72016a62d04939a666c7"' :
                                            'id="xs-components-links-module-ErrorModule-3ef937a9604c72016a62d04939a666c7"' }>
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
                                            'data-target="#components-links-module-HeaderBoxModule-3c7fbd0e811b93e178f9c32e20bf5505"' : 'data-target="#xs-components-links-module-HeaderBoxModule-3c7fbd0e811b93e178f9c32e20bf5505"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderBoxModule-3c7fbd0e811b93e178f9c32e20bf5505"' :
                                            'id="xs-components-links-module-HeaderBoxModule-3c7fbd0e811b93e178f9c32e20bf5505"' }>
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
                                        'data-target="#directives-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' : 'data-target="#xs-directives-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' :
                                        'id="xs-directives-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' }>
                                        <li class="link">
                                            <a href="directives/OlMainMapDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlMainMapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' : 'data-target="#xs-injectables-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' :
                                        'id="xs-injectables-links-module-MainMapModule-be41188f148d0357058fb32736be04f7"' }>
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
                                            'data-target="#components-links-module-MainToolbarModule-d94e5ebf7a1ab9b02772120a0936d64d"' : 'data-target="#xs-components-links-module-MainToolbarModule-d94e5ebf7a1ab9b02772120a0936d64d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainToolbarModule-d94e5ebf7a1ab9b02772120a0936d64d"' :
                                            'id="xs-components-links-module-MainToolbarModule-d94e5ebf7a1ab9b02772120a0936d64d"' }>
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
                                        'data-target="#directives-links-module-OlStaticMapModule-5cda80ad9eece068faf39bb11af8d2dd"' : 'data-target="#xs-directives-links-module-OlStaticMapModule-5cda80ad9eece068faf39bb11af8d2dd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OlStaticMapModule-5cda80ad9eece068faf39bb11af8d2dd"' :
                                        'id="xs-directives-links-module-OlStaticMapModule-5cda80ad9eece068faf39bb11af8d2dd"' }>
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
                                            'data-target="#components-links-module-RequestUpdateDialogModule-5baaa7eedfd5084fb333ac4384b25929"' : 'data-target="#xs-components-links-module-RequestUpdateDialogModule-5baaa7eedfd5084fb333ac4384b25929"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestUpdateDialogModule-5baaa7eedfd5084fb333ac4384b25929"' :
                                            'id="xs-components-links-module-RequestUpdateDialogModule-5baaa7eedfd5084fb333ac4384b25929"' }>
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
                                            'data-target="#components-links-module-RetryDialogModule-67c759d6166c7ed55647d244be00d875"' : 'data-target="#xs-components-links-module-RetryDialogModule-67c759d6166c7ed55647d244be00d875"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RetryDialogModule-67c759d6166c7ed55647d244be00d875"' :
                                            'id="xs-components-links-module-RetryDialogModule-67c759d6166c7ed55647d244be00d875"' }>
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
                                            'data-target="#components-links-module-RouteListModule-58c4011b872117b767ce772d78d77b40"' : 'data-target="#xs-components-links-module-RouteListModule-58c4011b872117b767ce772d78d77b40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RouteListModule-58c4011b872117b767ce772d78d77b40"' :
                                            'id="xs-components-links-module-RouteListModule-58c4011b872117b767ce772d78d77b40"' }>
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
                                            'data-target="#components-links-module-SearchModule-c2873c525d4de74008552814b73d0747"' : 'data-target="#xs-components-links-module-SearchModule-c2873c525d4de74008552814b73d0747"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-c2873c525d4de74008552814b73d0747"' :
                                            'id="xs-components-links-module-SearchModule-c2873c525d4de74008552814b73d0747"' }>
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
                                            'data-target="#components-links-module-SettingsModule-ca1d2e1ca4d61cc196823ba6aa140088"' : 'data-target="#xs-components-links-module-SettingsModule-ca1d2e1ca4d61cc196823ba6aa140088"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-ca1d2e1ca4d61cc196823ba6aa140088"' :
                                            'id="xs-components-links-module-SettingsModule-ca1d2e1ca4d61cc196823ba6aa140088"' }>
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
                                            'data-target="#components-links-module-SidebarModule-88ad4f3592ca7b48c4c41d4ab6766d3d"' : 'data-target="#xs-components-links-module-SidebarModule-88ad4f3592ca7b48c4c41d4ab6766d3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-88ad4f3592ca7b48c4c41d4ab6766d3d"' :
                                            'id="xs-components-links-module-SidebarModule-88ad4f3592ca7b48c4c41d4ab6766d3d"' }>
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
                                            'data-target="#components-links-module-StopModule-cd4b1c61926909ee45281891253cdaab"' : 'data-target="#xs-components-links-module-StopModule-cd4b1c61926909ee45281891253cdaab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopModule-cd4b1c61926909ee45281891253cdaab"' :
                                            'id="xs-components-links-module-StopModule-cd4b1c61926909ee45281891253cdaab"' }>
                                            <li class="link">
                                                <a href="components/StopInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StopPointModule.html" data-type="entity-link" >StopPointModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StopPointModule-426b8c9b8c653aeed6151b5feb591f18"' : 'data-target="#xs-components-links-module-StopPointModule-426b8c9b8c653aeed6151b5feb591f18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopPointModule-426b8c9b8c653aeed6151b5feb591f18"' :
                                            'id="xs-components-links-module-StopPointModule-426b8c9b8c653aeed6151b5feb591f18"' }>
                                            <li class="link">
                                                <a href="components/StopPointInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopPointInfoComponent</a>
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
                                            'data-target="#components-links-module-StopsModule-80f07819d7175b0e1fa9cf07ef7bc667"' : 'data-target="#xs-components-links-module-StopsModule-80f07819d7175b0e1fa9cf07ef7bc667"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopsModule-80f07819d7175b0e1fa9cf07ef7bc667"' :
                                            'id="xs-components-links-module-StopsModule-80f07819d7175b0e1fa9cf07ef7bc667"' }>
                                            <li class="link">
                                                <a href="components/StopsInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopsInfoComponent</a>
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
                                            'data-target="#components-links-module-ThemeSelectorModule-9831b6c0ee59bd902a32a51b64478711"' : 'data-target="#xs-components-links-module-ThemeSelectorModule-9831b6c0ee59bd902a32a51b64478711"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeSelectorModule-9831b6c0ee59bd902a32a51b64478711"' :
                                            'id="xs-components-links-module-ThemeSelectorModule-9831b6c0ee59bd902a32a51b64478711"' }>
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
                                            'data-target="#components-links-module-TripPassagesModule-e8a5b05b4014bc210067640e71ceb585"' : 'data-target="#xs-components-links-module-TripPassagesModule-e8a5b05b4014bc210067640e71ceb585"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TripPassagesModule-e8a5b05b4014bc210067640e71ceb585"' :
                                            'id="xs-components-links-module-TripPassagesModule-e8a5b05b4014bc210067640e71ceb585"' }>
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
                                <a href="classes/StopPointLoadSubscriber.html" data-type="entity-link" >StopPointLoadSubscriber</a>
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
                                <a href="guards/SearchResultResolver.html" data-type="entity-link" >SearchResultResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StopInfoResolver.html" data-type="entity-link" >StopInfoResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StopPointInfoResolver.html" data-type="entity-link" >StopPointInfoResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StopsResolver.html" data-type="entity-link" >StopsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TripPassagesResolver.html" data-type="entity-link" >TripPassagesResolver</a>
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
                                <a href="interfaces/IAppNotificationDismiss.html" data-type="entity-link" >IAppNotificationDismiss</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfig.html" data-type="entity-link" >IConfig</a>
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