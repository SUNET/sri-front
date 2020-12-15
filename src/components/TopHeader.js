import React from 'react';
import { withTranslation } from 'react-i18next';
import { Nav, Navbar, Form, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import Logout from './Logout';
import AccordionMenuOptions from './AccordionMenuOptions';
import { BrowserView, MobileView } from 'react-device-detect';
import PropTypes from 'prop-types';
import { debounce } from '../utils';
import { MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import formattedServicesData from './service/serviceListData';

import '../style/TopHeader.scss';

export class TopHeader extends React.Component {
  state = {
    isMenuOpen: false,
    generalFilterValue: '',
  };
  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  handleGeneralSearch = debounce((filter) => {
    if (filter && filter.length > 2) {
      this.props.startGeneralSearch(filter);
    }
  }, MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE);

  cleanGeneralSearch() {
    this.setState({ generalFilterValue: '' });
    this.props.cleanGeneralSearch();
  }

  renderBrand() {
    return (
      <Navbar.Brand className="top-header__brand" as={Link} to="/">
        <div className="top-header__brand__logo-icon"></div>
      </Navbar.Brand>
    );
  }
  renderHeaderTopMenu() {
    const { t } = this.props;
    return (
      <Nav className="top-header__nav-paths mx-auto">
        <Nav.Link as={NavLink} activeClassName="active" to="/dashboard">
          {t('header.main-menu.home')}
        </Nav.Link>
        {this.props.view_community && (
          <Nav.Link as={NavLink} activeClassName="active" to="/community">
            {t('header.main-menu.community')}
          </Nav.Link>
        )}
        {this.props.view_network && (
          <Nav.Link as={NavLink} activeClassName="active" to="/network">
            {t('header.main-menu.network')}
          </Nav.Link>
        )}
        {/* <Nav.Link as={NavLink} activeClassName="active" to="/contracts">
                    {t("header.main-menu.contracts")}
                </Nav.Link> */}
      </Nav>
    );
  }

  renderSearchItem() {
    return (
      <Nav.Item>
        <Form inline>
          <Form.Group className="search-global">
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.generalFilterValue}
              onChange={(event) => {
                this.setState({ generalFilterValue: event.target.value });
                this.handleGeneralSearch(event.target.value);
              }}
            />
            {this.state.generalFilterValue && (
              <div
                className="clear-input-cta"
                onClick={() => {
                  this.cleanGeneralSearch();
                }}
              >
                <FontAwesomeIcon className="clear-input" icon={faTimes} />
              </div>
            )}
          </Form.Group>
        </Form>
      </Nav.Item>
    );
  }
  renderNotificationsItem() {
    return (
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as="span">
            <i className="icon-notification"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item href="#/notification-1">Notification 1</Dropdown.Item>
            <Dropdown.Item href="#/notification-2">Notification 2</Dropdown.Item>
            <Dropdown.Item href="#/notification-3">Notification 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  }

  renderMoreItem() {
    return (
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as="span">
            <i className="icon-more"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item href="#/notification-1">Notification 1</Dropdown.Item>
            <Dropdown.Item href="#/notification-2">Notification 2</Dropdown.Item>
            <Dropdown.Item href="#/notification-3">Notification 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  }

  renderLogoutItem() {
    return (
      <Nav.Item className="top-header__user-block__logout">
        <Logout />
      </Nav.Item>
    );
  }

  renderProfileSettingsItem() {
    return (
      <Nav.Item className="top-header__user-block__profile px-0">
        <Link to="/personal-area/profile-settings">
          <div className="top-header__user-block__profile__icon"></div>
        </Link>
      </Nav.Item>
    );
  }

  renderMobileMenu() {
    return (
      <Navbar className="top-header">
        {this.renderBrand()}
        {this.renderSearchItem()}
      </Navbar>
    );
  }

  renderMobileNavigator() {
    const { t } = this.props;

    const toggleMenuData = [
      {
        header: t('header.main-menu.community'),
        subOptions: [
          {
            i18nText: t(`main-entity-name/organizations`),
            path: '/community/organizations',
            iconClass: 'icon-organization',
          },
          { i18nText: t(`main-entity-name/contacts`), path: '/community/contacts', iconClass: 'icon-contact' },
          { i18nText: t(`main-entity-name/groups`), path: '/community/groups', iconClass: 'icon-groups' },
        ],
      },
      {
        header: t('header.main-menu.network'),
        subOptions: [
          {
            i18nText: 'Organizations',
            path: '/network/customers',
            iconClass: 'icon-organization',
            subSubOptions: [
              { i18nText: t('main-entity-name/customers'), path: '/network/customers' },
              { i18nText: t('main-entity-name/end-users'), path: '/network/end-users' },
              { i18nText: t('main-entity-name/providers'), path: '/network/providers' },
              { i18nText: t('main-entity-name/site-owners'), path: '/network/site-owners' },
            ],
          },
          {
            i18nText: t('section/network/equipment-cables'),
            path: '/network/cables',
            iconClass: 'icon-organization',
            subSubOptions: [
              { i18nText: t('main-entity-name/ports'), path: '/network/ports' },
              { i18nText: t('main-entity-name/cables'), path: '/network/cables' },
              { i18nText: t('main-entity-name/hosts'), path: '/network/hosts' },
              { i18nText: t('main-entity-name/firewalls'), path: '/network/firewalls' },
              { i18nText: t('main-entity-name/routers'), path: '/network/routers' },
              { i18nText: t('main-entity-name/switches'), path: '/network/switches' },
              { i18nText: t('main-entity-name/external-equipment'), path: '/network/external-equipments' },
              { i18nText: t('main-entity-name/optical-nodes'), path: '/network/optical-nodes' },
              { i18nText: t('main-entity-name/odfs'), path: '/network/odfs' },
            ],
          },
          {
            i18nText: t('section/network/optical-layers'),
            path: '/network/optical-nodes',
            iconClass: 'icon-organization',
            subSubOptions: [
              { i18nText: t('main-entity-name/optical-filters'), path: 'optical-filters' },
              { i18nText: t('main-entity-name/optical-links'), path: 'optical-links' },
              { i18nText: t('main-entity-name/optical-multiplex-sections'), path: 'optical-multiplex-sections' },
              { i18nText: t('main-entity-name/optical-paths'), path: 'optical-paths' },
            ],
          },
          {
            i18nText: t('section/network/peering'),
            path: '/network/peering-partners',
            iconClass: 'icon-organization',
            subSubOptions: [
              { i18nText: t('main-entity-name/peering-groups'), path: '/network/peering-groups' },
              { i18nText: t('main-entity-name/peering-partners'), path: '/network/peering-partners' },
            ],
          },
          {
            i18nText: t('section/network/location'),
            path: '/network/location-sites',
            iconClass: 'icon-organization',
            subSubOptions: [
              { i18nText: t('main-entity-name/location-racks'), path: '/network/location-racks' },
              { i18nText: t('main-entity-name/location-rooms'), path: '/network/location-rooms' },
              { i18nText: t('main-entity-name/location-sites'), path: '/network/location-sites' },
            ],
          },
          {
            i18nText: t('main-entity-name/services'),
            path: formattedServicesData[0].path,
            iconClass: 'icon-organization',
            subSubOptions: formattedServicesData,
          },
        ],
      },
    ];

    return (
      <AccordionMenuOptions data={toggleMenuData} onSelectedOption={() => this.closeMenu()}></AccordionMenuOptions>
    );
  }

  renderPanelInside() {
    return (
      <main id="page-wrap">
        <Navbar className="top-header">
          <Nav className="top-header__user-block">
            {this.renderProfileSettingsItem()}
            {/* {this.renderNotificationsItem()} */}
            {/* {this.renderMoreItem()} */}
            {this.renderLogoutItem()}
          </Nav>
        </Navbar>
        {this.renderMobileNavigator()}
      </main>
    );
  }

  renderMobileLateralPanelMenu() {
    return (
      <BurgerMenu
        right
        disableAutoFocus
        disableOverlayClick={() => this.closeMenu()}
        customCrossIcon={<div className="row-cross-remove-cta"></div>}
        isOpen={this.state.isMenuOpen}
        onStateChange={(newState) => {
          this.setState({ isMenuOpen: newState.isOpen });
        }}
        outerContainerId={'outer-container'}
        pageWrapId={'page-wrap'}
      >
        {this.renderPanelInside()}
      </BurgerMenu>
    );
  }

  renderMobileHeader() {
    return (
      <header id="outer-container">
        <Navbar>
          {this.renderMobileMenu()}
          {/* {this.renderDesktopHeader()} */}
          {/* <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__brand">{this.renderBrand()}</Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__menu desktop-only">{this.renderHeaderTopMenu()}</Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__right-block desktop-only">
                          {this.renderSearch()}
                          {this.renderNotifications()}
                          {this.renderMore()}
                          {this.renderProfileSettings()}
                          {this.renderLogout()}
                      </Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__burger-button mobile-tablet-only">
                          <BurgerButton></BurgerButton>
                      </Nav>
                  </Navbar> */}
        </Navbar>
        {this.renderMobileLateralPanelMenu()}
      </header>
    );
  }

  renderDesktopHeader() {
    return (
      <Navbar className="top-header">
        {this.renderBrand()}
        {this.renderHeaderTopMenu()}
        <Nav className="top-header__user-block">
          {this.renderSearchItem()}
          {/* {this.renderNotificationsItem()} */}
          {/* {this.renderMoreItem()} */}
          {this.renderProfileSettingsItem()}
          {this.renderLogoutItem()}
        </Nav>
      </Navbar>
    );
  }

  render() {
    return (
      <div>
        <MobileView>{this.renderMobileHeader()}</MobileView>
        <BrowserView>{this.renderDesktopHeader()}</BrowserView>
      </div>
    );
  }
}

TopHeader.propTypes = {
  t: PropTypes.func.isRequired,
  view_community: PropTypes.bool,
  view_services: PropTypes.bool,
  view_network: PropTypes.bool,
  landing_page: PropTypes.string,
};

export default withTranslation()(TopHeader);
