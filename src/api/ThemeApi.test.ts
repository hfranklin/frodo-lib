import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ThemeRaw, state } from '../index';
import { isEqualJson } from '../ops/utils/OpsUtils';
import {
  mockGetConfigEntity,
  mockPutConfigEntity,
} from '../test/mocks/ForgeRockApiMockEngine';
import { THEMEREALM_ID } from './ThemeApi';
import { ThemeSkeleton } from './ApiTypes';

const mock = new MockAdapter(axios);

const THEME_ID = 'd6636b33-111b-40f2-870d-f4dcb7281e43';
const THEME_NAME = 'Starter Theme';
const THEME_OBJ: ThemeSkeleton = {
  accountCardBackgroundColor: '#ffffff',
  accountCardHeaderColor: '#23282e',
  accountCardInnerBorderColor: '#e7eef4',
  accountCardInputBackgroundColor: '#ffffff',
  accountCardInputBorderColor: '#c0c9d5',
  accountCardInputLabelColor: '#5e6d82',
  accountCardInputSelectColor: '#e4f4fd',
  accountCardInputTextColor: '#23282e',
  accountCardOuterBorderColor: '#e7eef4',
  accountCardShadow: 3,
  accountCardTabActiveColor: '#e4f4fd',
  accountCardTabActiveBorderColor: '#109cf1',
  accountCardTextColor: '#5e6d82',
  accountFooter:
    '<div class="d-flex justify-content-center py-4 w-100"><span class="pr-1">© 2022</span>\n<a href="#" target="_blank" class="text-body">My Company, Inc</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Privacy Policy</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Terms & Conditions</a></div>',
  accountFooterEnabled: false,
  accountNavigationBackgroundColor: '#ffffff',
  accountNavigationTextColor: '#455469',
  accountNavigationToggleBorderColor: '#e7eef4',
  accountTableRowHoverColor: '#f6f8fa',
  backgroundColor: '#324054',
  backgroundImage: '',
  buttonRounded: 5,
  favicon: 'https://cdn.forgerock.com/platform/themes/starter/logo-starter.svg',
  fontFamily: 'Open Sans',
  journeyCardBackgroundColor: '#ffffff',
  journeyCardShadow: 3,
  journeyCardTextColor: '#5e6d82',
  journeyCardTitleColor: '#23282e',
  journeyFooter:
    '<div class="d-flex justify-content-center py-4 w-100"><span class="pr-1">© 2022</span>\n<a href="#" target="_blank" class="text-body">My Company, Inc</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Privacy Policy</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Terms & Conditions</a></div>',
  journeyFooterEnabled: false,
  journeyHeader:
    '<div class="d-flex justify-content-center py-4 flex-grow-1">Header Content</div>',
  journeyHeaderEnabled: false,
  journeyInputBackgroundColor: '#ffffff',
  journeyInputBorderColor: '#c0c9d5',
  journeyInputLabelColor: '#5e6d82',
  journeyInputSelectColor: '#e4f4fd',
  journeyInputTextColor: '#23282e',
  journeyTheaterMode: false,
  journeyJustifiedContent: '',
  journeyJustifiedContentEnabled: false,
  journeyLayout: 'card',
  linkActiveColor: '#004067',
  linkColor: '#0070b3',
  linkedTrees: [],
  logo: 'https://cdn.forgerock.com/platform/themes/starter/logo-starter.svg',
  logoAltText: 'Logo',
  logoEnabled: true,
  logoHeight: '56',
  logoProfile:
    'https://cdn.forgerock.com/platform/themes/starter/logo-starter-full.svg',
  logoProfileAltText: 'Logo',
  logoProfileCollapsed:
    'https://cdn.forgerock.com/platform/themes/starter/logo-starter.svg',
  logoProfileCollapsedAltText: 'Logo',
  logoProfileHeight: '24',
  primaryColor: '#324054',
  primaryOffColor: '#242E3C',
  profileBackgroundColor: '#ffffff',
  profileMenuHighlightColor: '#f6f8fa',
  profileMenuTextHighlightColor: '#455469',
  profileMenuHoverColor: '#f6f8fa',
  profileMenuHoverTextColor: '#455469',
  textColor: '#ffffff',
  topBarBackgroundColor: '#ffffff',
  topBarBorderColor: '#e7eef4',
  topBarHeaderColor: '#23282e',
  topBarTextColor: '#69788b',
  _id: 'd6636b33-111b-40f2-870d-f4dcb7281e43',
  isDefault: false,
  name: 'Starter Theme',
};
const THEME_MAP_RAW = {
  '01dcadc7-4a5c-4233-838c-e553d8a953c8': {
    _id: '01dcadc7-4a5c-4233-838c-e553d8a953c8',
    accountFooter:
      '<footer class="w-100">\n            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center py-4">\n              <div class="container w-100">\n                <div class="mt-5 py-4 border-top border-darkened">\n                  <div class="row" style="color: #23282e;">\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Company</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">About Us</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Contact Us</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Support</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Help Center</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Docs</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Community</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Facebook</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Twitter</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Forum</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-12 col-lg-6" style="color: #5e6d82">\n                      <div class="d-flex align-items-center justify-content-lg-end py-4 py-lg-0">\n                        <span class="pr-1">&copy; 2021</span>\n                        <a href="#" class="text-decoration-none" target="_self" style="color: #5e6d82">Rob Roy Markets, Inc</a>\n                      </div>\n                    </div>\n                  </div>\n                </div> \n              </div>\n            </div>\n          </footer>\n',
    accountFooterEnabled: true,
    accountPageSections: {
      accountControls: {
        enabled: false,
      },
      accountSecurity: {
        enabled: true,
        subsections: {
          password: {
            enabled: true,
          },
          securityQuestions: {
            enabled: false,
          },
          twoStepVerification: {
            enabled: true,
          },
          username: {
            enabled: true,
          },
        },
      },
      consent: {
        enabled: false,
      },
      oauthApplications: {
        enabled: false,
      },
      personalInformation: {
        enabled: true,
      },
      preferences: {
        enabled: false,
      },
      social: {
        enabled: false,
      },
      trustedDevices: {
        enabled: true,
      },
    },
    backgroundColor: '#FFFFFF',
    backgroundImage: '',
    bodyText: '#5E6D82',
    buttonRounded: '50',
    dangerColor: '#f7685b',
    favicon: '',
    isDefault: false,
    journeyFooter:
      '<footer class="w-100">\n    <div class="d-flex flex-column flex-md-row justify-content-center align-items-center py-4">\n        <div class="container w-100">\n            <div class="mt-5 py-4 border-top border-darkened">\n                <div class="row" style="color: #23282e;">\n                    <div class="col-4 col-md-3 col-lg-2">\n                        <h5 style="font-weight: 600; font-size: 0.9375rem;">\n                            Company\n                        </h5>\n                        <ul class="nav mb-4 flex-column">\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">About Us</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Contact Us</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                        <h5 style="font-weight: 600; font-size: 0.9375rem;">\n                            Support\n                        </h5>\n                        <ul class="nav mb-4 flex-column">\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Help Center</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Docs</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                        <h5 style="font-weight: 600; font-size: 0.9375rem;">\n                            Community\n                        </h5>\n                        <ul class="nav mb-4 flex-column">\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Facebook</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Twitter</a>\n                            </li>\n                            <li class="nav-item">\n                                <a href="#" class="nav-link px-0 py-1" target="_self">Forum</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class="col-12 col-lg-6">\n                        <div class="d-flex align-items-center justify-content-lg-end py-4 py-lg-0">\n                            <span class="pr-1">&copy; 2021</span>\n                            <a href="#" class="text-decoration-none" target="_self">Highlander, Inc.</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n',
    journeyFooterEnabled: true,
    journeyHeader:
      '<header>\n            <nav\n              class="navbar shadow-lg navbar-light bg-white navbar-expand-lg"\n            >\n              <a href="#" target="_self" class="navbar-brand">\n                <img\n                  src="https://cdn.forgerock.com/platform/themes/highlander/logo-highlander-full.svg"\n                  alt="Logo"\n                  style="height: 28px"\n                />\n              </a>\n              <div\n                class="navbar-collapse d-none d-lg-flex"\n                id="navbarSupportedContent"\n              >\n                <ul class="navbar-nav mr-auto">\n                  <li class="nav-item">\n                    <a class="nav-link" href="#">Link</a>\n                  </li>\n                  <li class="nav-item">\n                    <a\n                      class="nav-link disabled"\n                      href="#"\n                      tabindex="-1"\n                      aria-disabled="true"\n                      >Disabled</a\n                    >\n                  </li>\n                </ul>\n                <ul class="navbar-nav ml-auto">\n                  <li class="nav-item">\n                    <a href="#" target="_self" class="nav-link">Link</a>\n                  </li>\n                </ul>\n              </div>\n            </nav>\n          </header>\n',
    journeyHeaderEnabled: true,
    journeyJustifiedContent: '',
    journeyJustifiedContentEnabled: false,
    journeyLayout: 'card',
    journeyTheaterMode: false,
    linkActiveColor: '#C60819',
    linkColor: '#EB0A1E',
    linkedTrees: [],
    logo: '',
    logoAltText: '',
    logoEnabled: true,
    logoHeight: '40',
    logoProfile:
      'https://cdn.forgerock.com/platform/themes/highlander/logo-highlander-full.svg',
    logoProfileAltText: 'Highlander',
    logoProfileCollapsed:
      'https://cdn.forgerock.com/platform/themes/highlander/logo-highlander-icon.svg',
    logoProfileCollapsedAltText: 'Highlander',
    logoProfileCollapsedHeight: '28',
    logoProfileHeight: '28',
    name: 'Highlander',
    pageTitle: '#23282e',
    primaryColor: '#EB0A1E',
    primaryOffColor: '#C60819',
    profileBackgroundColor: '#FFFFFF',
    profileMenuHighlightColor: '#FFFFFF',
    profileMenuHoverColor: '#FFFFFF',
    profileMenuHoverTextColor: '#455469',
    profileMenuTextHighlightColor: '#EB0A1E',
    secondaryColor: '#69788b',
    textColor: '#ffffff',
  },
  'bceda121-f3a1-4098-a953-eb83bcde803f': {
    _id: 'bceda121-f3a1-4098-a953-eb83bcde803f',
    accountFooter:
      '<footer class="w-100">\n            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center py-4">\n              <div class="container w-100">\n                <div class="mt-5 py-4 border-top border-darkened">\n                  <div class="row" style="color: #23282e;">\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Company</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">About Us</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Contact Us</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Support</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Help Center</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Docs</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Privacy &amp; Terms</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem;">Community</h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Facebook</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Twitter</a></li>\n                        <li class="nav-item"><a href="#" class="nav-link px-0 py-1" target="_self">Forum</a></li>\n                      </ul>\n                    </div>\n                    <div class="col-12 col-lg-6">\n                      <div class="d-flex align-items-center justify-content-lg-end py-4 py-lg-0">\n                        <span class="pr-1">&copy; 2021</span>\n                        <a href="#" class="text-decoration-none" target="_self">Rob Roy Markets, Inc</a>\n                      </div>\n                    </div>\n                  </div>\n                </div> \n              </div>\n            </div>\n          </footer>\n',
    accountFooterEnabled: true,
    accountPageSections: {
      accountControls: {
        enabled: false,
      },
      accountSecurity: {
        enabled: true,
        subsections: {
          password: {
            enabled: true,
          },
          securityQuestions: {
            enabled: false,
          },
          twoStepVerification: {
            enabled: true,
          },
          username: {
            enabled: true,
          },
        },
      },
      consent: {
        enabled: false,
      },
      oauthApplications: {
        enabled: false,
      },
      personalInformation: {
        enabled: true,
      },
      preferences: {
        enabled: false,
      },
      social: {
        enabled: false,
      },
      trustedDevices: {
        enabled: true,
      },
    },
    backgroundColor: '#FFFFFF',
    backgroundImage: '',
    bodyText: '#5E6D82',
    buttonRounded: '50',
    dangerColor: '#f7685b',
    favicon: '',
    isDefault: false,
    journeyFooter:
      '<footer class="w-100">\n            <div\n              class="\n                d-flex\n                flex-column flex-md-row\n                justify-content-center\n                align-items-center\n                py-4\n              "\n            >\n              <div class="container w-100">\n                <div class="mt-5 py-4 border-top border-darkened">\n                  <div class="row" style="color: #23282e">\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem">\n                        Company\n                      </h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >About Us</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Contact Us</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Privacy &amp; Terms</a\n                          >\n                        </li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem">\n                        Support\n                      </h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Help Center</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Docs</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Privacy &amp; Terms</a\n                          >\n                        </li>\n                      </ul>\n                    </div>\n                    <div class="col-4 col-md-3 col-lg-2">\n                      <h5 style="font-weight: 600; font-size: 0.9375rem">\n                        Community\n                      </h5>\n                      <ul class="nav mb-4 flex-column">\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Facebook</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Twitter</a\n                          >\n                        </li>\n                        <li class="nav-item">\n                          <a href="#" class="nav-link px-0 py-1" target="_self"\n                            >Forum</a\n                          >\n                        </li>\n                      </ul>\n                    </div>\n                    <div class="col-12 col-lg-6">\n                      <div\n                        class="\n                          d-flex\n                          align-items-center\n                          justify-content-lg-end\n                          py-4 py-lg-0\n                        "\n                      >\n                        <span class="pr-1">&copy; 2021</span>\n                        <a href="#" class="text-decoration-none" target="_self"\n                          >Rob Roy Markets, Inc</a\n                        >\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </footer>\n',
    journeyFooterEnabled: true,
    journeyHeader:
      '<header>\n            <nav\n              class="navbar shadow-lg navbar-light bg-white navbar-expand-lg"\n            >\n              <a href="#" target="_self" class="navbar-brand">\n                <img\n                  src="https://cdn.forgerock.com/platform/themes/robroy/logo-robroy-full.svg"\n                  alt="Logo"\n                  style="height: 28px"\n                />\n              </a>\n              <div\n                class="navbar-collapse d-none d-lg-flex"\n                id="navbarSupportedContent"\n              >\n                <ul class="navbar-nav mr-auto">\n                  <li class="nav-item">\n                    <a class="nav-link" href="#">Link</a>\n                  </li>\n                  <li class="nav-item">\n                    <a\n                      class="nav-link disabled"\n                      href="#"\n                      tabindex="-1"\n                      aria-disabled="true"\n                      >Disabled</a\n                    >\n                  </li>\n                </ul>\n                <ul class="navbar-nav ml-auto">\n                  <li class="nav-item">\n                    <a href="#" target="_self" class="nav-link">Link</a>\n                  </li>\n                </ul>\n              </div>\n            </nav>\n          </header>\n',
    journeyHeaderEnabled: true,
    journeyJustifiedContent:
      '<img src="https://cdn.forgerock.com/platform/themes/robroy/illustration-robroy.svg" class="w-100">',
    journeyJustifiedContentEnabled: true,
    journeyLayout: 'justified-right',
    journeyTheaterMode: false,
    linkActiveColor: '#49871E',
    linkColor: '#5AA625',
    linkedTrees: [],
    logo: '',
    logoAltText: '',
    logoEnabled: true,
    logoHeight: '40',
    logoProfile:
      "data:image/svg+xml,%0A%3Csvg width='156' height='34' viewBox='0 0 156 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M32.5539 32.5538C32.5539 32.5538 17.0796 35.6024 7.23861 25.7614C-2.60242 15.9204 0.446148 0.446137 0.446148 0.446137C0.446148 0.446137 15.9204 -2.60243 25.7614 7.23866C35.6024 17.0797 32.5539 32.5538 32.5539 32.5538Z' fill='%23C3EA21'/%3E%3Cpath d='M32.5537 32.554C32.5537 32.554 17.0795 35.6026 7.23845 25.7615C-2.60257 15.9205 0.445995 0.446289 0.445995 0.446289L32.5537 32.554Z' fill='%238ADB53'/%3E%3C/g%3E%3Cpath d='M51.053 25.38L53.186 25.11V8.964L51.161 8.586V6.939H55.076C55.418 6.939 55.796 6.93 56.21 6.912C56.624 6.894 56.939 6.876 57.155 6.858C58.091 6.786 58.865 6.75 59.477 6.75C61.331 6.75 62.816 6.939 63.932 7.317C65.048 7.695 65.858 8.271 66.362 9.045C66.866 9.819 67.118 10.836 67.118 12.096C67.118 13.338 66.785 14.49 66.119 15.552C65.453 16.614 64.49 17.343 63.23 17.739C63.95 18.045 64.589 18.603 65.147 19.413C65.705 20.223 66.299 21.276 66.929 22.572C67.379 23.454 67.721 24.093 67.955 24.489C68.207 24.867 68.45 25.083 68.684 25.137L69.575 25.407V27H64.985C64.697 27 64.391 26.712 64.067 26.136C63.761 25.542 63.356 24.615 62.852 23.355C62.258 21.879 61.745 20.727 61.313 19.899C60.881 19.071 60.422 18.558 59.936 18.36H57.155V25.11L59.639 25.38V27H51.053V25.38ZM59.639 16.713C60.665 16.713 61.466 16.344 62.042 15.606C62.618 14.868 62.906 13.761 62.906 12.285C62.906 10.971 62.618 9.999 62.042 9.369C61.484 8.739 60.512 8.424 59.126 8.424C58.622 8.424 58.19 8.451 57.83 8.505C57.488 8.541 57.263 8.559 57.155 8.559V16.659C57.371 16.695 57.893 16.713 58.721 16.713H59.639ZM70.674 19.521C70.674 17.829 71.007 16.389 71.673 15.201C72.357 14.013 73.266 13.122 74.4 12.528C75.534 11.916 76.767 11.61 78.099 11.61C80.367 11.61 82.113 12.312 83.337 13.716C84.579 15.102 85.2 16.992 85.2 19.386C85.2 21.096 84.858 22.554 84.174 23.76C83.508 24.948 82.608 25.839 81.474 26.433C80.358 27.009 79.125 27.297 77.775 27.297C75.525 27.297 73.779 26.604 72.537 25.218C71.295 23.814 70.674 21.915 70.674 19.521ZM77.991 25.542C80.025 25.542 81.042 23.58 81.042 19.656C81.042 17.604 80.799 16.047 80.313 14.985C79.827 13.905 79.035 13.365 77.937 13.365C75.849 13.365 74.805 15.327 74.805 19.251C74.805 21.303 75.057 22.869 75.561 23.949C76.083 25.011 76.893 25.542 77.991 25.542ZM86.4395 5.454L91.3805 4.86H91.4345L92.1905 5.373V13.338C92.6765 12.852 93.2705 12.447 93.9725 12.123C94.6925 11.781 95.4665 11.61 96.2945 11.61C98.0225 11.61 99.4265 12.222 100.506 13.446C101.604 14.652 102.153 16.506 102.153 19.008C102.153 20.556 101.829 21.96 101.181 23.22C100.533 24.48 99.5975 25.479 98.3735 26.217C97.1675 26.937 95.7635 27.297 94.1615 27.297C92.7395 27.297 91.5065 27.18 90.4625 26.946C89.4185 26.694 88.7525 26.469 88.4645 26.271V7.182L86.4395 6.858V5.454ZM94.8635 13.986C94.3235 13.986 93.8105 14.112 93.3245 14.364C92.8565 14.598 92.4785 14.868 92.1905 15.174V25.029C92.2985 25.227 92.5505 25.389 92.9465 25.515C93.3425 25.641 93.7925 25.704 94.2965 25.704C95.4485 25.704 96.3665 25.173 97.0505 24.111C97.7525 23.031 98.1035 21.438 98.1035 19.332C98.1035 17.514 97.8065 16.173 97.2125 15.309C96.6185 14.427 95.8355 13.986 94.8635 13.986Z' fill='black'/%3E%3Cpath d='M104.183 25.38L106.316 25.11V8.964L104.291 8.586V6.939H108.206C108.548 6.939 108.926 6.93 109.34 6.912C109.754 6.894 110.069 6.876 110.285 6.858C111.221 6.786 111.995 6.75 112.607 6.75C114.461 6.75 115.946 6.939 117.062 7.317C118.178 7.695 118.988 8.271 119.492 9.045C119.996 9.819 120.248 10.836 120.248 12.096C120.248 13.338 119.915 14.49 119.249 15.552C118.583 16.614 117.62 17.343 116.36 17.739C117.08 18.045 117.719 18.603 118.277 19.413C118.835 20.223 119.429 21.276 120.059 22.572C120.509 23.454 120.851 24.093 121.085 24.489C121.337 24.867 121.58 25.083 121.814 25.137L122.705 25.407V27H118.115C117.827 27 117.521 26.712 117.197 26.136C116.891 25.542 116.486 24.615 115.982 23.355C115.388 21.879 114.875 20.727 114.443 19.899C114.011 19.071 113.552 18.558 113.066 18.36H110.285V25.11L112.769 25.38V27H104.183V25.38ZM112.769 16.713C113.795 16.713 114.596 16.344 115.172 15.606C115.748 14.868 116.036 13.761 116.036 12.285C116.036 10.971 115.748 9.999 115.172 9.369C114.614 8.739 113.642 8.424 112.256 8.424C111.752 8.424 111.32 8.451 110.96 8.505C110.618 8.541 110.393 8.559 110.285 8.559V16.659C110.501 16.695 111.023 16.713 111.851 16.713H112.769ZM123.804 19.521C123.804 17.829 124.137 16.389 124.803 15.201C125.487 14.013 126.396 13.122 127.53 12.528C128.664 11.916 129.897 11.61 131.229 11.61C133.497 11.61 135.243 12.312 136.467 13.716C137.709 15.102 138.33 16.992 138.33 19.386C138.33 21.096 137.988 22.554 137.304 23.76C136.638 24.948 135.738 25.839 134.604 26.433C133.488 27.009 132.255 27.297 130.905 27.297C128.655 27.297 126.909 26.604 125.667 25.218C124.425 23.814 123.804 21.915 123.804 19.521ZM131.121 25.542C133.155 25.542 134.172 23.58 134.172 19.656C134.172 17.604 133.929 16.047 133.443 14.985C132.957 13.905 132.165 13.365 131.067 13.365C128.979 13.365 127.935 15.327 127.935 19.251C127.935 21.303 128.187 22.869 128.691 23.949C129.213 25.011 130.023 25.542 131.121 25.542ZM143.187 33.723C142.863 33.723 142.512 33.696 142.134 33.642C141.774 33.588 141.513 33.525 141.351 33.453V30.564C141.477 30.636 141.729 30.708 142.107 30.78C142.485 30.852 142.827 30.888 143.133 30.888C144.033 30.888 144.771 30.591 145.347 29.997C145.941 29.403 146.49 28.404 146.994 27H145.536L140.46 13.905L139.245 13.554V11.988H146.67V13.554L144.699 13.878L147.102 21.357L148.074 24.543L148.911 21.357L151.125 13.878L149.424 13.554V11.988H155.283V13.554L153.96 13.878C152.97 16.902 151.989 19.818 151.017 22.626C150.045 25.434 149.478 27.009 149.316 27.351C148.74 28.863 148.191 30.069 147.669 30.969C147.147 31.869 146.526 32.553 145.806 33.021C145.086 33.489 144.213 33.723 143.187 33.723Z' fill='%236CBE34'/%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='33' height='33' fill='white' transform='matrix(-1 0 0 1 33 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    logoProfileAltText: 'RobRoy',
    logoProfileCollapsed:
      "data:image/svg+xml,%0A%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M32.5539 32.5538C32.5539 32.5538 17.0796 35.6024 7.23861 25.7614C-2.60242 15.9204 0.446148 0.446137 0.446148 0.446137C0.446148 0.446137 15.9204 -2.60243 25.7614 7.23866C35.6024 17.0797 32.5539 32.5538 32.5539 32.5538Z' fill='%23C3EA21'/%3E%3Cpath d='M32.5537 32.554C32.5537 32.554 17.0795 35.6026 7.23845 25.7615C-2.60257 15.9205 0.445996 0.446289 0.445996 0.446289L32.5537 32.554Z' fill='%238ADB53'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='33' height='33' fill='white' transform='matrix(-1 0 0 1 33 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
    logoProfileCollapsedAltText: 'RobRoy',
    logoProfileCollapsedHeight: '28',
    logoProfileHeight: '28',
    name: 'Robroy',
    pageTitle: '#23282e',
    primaryColor: '#5AA625',
    primaryOffColor: '#49871E',
    profileBackgroundColor: '#FFFFFF',
    profileMenuHighlightColor: '#FFFFFF',
    profileMenuHoverColor: '#FFFFFF',
    profileMenuHoverTextColor: '#455469',
    profileMenuTextHighlightColor: '#5AA625',
    secondaryColor: '#69788b',
    textColor: '#ffffff',
  },
  'c976d2d5-9b98-46c3-aca0-455d7ae28e7c': {
    _id: 'c976d2d5-9b98-46c3-aca0-455d7ae28e7c',
    accountCardBackgroundColor: '#ffffff',
    accountCardHeaderColor: '#23282e',
    accountCardInnerBorderColor: '#e7eef4',
    accountCardInputBackgroundColor: '#ffffff',
    accountCardInputBorderColor: '#c0c9d5',
    accountCardInputLabelColor: '#5e6d82',
    accountCardInputSelectColor: '#e4f4fd',
    accountCardInputTextColor: '#23282e',
    accountCardOuterBorderColor: '#e7eef4',
    accountCardShadow: 3,
    accountCardTabActiveBorderColor: '#109cf1',
    accountCardTabActiveColor: '#e4f4fd',
    accountCardTextColor: '#5e6d82',
    accountFooter:
      '<div class="d-flex justify-content-center py-4 w-100"><span class="pr-1">© 2021</span>\n<a href="#" target="_blank" class="text-body">My Company, Inc</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Privacy Policy</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Terms & Conditions</a></div>',
    accountFooterEnabled: false,
    accountNavigationBackgroundColor: '#ffffff',
    accountNavigationTextColor: '#455469',
    accountNavigationToggleBorderColor: '#e7eef4',
    accountPageSections: {
      accountControls: {
        enabled: true,
      },
      accountSecurity: {
        enabled: true,
        subsections: {
          password: {
            enabled: true,
          },
          securityQuestions: {
            enabled: false,
          },
          twoStepVerification: {
            enabled: true,
          },
          username: {
            enabled: true,
          },
        },
      },
      consent: {
        enabled: true,
      },
      oauthApplications: {
        enabled: true,
      },
      personalInformation: {
        enabled: true,
      },
      preferences: {
        enabled: true,
      },
      social: {
        enabled: true,
      },
      trustedDevices: {
        enabled: true,
      },
    },
    accountTableRowHoverColor: '#f6f8fa',
    backgroundColor: '#324054',
    backgroundImage: '',
    bodyText: '#23282e',
    boldLinks: false,
    buttonRounded: 5,
    dangerColor: '#f7685b',
    favicon: '',
    fontFamily: 'Open Sans',
    isDefault: false,
    journeyCardBackgroundColor: '#ffffff',
    journeyCardShadow: 3,
    journeyCardTextColor: '#5e6d82',
    journeyCardTitleColor: '#23282e',
    journeyFooter:
      '<div class="d-flex justify-content-center py-4 w-100"><span class="pr-1">© 2021</span>\n<a href="#" target="_blank" class="text-body">My Company, Inc</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Privacy Policy</a><a href="#" target="_blank" style="color: #0000ee" class="pl-3 text-body">Terms & Conditions</a></div>',
    journeyFooterEnabled: false,
    journeyHeader:
      '<div class="d-flex justify-content-center py-4 flex-grow-1">Header Content</div>',
    journeyHeaderEnabled: false,
    journeyInputBackgroundColor: '#ffffff',
    journeyInputBorderColor: '#c0c9d5',
    journeyInputLabelColor: '#5e6d82',
    journeyInputSelectColor: '#e4f4fd',
    journeyInputTextColor: '#23282e',
    journeyJustifiedContent: '',
    journeyJustifiedContentEnabled: false,
    journeyLayout: 'card',
    journeyTheaterMode: false,
    linkActiveColor: '#0c85cf',
    linkColor: '#109cf1',
    linkedTrees: [],
    logo: '',
    logoAltText: '',
    logoEnabled: true,
    logoHeight: '40',
    logoProfile: '',
    logoProfileAltText: '',
    logoProfileCollapsed: '',
    logoProfileCollapsedAltText: '',
    logoProfileCollapsedHeight: '40',
    logoProfileHeight: '40',
    name: 'Starter Theme',
    pageTitle: '#23282e',
    primaryColor: '#324054',
    primaryOffColor: '#242E3C',
    profileBackgroundColor: '#f6f8fa',
    profileMenuHighlightColor: '#f3f5f8',
    profileMenuHoverColor: '#324054',
    profileMenuHoverTextColor: '#ffffff',
    profileMenuTextHighlightColor: '#455469',
    secondaryColor: '#69788b',
    switchBackgroundColor: '#c0c9d5',
    textColor: '#ffffff',
    topBarBackgroundColor: '#ffffff',
    topBarBorderColor: '#e7eef4',
    topBarHeaderColor: '#23282e',
    topBarTextColor: '#69788b',
  },
  '27dbe20d-b80a-46ae-85fa-a6a3dd21f88a': {
    _id: '27dbe20d-b80a-46ae-85fa-a6a3dd21f88a',
    accountFooter:
      '<footer>\n  <div class="container-md">\n    <div class="py-3 d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-between align-items-center w-100">\n      <div class="text-nowrap">\n        <span class="pr-1">© 2022</span>\n        <a href="#" target="_blank" class="notranslate text-body">Zardoz, Inc</a>\n      </div>\n      <ul class="nav">\n        <li class="nav-item">\n          <a href="#" class="nav-link">Privacy Policy</a>\n        </li>\n        <li class="nav-item">\n          <a href="#" class="nav-link">Terms of Use</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n',
    accountFooterEnabled: true,
    accountPageSections: {
      accountControls: {
        enabled: false,
      },
      accountSecurity: {
        enabled: true,
        subsections: {
          password: {
            enabled: true,
          },
          securityQuestions: {
            enabled: false,
          },
          twoStepVerification: {
            enabled: true,
          },
          username: {
            enabled: true,
          },
        },
      },
      consent: {
        enabled: false,
      },
      oauthApplications: {
        enabled: false,
      },
      personalInformation: {
        enabled: true,
      },
      preferences: {
        enabled: false,
      },
      social: {
        enabled: false,
      },
      trustedDevices: {
        enabled: true,
      },
    },
    backgroundColor: '#FFFFFF',
    backgroundImage: '',
    bodyText: '#5E6D82',
    buttonRounded: '50',
    dangerColor: '#f7685b',
    favicon: '',
    isDefault: false,
    journeyFooter:
      '<footer>\n            <div class="container-md">\n            <div class="py-3 d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-between align-items-center w-100">\n              <div class="text-nowrap">\n                <span class="pr-1">© 2022</span>\n                <a href="#" target="_blank" class="notranslate text-body">Zardoz, Inc</a>\n              </div>\n              <ul class="nav">\n                <li class="nav-item">\n                  <a href="#" class="nav-link">Privacy Policy</a>\n                </li>\n                <li class="nav-item">\n                  <a href="#" class="nav-link">Terms of Use</a>\n                </li>\n              </ul>\n            </div>\n            </div>\n          </footer>\n',
    journeyFooterEnabled: true,
    journeyHeader:
      '<div class="d-flex justify-content-center py-4 flex-grow-1">Header Content</div>',
    journeyHeaderEnabled: false,
    journeyJustifiedContent:
      '<div style="display: flex; background-color: black; height: 100vh;">\n    <div class="d-none d-md-flex justify-content-center align-items-center p-5" style="background-image: url(https://cdn.forgerock.com/platform/themes/zardoz/background-zardoz.png);\n    background-size: cover;"><h1 class="text-center display-3" style="color: rgb(255, 255, 255);">Uptime &amp; Performance Benchmarking Made Easy</h1></div>\n</div>\n\n',
    journeyJustifiedContentEnabled: true,
    journeyLayout: 'justified-right',
    journeyTheaterMode: true,
    linkActiveColor: '#007661',
    linkColor: '#009C80',
    linkedTrees: [],
    logo: 'https://cdn.forgerock.com/platform/themes/zardoz/logo-zardoz.svg',
    logoAltText: 'Zardoz Logo',
    logoEnabled: true,
    logoHeight: '47',
    logoProfile:
      'https://cdn.forgerock.com/platform/themes/zardoz/logo-zardoz.svg',
    logoProfileAltText: 'Zardaz Logo',
    logoProfileCollapsed:
      'https://cdn.forgerock.com/platform/themes/zardoz/logo-zardoz.svg',
    logoProfileCollapsedAltText: 'Zardaz Logo',
    logoProfileCollapsedHeight: '28',
    logoProfileHeight: '40',
    name: 'Zardoz',
    pageTitle: '#23282e',
    primaryColor: '#009C80',
    primaryOffColor: '#007661',
    profileBackgroundColor: '#FFFFFF',
    profileMenuHighlightColor: '#FFFFFF',
    profileMenuHoverColor: '#FFFFFF',
    profileMenuHoverTextColor: '#455469',
    profileMenuTextHighlightColor: '#009C80',
    secondaryColor: '#69788b',
    textColor: '#ffffff',
  },
};
const THEME_MAP: Map<string, ThemeSkeleton> = new Map<string, ThemeSkeleton>();
for (const theme of Object.values(THEME_MAP_RAW)) {
  THEME_MAP[theme._id] = theme;
}

