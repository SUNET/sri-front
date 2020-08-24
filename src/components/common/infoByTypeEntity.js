const INFO_BY_ENTITIES = {
  Provider: {
    headerNameI18nText: 'main-entity-name/providers',
    fields: [{ i18nText: 'general-forms/website', internalName: 'url', type: 'url' }],
  },
  EndUser: {
    headerNameI18nText: 'main-entity-name/end-users',
    fields: [{ i18nText: 'general-forms/website', internalName: 'url', type: 'url' }],
  },
  SiteOwner: {
    headerNameI18nText: 'main-entity-name/site-owners',
    fields: [{ i18nText: 'general-forms/website', internalName: 'url', type: 'url' }],
  },
  Customer: {
    headerNameI18nText: 'main-entity-name/customers',
    fields: [{ i18nText: 'general-forms/website', internalName: 'url', type: 'url' }],
  },
  Organization: {
    headerNameI18nText: 'main-entity-name/organizations',
    fields: [
      { i18nText: 'general-forms/organization-id', internalName: 'organization_id', type: 'text' },
      { i18nText: 'general-forms/website', internalName: 'website', type: 'url' },
      { i18nText: 'general-forms/affiliation', internalName: 'affiliationFormatted', type: 'text' },
      { i18nText: 'general-forms/type', internalName: 'type', type: 'textType' },
    ],
  },
  PeeringPartner: {
    headerNameI18nText: 'main-entity-name/peering-partners',
    fields: [{ i18nText: 'general-forms/peering-link', internalName: 'peering_link', type: 'url' }],
  },
};

export default INFO_BY_ENTITIES;
