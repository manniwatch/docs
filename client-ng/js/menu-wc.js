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
                                            'data-target="#components-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' : 'data-target="#xs-components-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' :
                                            'id="xs-components-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' : 'data-target="#xs-injectables-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' :
                                        'id="xs-injectables-links-module-AppModule-8d2f42b16ba5a69817916a6f61c8146950e3336e2c3473407662b81652e02d5a2c4bc7b9579bec3af9e7ef152188a154c2a37f1710f5a7fac653d2dc777d4e87"' }>
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
                                        'data-target="#injectables-links-module-AppRoutingModule-eba40ae46fbe30cd4f030feee44f61b06d6954fbb9eba7eabee8c0a282037f8258196a903e18f726384edb3ac4cbea4fe9926bbacbaaa8faf80101844608567c"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-eba40ae46fbe30cd4f030feee44f61b06d6954fbb9eba7eabee8c0a282037f8258196a903e18f726384edb3ac4cbea4fe9926bbacbaaa8faf80101844608567c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-eba40ae46fbe30cd4f030feee44f61b06d6954fbb9eba7eabee8c0a282037f8258196a903e18f726384edb3ac4cbea4fe9926bbacbaaa8faf80101844608567c"' :
                                        'id="xs-injectables-links-module-AppRoutingModule-eba40ae46fbe30cd4f030feee44f61b06d6954fbb9eba7eabee8c0a282037f8258196a903e18f726384edb3ac4cbea4fe9926bbacbaaa8faf80101844608567c"' }>
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
                                        'data-target="#directives-links-module-CountdownTimerModule-6f2871cf341419b3c8f194c6d722190a7fe87dc8c5ddc42df4781990c4e9b2d565d94af1b4539e96bd68cb8574f3be83d274e143a0dfe4f416281f3d3aa980b0"' : 'data-target="#xs-directives-links-module-CountdownTimerModule-6f2871cf341419b3c8f194c6d722190a7fe87dc8c5ddc42df4781990c4e9b2d565d94af1b4539e96bd68cb8574f3be83d274e143a0dfe4f416281f3d3aa980b0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CountdownTimerModule-6f2871cf341419b3c8f194c6d722190a7fe87dc8c5ddc42df4781990c4e9b2d565d94af1b4539e96bd68cb8574f3be83d274e143a0dfe4f416281f3d3aa980b0"' :
                                        'id="xs-directives-links-module-CountdownTimerModule-6f2871cf341419b3c8f194c6d722190a7fe87dc8c5ddc42df4781990c4e9b2d565d94af1b4539e96bd68cb8574f3be83d274e143a0dfe4f416281f3d3aa980b0"' }>
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
                                            'data-target="#components-links-module-DepartureListModule-4c2cf315ff55a08f0cf356f51fbfabc9ddc9794f182bb1229f20396c31e6262245eb5c2ae390f03bb964ce33537d12598a58929f88c23a3f3db673a89d6737d5"' : 'data-target="#xs-components-links-module-DepartureListModule-4c2cf315ff55a08f0cf356f51fbfabc9ddc9794f182bb1229f20396c31e6262245eb5c2ae390f03bb964ce33537d12598a58929f88c23a3f3db673a89d6737d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DepartureListModule-4c2cf315ff55a08f0cf356f51fbfabc9ddc9794f182bb1229f20396c31e6262245eb5c2ae390f03bb964ce33537d12598a58929f88c23a3f3db673a89d6737d5"' :
                                            'id="xs-components-links-module-DepartureListModule-4c2cf315ff55a08f0cf356f51fbfabc9ddc9794f182bb1229f20396c31e6262245eb5c2ae390f03bb964ce33537d12598a58929f88c23a3f3db673a89d6737d5"' }>
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
                                            'data-target="#components-links-module-ErrorModule-8cfa0b731f55e9c5d8211f2bee9b97a8adbba287ca1f8b63c941e7429fbab9097a213dfb40ef54c0e8666f0a2d56a208ada0f6063c96816d41a38b0862ccfed4"' : 'data-target="#xs-components-links-module-ErrorModule-8cfa0b731f55e9c5d8211f2bee9b97a8adbba287ca1f8b63c941e7429fbab9097a213dfb40ef54c0e8666f0a2d56a208ada0f6063c96816d41a38b0862ccfed4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-8cfa0b731f55e9c5d8211f2bee9b97a8adbba287ca1f8b63c941e7429fbab9097a213dfb40ef54c0e8666f0a2d56a208ada0f6063c96816d41a38b0862ccfed4"' :
                                            'id="xs-components-links-module-ErrorModule-8cfa0b731f55e9c5d8211f2bee9b97a8adbba287ca1f8b63c941e7429fbab9097a213dfb40ef54c0e8666f0a2d56a208ada0f6063c96816d41a38b0862ccfed4"' }>
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
                                            'data-target="#components-links-module-HeaderBoxModule-e838a250d1749a98ad5cb001542e23d324537366637d1d3c233bbb5b3f2a3614ffd107e05da41b9ae357b41906249f10eb727b8f0fc3243530a49099f0ee7993"' : 'data-target="#xs-components-links-module-HeaderBoxModule-e838a250d1749a98ad5cb001542e23d324537366637d1d3c233bbb5b3f2a3614ffd107e05da41b9ae357b41906249f10eb727b8f0fc3243530a49099f0ee7993"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderBoxModule-e838a250d1749a98ad5cb001542e23d324537366637d1d3c233bbb5b3f2a3614ffd107e05da41b9ae357b41906249f10eb727b8f0fc3243530a49099f0ee7993"' :
                                            'id="xs-components-links-module-HeaderBoxModule-e838a250d1749a98ad5cb001542e23d324537366637d1d3c233bbb5b3f2a3614ffd107e05da41b9ae357b41906249f10eb727b8f0fc3243530a49099f0ee7993"' }>
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
                                        'data-target="#directives-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' : 'data-target="#xs-directives-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' :
                                        'id="xs-directives-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' }>
                                        <li class="link">
                                            <a href="directives/OlMainMapDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlMainMapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' : 'data-target="#xs-injectables-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' :
                                        'id="xs-injectables-links-module-MainMapModule-5ce1b813351f48a3f5d0c566bbae947b803894c6b9e4ee78cb838f3bca3306327e17bdd63a6200f9f4437d6d5a191247a2dbbb8d74c574cb73048769e869438e"' }>
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
                                            'data-target="#components-links-module-MainToolbarModule-7a43bd1a375700e858704603759fd0995f3eb4fd788fec7d6ee5e8d2ba927394cbadf59e027801ba629c17380a94e217551a16d4ad1a5ede794a1a99907e29bb"' : 'data-target="#xs-components-links-module-MainToolbarModule-7a43bd1a375700e858704603759fd0995f3eb4fd788fec7d6ee5e8d2ba927394cbadf59e027801ba629c17380a94e217551a16d4ad1a5ede794a1a99907e29bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainToolbarModule-7a43bd1a375700e858704603759fd0995f3eb4fd788fec7d6ee5e8d2ba927394cbadf59e027801ba629c17380a94e217551a16d4ad1a5ede794a1a99907e29bb"' :
                                            'id="xs-components-links-module-MainToolbarModule-7a43bd1a375700e858704603759fd0995f3eb4fd788fec7d6ee5e8d2ba927394cbadf59e027801ba629c17380a94e217551a16d4ad1a5ede794a1a99907e29bb"' }>
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
                                        'data-target="#directives-links-module-OlStaticMapModule-f60441a3f3a69f44a3ab72f1854ec2a485576b7d6f4e5b56687ab9ecacf180d91219eb7fb4376fc9c69b2222fc3073032b54596f11080ea8fd5f0be000e05672"' : 'data-target="#xs-directives-links-module-OlStaticMapModule-f60441a3f3a69f44a3ab72f1854ec2a485576b7d6f4e5b56687ab9ecacf180d91219eb7fb4376fc9c69b2222fc3073032b54596f11080ea8fd5f0be000e05672"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OlStaticMapModule-f60441a3f3a69f44a3ab72f1854ec2a485576b7d6f4e5b56687ab9ecacf180d91219eb7fb4376fc9c69b2222fc3073032b54596f11080ea8fd5f0be000e05672"' :
                                        'id="xs-directives-links-module-OlStaticMapModule-f60441a3f3a69f44a3ab72f1854ec2a485576b7d6f4e5b56687ab9ecacf180d91219eb7fb4376fc9c69b2222fc3073032b54596f11080ea8fd5f0be000e05672"' }>
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
                                            'data-target="#components-links-module-RequestUpdateDialogModule-f1c9a0876461dccf23b9d4aa1472a0167d3528a428086dd6b6d69f4ab05c5c220fb631533915aceda0e78896b7a972345ed0de216b292b6a5364ca02c0c84430"' : 'data-target="#xs-components-links-module-RequestUpdateDialogModule-f1c9a0876461dccf23b9d4aa1472a0167d3528a428086dd6b6d69f4ab05c5c220fb631533915aceda0e78896b7a972345ed0de216b292b6a5364ca02c0c84430"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestUpdateDialogModule-f1c9a0876461dccf23b9d4aa1472a0167d3528a428086dd6b6d69f4ab05c5c220fb631533915aceda0e78896b7a972345ed0de216b292b6a5364ca02c0c84430"' :
                                            'id="xs-components-links-module-RequestUpdateDialogModule-f1c9a0876461dccf23b9d4aa1472a0167d3528a428086dd6b6d69f4ab05c5c220fb631533915aceda0e78896b7a972345ed0de216b292b6a5364ca02c0c84430"' }>
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
                                            'data-target="#components-links-module-RetryDialogModule-b1bd382071fa00d794962952ddbca9c19efbca4583c3e947bb47478fec8ca33c4c4f84652a4c86a837d2eba78c3adca85af3388e3e4b60cb8eb79c8867ab4c7d"' : 'data-target="#xs-components-links-module-RetryDialogModule-b1bd382071fa00d794962952ddbca9c19efbca4583c3e947bb47478fec8ca33c4c4f84652a4c86a837d2eba78c3adca85af3388e3e4b60cb8eb79c8867ab4c7d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RetryDialogModule-b1bd382071fa00d794962952ddbca9c19efbca4583c3e947bb47478fec8ca33c4c4f84652a4c86a837d2eba78c3adca85af3388e3e4b60cb8eb79c8867ab4c7d"' :
                                            'id="xs-components-links-module-RetryDialogModule-b1bd382071fa00d794962952ddbca9c19efbca4583c3e947bb47478fec8ca33c4c4f84652a4c86a837d2eba78c3adca85af3388e3e4b60cb8eb79c8867ab4c7d"' }>
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
                                            'data-target="#components-links-module-RouteListModule-8a2c10b096701e82fffdab3abd7a2d3037b4d692baed32d85979044e8fcfe5fba914cf79a86c7171e661e80609a1c44e34b38180feb2c6554c6e7c5714605b56"' : 'data-target="#xs-components-links-module-RouteListModule-8a2c10b096701e82fffdab3abd7a2d3037b4d692baed32d85979044e8fcfe5fba914cf79a86c7171e661e80609a1c44e34b38180feb2c6554c6e7c5714605b56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RouteListModule-8a2c10b096701e82fffdab3abd7a2d3037b4d692baed32d85979044e8fcfe5fba914cf79a86c7171e661e80609a1c44e34b38180feb2c6554c6e7c5714605b56"' :
                                            'id="xs-components-links-module-RouteListModule-8a2c10b096701e82fffdab3abd7a2d3037b4d692baed32d85979044e8fcfe5fba914cf79a86c7171e661e80609a1c44e34b38180feb2c6554c6e7c5714605b56"' }>
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
                                            'data-target="#components-links-module-SearchModule-c816461746666cd7caf835a902d0d4c75713de60a63f4faa88fb183928bbbb240673106dab9b5af60712c19f6fca909887aebc362b034a712f8d4c023adeedcb"' : 'data-target="#xs-components-links-module-SearchModule-c816461746666cd7caf835a902d0d4c75713de60a63f4faa88fb183928bbbb240673106dab9b5af60712c19f6fca909887aebc362b034a712f8d4c023adeedcb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-c816461746666cd7caf835a902d0d4c75713de60a63f4faa88fb183928bbbb240673106dab9b5af60712c19f6fca909887aebc362b034a712f8d4c023adeedcb"' :
                                            'id="xs-components-links-module-SearchModule-c816461746666cd7caf835a902d0d4c75713de60a63f4faa88fb183928bbbb240673106dab9b5af60712c19f6fca909887aebc362b034a712f8d4c023adeedcb"' }>
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
                                            'data-target="#components-links-module-SettingsModule-f4ba414ab6b1fdbc8383c064755a2a9471d1748d9ada3fc22d64f5028bef5c1982065f2eb129312b0e6a2440dd0c15ebe37f3df563d3d79793cda1545347f09b"' : 'data-target="#xs-components-links-module-SettingsModule-f4ba414ab6b1fdbc8383c064755a2a9471d1748d9ada3fc22d64f5028bef5c1982065f2eb129312b0e6a2440dd0c15ebe37f3df563d3d79793cda1545347f09b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-f4ba414ab6b1fdbc8383c064755a2a9471d1748d9ada3fc22d64f5028bef5c1982065f2eb129312b0e6a2440dd0c15ebe37f3df563d3d79793cda1545347f09b"' :
                                            'id="xs-components-links-module-SettingsModule-f4ba414ab6b1fdbc8383c064755a2a9471d1748d9ada3fc22d64f5028bef5c1982065f2eb129312b0e6a2440dd0c15ebe37f3df563d3d79793cda1545347f09b"' }>
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
                                            'data-target="#components-links-module-SidebarModule-8e3a4da9e19e6728090b15b1701b69520bc351afd5ccece4390a5676fdc3b8d4c2674955f8f76d83a1a1168073bffc50108149404916ece2d2522b0d6341fd23"' : 'data-target="#xs-components-links-module-SidebarModule-8e3a4da9e19e6728090b15b1701b69520bc351afd5ccece4390a5676fdc3b8d4c2674955f8f76d83a1a1168073bffc50108149404916ece2d2522b0d6341fd23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-8e3a4da9e19e6728090b15b1701b69520bc351afd5ccece4390a5676fdc3b8d4c2674955f8f76d83a1a1168073bffc50108149404916ece2d2522b0d6341fd23"' :
                                            'id="xs-components-links-module-SidebarModule-8e3a4da9e19e6728090b15b1701b69520bc351afd5ccece4390a5676fdc3b8d4c2674955f8f76d83a1a1168073bffc50108149404916ece2d2522b0d6341fd23"' }>
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
                                            'data-target="#components-links-module-StopModule-7151c8096c325793b35e0bcb5c98cb219bf607f3abbc637f16f22ea0aa64dfe3943f2c96199969cc32af84153f8cf30ec4423f291138cf0f3fbff443e456f286"' : 'data-target="#xs-components-links-module-StopModule-7151c8096c325793b35e0bcb5c98cb219bf607f3abbc637f16f22ea0aa64dfe3943f2c96199969cc32af84153f8cf30ec4423f291138cf0f3fbff443e456f286"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopModule-7151c8096c325793b35e0bcb5c98cb219bf607f3abbc637f16f22ea0aa64dfe3943f2c96199969cc32af84153f8cf30ec4423f291138cf0f3fbff443e456f286"' :
                                            'id="xs-components-links-module-StopModule-7151c8096c325793b35e0bcb5c98cb219bf607f3abbc637f16f22ea0aa64dfe3943f2c96199969cc32af84153f8cf30ec4423f291138cf0f3fbff443e456f286"' }>
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
                                            'data-target="#components-links-module-StopPointModule-bd749a2d21af0c48112b2ee7e1cf0f60b821aa508a2bc7e8b7d60fdf88803212f4d87da04549a5a53518e2bdb2389bbf268cb74055b66cad3f37d7bd0fc0752b"' : 'data-target="#xs-components-links-module-StopPointModule-bd749a2d21af0c48112b2ee7e1cf0f60b821aa508a2bc7e8b7d60fdf88803212f4d87da04549a5a53518e2bdb2389bbf268cb74055b66cad3f37d7bd0fc0752b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopPointModule-bd749a2d21af0c48112b2ee7e1cf0f60b821aa508a2bc7e8b7d60fdf88803212f4d87da04549a5a53518e2bdb2389bbf268cb74055b66cad3f37d7bd0fc0752b"' :
                                            'id="xs-components-links-module-StopPointModule-bd749a2d21af0c48112b2ee7e1cf0f60b821aa508a2bc7e8b7d60fdf88803212f4d87da04549a5a53518e2bdb2389bbf268cb74055b66cad3f37d7bd0fc0752b"' }>
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
                                            'data-target="#components-links-module-StopsModule-9cb2bdc310a311a1b70319a93f1a972238f9c001bc9b0dc70efe97f92af4e4826f87576be988757bbee1e9f2c08b9f0a0f686f88d77370a9e973157f8aae036d"' : 'data-target="#xs-components-links-module-StopsModule-9cb2bdc310a311a1b70319a93f1a972238f9c001bc9b0dc70efe97f92af4e4826f87576be988757bbee1e9f2c08b9f0a0f686f88d77370a9e973157f8aae036d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StopsModule-9cb2bdc310a311a1b70319a93f1a972238f9c001bc9b0dc70efe97f92af4e4826f87576be988757bbee1e9f2c08b9f0a0f686f88d77370a9e973157f8aae036d"' :
                                            'id="xs-components-links-module-StopsModule-9cb2bdc310a311a1b70319a93f1a972238f9c001bc9b0dc70efe97f92af4e4826f87576be988757bbee1e9f2c08b9f0a0f686f88d77370a9e973157f8aae036d"' }>
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
                                            'data-target="#components-links-module-ThemeSelectorModule-5f9afd7803e8727c13a2c32474edcc534bef8e0deeefd57fc8bf3fe8192ac94a9a5a3c7c86f99d7b01957f286bc2b60273b57533808718e07105151fe6a8b263"' : 'data-target="#xs-components-links-module-ThemeSelectorModule-5f9afd7803e8727c13a2c32474edcc534bef8e0deeefd57fc8bf3fe8192ac94a9a5a3c7c86f99d7b01957f286bc2b60273b57533808718e07105151fe6a8b263"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeSelectorModule-5f9afd7803e8727c13a2c32474edcc534bef8e0deeefd57fc8bf3fe8192ac94a9a5a3c7c86f99d7b01957f286bc2b60273b57533808718e07105151fe6a8b263"' :
                                            'id="xs-components-links-module-ThemeSelectorModule-5f9afd7803e8727c13a2c32474edcc534bef8e0deeefd57fc8bf3fe8192ac94a9a5a3c7c86f99d7b01957f286bc2b60273b57533808718e07105151fe6a8b263"' }>
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
                                            'data-target="#components-links-module-TripPassagesModule-5db57a1788b3dfd5ce07709e3963b458cca6255e319da64506f02186393ab80219e54cbbc8f047953f3c4433455be60774eca8936220264957840637d0e10d36"' : 'data-target="#xs-components-links-module-TripPassagesModule-5db57a1788b3dfd5ce07709e3963b458cca6255e319da64506f02186393ab80219e54cbbc8f047953f3c4433455be60774eca8936220264957840637d0e10d36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TripPassagesModule-5db57a1788b3dfd5ce07709e3963b458cca6255e319da64506f02186393ab80219e54cbbc8f047953f3c4433455be60774eca8936220264957840637d0e10d36"' :
                                            'id="xs-components-links-module-TripPassagesModule-5db57a1788b3dfd5ce07709e3963b458cca6255e319da64506f02186393ab80219e54cbbc8f047953f3c4433455be60774eca8936220264957840637d0e10d36"' }>
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