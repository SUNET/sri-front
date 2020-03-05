const Routes = {
    "/": "Home",
    "/dashboard": "Dashboard",
    "/network": "Network",
    "/network/physical": "Physical",
    "/network/physical/cables": "Cables",
    "/network/physical/external-equipment": "External equipment",
    "/network/physical/firewalls": "Firewalls",
    "/network/physical/hosts": "Hosts",
    "/network/physical/odfs": "Odfs",
    "/network/physical/optical-nodes": "Optical nodes",
    "/network/physical/routers": "Routers",
    "/network/logical": "Logical",
    "/network/logical/hosts": "Hosts",
    "/network/logical/optical-links": "Optical links",
    "/network/logical/optical-multiplex": "Optical multiplex",
    "/network/logical/optical-paths": "Optical paths",
    "/network/locations": "Locations",
    "/network/locations/racks": "Racks",
    "/network/locations/sites": "Sites",
    "/community": "Community",
    "/community/organizations": "Organizations",
    "/community/organizations/provider": "Provider",
    "/community/organizations/customers": "Customers",
    "/community/organizations/end-users": "End users",
    "/community/organizations/create": "Create Organization",
    "/community/groups": "Groups",
    "/community/groups/create": "Create Group",
    "/community/contacts": "Contacts",
    "/community/contacts/create": "Create Contact",
    "/community/contacts/:contactId": ":contactId",
    "/contracts": "Contracts",
    "/personal-area": "Personal Area",
    "/personal-area/profile-settings": "Profile & settings"
};

export const path = (url) => {
    const fixedPath = url.endsWith("/") ? path(url.substring(0, url.length - 1)) : url;

    return fixedPath;
};

export default Routes;