state.default.session.setTenant('https://openam-frodo-dev.forgeblocks.com/am');
state.default.session.setRealm('alpha');
state.default.session.setCookieName('cookieName');
state.default.session.setCookieValue('cookieValue');
// state.default.session.setDebug(true);
// state.default.session.setDebugHandler((message) => console.log(message));

describe('ThemeApi - getThemes()', () => {
  test('getThemes() 0: Method is implemented', async () => {
    expect(ThemeRaw.getThemes).toBeDefined();
  });

  test('getThemes() 1: Get all alpha themes (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('alpha');
    const themes = await ThemeRaw.getThemes();
    expect(themes).toBeTruthy();
    expect(themes.length).toBe(31);
  });

  test('getThemes() 2: Get all bravo themes (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('bravo');
    const themes = await ThemeRaw.getThemes();
    expect(themes).toBeTruthy();
    expect(themes.length).toBe(6);
  });

  test('getThemes() 3: Get all root themes (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('/');
    const themes = await ThemeRaw.getThemes();
    expect(themes).toBeTruthy();
    expect(themes.length).toBe(1);
  });

  test('getThemes() 4: Get all themes from non-existent realm (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('doesnotexist');
    const themes = await ThemeRaw.getThemes();
    expect(themes).toBeTruthy();
    expect(themes.length).toBe(0);
  });
});

