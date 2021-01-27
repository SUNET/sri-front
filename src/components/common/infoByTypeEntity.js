const INFO_BY_ENTITIES = {
  Provider: {
    partialPath: 'network/providers',
    headerNameI18nText: 'main-entity-name/providers',
    fields: [
      { i18nText: 'general-forms/website', internalName: 'url', type: 'url' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  EndUser: {
    partialPath: 'network/end-users',
    headerNameI18nText: 'main-entity-name/end-users',
    fields: [
      { i18nText: 'general-forms/website', internalName: 'url', type: 'url' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  SiteOwner: {
    partialPath: 'network/site-owners',
    headerNameI18nText: 'main-entity-name/site-owners',
    fields: [
      { i18nText: 'general-forms/website', internalName: 'url', type: 'url' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  Customer: {
    partialPath: 'network/customers',
    headerNameI18nText: 'main-entity-name/customers',
    fields: [
      { i18nText: 'general-forms/website', internalName: 'url', type: 'url' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  Organization: {
    partialPath: 'community/organizations',
    headerNameI18nText: 'main-entity-name/organizations',
    fields: [
      { i18nText: 'general-forms/organization-id', internalName: 'organization_id', type: 'text' },
      { i18nText: 'general-forms/website', internalName: 'website', type: 'url' },
      { i18nText: 'general-forms/affiliation', internalName: 'affiliationFormatted', type: 'text' },
      { i18nText: 'general-forms/type', internalName: 'type', type: 'textType' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  PeeringPartner: {
    partialPath: 'network/peering-partners',
    headerNameI18nText: 'main-entity-name/peering-partners',
    fields: [
      { i18nText: 'general-forms/peering-link', internalName: 'peering_link', type: 'url' },
      { i18nText: 'general-forms/internal-link', internalName: 'internal-url', type: 'internal-url' },
    ],
  },
  HostUser: {
    partialPath: 'network/host-users',
    headerNameI18nText: 'main-entity-name/host-users',
    fields: [],
  },
  default: null,
};

export default INFO_BY_ENTITIES;
