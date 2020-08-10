const INFO_BY_ENTITIES = {
  Provider: {
    headerNameI18nText: 'network.sub-menu.organizations/providers',
    fields: [{ i18nText: 'organization-details.website', internalName: 'url', type: 'url' }],
  },
  EndUser: {
    headerNameI18nText: 'network.sub-menu.organizations/end-users',
    fields: [{ i18nText: 'organization-details.website', internalName: 'url', type: 'url' }],
  },
  SiteOwner: {
    headerNameI18nText: 'network.sub-menu.organizations/site-owners',
    fields: [{ i18nText: 'organization-details.website', internalName: 'url', type: 'url' }],
  },
  Customer: {
    headerNameI18nText: 'network.sub-menu.organizations/customers',
    fields: [{ i18nText: 'organization-details.website', internalName: 'url', type: 'url' }],
  },
  Organization: {
    headerNameI18nText: 'community.sub-menu.organizations',
    fields: [
      { i18nText: 'organization-details.organization-id', internalName: 'organization_id', type: 'text' },
      { i18nText: 'organization-details.website', internalName: 'website', type: 'url' },
      { i18nText: 'organization-details.affiliation', internalName: 'affiliationFormatted', type: 'text' },
      { i18nText: 'organization-details.type', internalName: 'type', type: 'textType' },
    ],
  },
  PeeringPartner: {
    headerNameI18nText: 'network.peering-partners.name',
    fields: [{ i18nText: 'network.peering-partners.link', internalName: 'peering_link', type: 'url' }],
  },
};

export default INFO_BY_ENTITIES;