describe('ThemeApi - getTheme()', () => {
  test('getTheme() 0: Method is implemented', async () => {
    expect(ThemeRaw.getTheme).toBeDefined();
  });

  test('getTheme() 1: Get alpha theme (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('alpha');
    const theme = await ThemeRaw.getTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('getTheme() 2: Get bravo theme (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('bravo');
    const theme = await ThemeRaw.getTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('getTheme() 3: Get root theme (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('/');
    const theme = await ThemeRaw.getTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('getTheme() 4: Get theme from non-existent realm (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('doesnotexist');
    expect.assertions(3);
    try {
      await ThemeRaw.getTheme(THEME_ID);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(`Theme with id "${THEME_ID}" not found!`);
    }
  });
});

describe('ThemeApi - getThemeByName()', () => {
  test('getThemeByName() 0: Method is implemented', async () => {
    expect(ThemeRaw.getThemeByName).toBeDefined();
  });

  test('getThemeByName() 1: Get alpha theme (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('alpha');
    const theme = await ThemeRaw.getThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('getThemeByName() 2: Get bravo theme (cloud)', async () => {
    mockGetConfigEntity(mock);
    state.default.session.setRealm('bravo');
    const theme = await ThemeRaw.getThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('getThemeByName() 3: Get root theme (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('/');
    const theme = await ThemeRaw.getThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('getThemeByName() 4: Get theme from non-existent realm (encore)', async () => {
    mockGetConfigEntity(mock, 'encore');
    state.default.session.setRealm('doesnotexist');
    expect.assertions(3);
    try {
      await ThemeRaw.getThemeByName(THEME_NAME);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(`Theme "${THEME_NAME}" not found!`);
    }
  });
});

describe('ThemeApi - putTheme()', () => {
  test('putTheme() 0: Method is implemented', async () => {
    expect(ThemeRaw.putTheme).toBeDefined();
  });

  test('putTheme() 1: Put alpha theme (cloud)', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putTheme(THEME_ID, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putTheme() 2: Put bravo theme (cloud)', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putTheme(THEME_ID, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putTheme() 3: Put root theme (encore)', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putTheme(THEME_ID, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putTheme() 4: Put theme from non-existent realm (encore)', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putTheme(THEME_ID, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });
});

describe('ThemeApi - putThemeByName()', () => {
  test('putThemeByName() 0: Method is implemented', async () => {
    expect(ThemeRaw.putThemeByName).toBeDefined();
  });

  test('putThemeByName() 1: Get alpha theme (cloud)', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putThemeByName(THEME_NAME, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putThemeByName() 2: Get bravo theme (cloud)', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putThemeByName(THEME_NAME, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putThemeByName() 3: Get root theme (encore)', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putThemeByName(THEME_NAME, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });

  test('putThemeByName() 4: Get theme from non-existent realm (encore)', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(6);
    const theme = await ThemeRaw.putThemeByName(THEME_NAME, THEME_OBJ);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
    expect(isEqualJson(theme, THEME_OBJ)).toBeTruthy();
  });
});

describe('ThemeApi - putThemes()', () => {
  test('putThemes() 0: Method is implemented', async () => {
    expect(ThemeRaw.putThemes).toBeDefined();
  });

  test('putThemes() 1: Update 4/6 alpha themes', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const newThemeMap = await ThemeRaw.putThemes(THEME_MAP);
    expect(newThemeMap).toBeTruthy();
    expect(newThemeMap.size).toBe(6);
  });

  test('putThemes() 2: Update 1/1 and add 3 bravo themes', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const newThemeMap = await ThemeRaw.putThemes(THEME_MAP);
    expect(newThemeMap).toBeTruthy();
    expect(newThemeMap.size).toBe(5);
  });

  test('putThemes() 3: Add 4 root themes', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const newThemeMap = await ThemeRaw.putThemes(THEME_MAP);
    expect(newThemeMap).toBeTruthy();
    expect(newThemeMap.size).toBe(4);
  });

  test('putThemes() 4: Add 4 themes to non-existent realm', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const newThemeMap = await ThemeRaw.putThemes(THEME_MAP);
    expect(newThemeMap).toBeTruthy();
    expect(newThemeMap.size).toBe(4);
  });
});

describe('ThemeApi - deleteTheme()', () => {
  test('deleteTheme() 0: Method is implemented', async () => {
    expect(ThemeRaw.deleteTheme).toBeDefined();
  });

  test('deleteTheme() 1: Delete alpha theme (cloud)', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('deleteTheme() 2: Delete bravo theme (cloud)', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('deleteTheme() 3: Delete root theme (encore)', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteTheme(THEME_ID);
    expect(theme).toBeTruthy();
    expect(theme._id).toBe(THEME_ID);
  });

  test('deleteTheme() 4: Delete theme from non-existent realm (encore)', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(3);
    try {
      await ThemeRaw.deleteTheme(THEME_ID);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(`${THEME_ID} not found`);
    }
  });
});

describe('ThemeApi - deleteThemeByName()', () => {
  test('deleteThemeByName() 0: Method is implemented', async () => {
    expect(ThemeRaw.deleteThemeByName).toBeDefined();
  });

  test('deleteThemeByName() 1: Delete alpha theme by name (cloud)', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('deleteThemeByName() 2: Delete bravo theme by name (cloud)', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock);
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('deleteThemeByName() 3: Delete root theme by name (encore)', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    const theme = await ThemeRaw.deleteThemeByName(THEME_NAME);
    expect(theme).toBeTruthy();
    expect(theme.name).toBe(THEME_NAME);
  });

  test('deleteThemeByName() 4: Delete theme by name from non-existent realm (encore)', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(3);
    try {
      await ThemeRaw.deleteThemeByName(THEME_NAME);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(`${THEME_NAME} not found`);
    }
  });
});

describe('ThemeApi - deleteThemes()', () => {
  test('deleteThemes() 0: Method is implemented', async () => {
    expect(ThemeRaw.deleteThemes).toBeDefined();
  });

  test('deleteThemes() 1: Delete all (6) alpha themes', async () => {
    state.default.session.setRealm('alpha');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const deletedThemes = await ThemeRaw.deleteThemes();
    expect(deletedThemes).toBeTruthy();
    expect(deletedThemes.length).toBe(6);
  });

  test('deleteThemes() 2: Delete all (1) bravo themes', async () => {
    state.default.session.setRealm('bravo');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const deletedThemes = await ThemeRaw.deleteThemes();
    expect(deletedThemes).toBeTruthy();
    expect(deletedThemes.length).toBe(1);
  });

  test('deleteThemes() 3: Delete all (1) root themes (encore)', async () => {
    state.default.session.setRealm('/');
    mockGetConfigEntity(mock, 'encore');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(5);
    const deletedThemes = await ThemeRaw.deleteThemes();
    expect(deletedThemes).toBeTruthy();
    expect(deletedThemes.length).toBe(1);
  });

  test('deleteThemes() 4: Delete all themes in non-existent realm', async () => {
    state.default.session.setRealm('doesnotexist');
    mockGetConfigEntity(mock, 'putThemes');
    mockPutConfigEntity(mock, (mockEntityId: string, mockEntityObj: any) => {
      expect(mockEntityId).toEqual(THEMEREALM_ID);
      expect(mockEntityObj).toBeTruthy();
    });
    expect.assertions(2);
    try {
      await ThemeRaw.deleteThemes();
    } catch (error) {
      expect(error.message).toBe(
        'No theme configuration found for realm "doesnotexist"'
      );
    }
  });
});
