import React from "react";
import graphql from "babel-plugin-relay/macro";
import Downshift from "downshift";
import { withTranslation } from "react-i18next";
import { Menu, Input, Item, css, itemToString } from "./DropdownSearchItems";

import { fetchQuery } from "relay-runtime";

import environment from "../createRelayEnvironment";

import { debounce } from "../utils";
import { MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE } from "../utils/constants";

import "../style/Downshift.scss";

const MIN_CHAR_TO_FIND = 2;

const DropdownSearchAllContactsQuery = graphql`
    query DropdownSearchAllContactsQuery($filter: ContactFilter) {
        contacts(filter: $filter) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;
const DropdownSearchAllProvidersQuery = graphql`
    query DropdownSearchAllProvidersQuery($filter: ProviderFilter) {
        providers(filter: $filter) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;
class DropdownSearch extends React.Component {
    constructor(props) {
        super(props);
        const { t } = this.props;
        this.LOADING_VALUE = [{ id: "", name: t("actions.loading") }];

        this.NO_MATCHES_RESULT = [{ id: "", name: t("search-filter.no-matches") }];

        this.state = {
            filterValue: "",
            allItems: []
        };
    }
    getQueryByModel(model) {
        switch (model) {
            case "contacts":
                return DropdownSearchAllContactsQuery;
                break;
            case "providers":
                return DropdownSearchAllProvidersQuery;
                break;
            default:
                return DropdownSearchAllContactsQuery;
                break;
        }
    }

    getItems = debounce((filter) => {
        const modelName = this.props.model ? this.props.model : "contacts";
        let dropdownQuery = this.getQueryByModel(this.props.model);
        const variables = {
            filter: { AND: [{ name_contains: filter }] }
        };

        if (filter.length > MIN_CHAR_TO_FIND) {
            this.setState({ filterValue: filter, allItems: this.LOADING_VALUE });
            fetchQuery(environment, dropdownQuery, variables).then((data) => {
                let newData = data[modelName].edges.map((edge) => edge.node);
                if (newData.length === 0) {
                    newData = this.NO_MATCHES_RESULT;
                }
                this.setState({ filterValue: filter, allItems: newData });
            });
        } else {
            this.setState({ filterValue: filter, allItems: [] });
        }
    }, MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE);

    handleSelectMember = (selection) => {
        this.props.selection(selection);
    };

    render() {
        return (
            <div
                {...css({
                    display: "flex",
                    flexDirection: "column"
                })}
            >
                <Downshift onChange={(selection) => this.handleSelectMember(selection)} itemToString={itemToString}>
                    {({
                        getInputProps,
                        getToggleButtonProps,
                        getMenuProps,
                        getItemProps,
                        isOpen,
                        clearSelection,
                        selectedItem,
                        inputValue,
                        highlightedIndex
                    }) => (
                        <div {...css({ margin: "auto" })} className="downshift">
                            <div {...css({ position: "relative" })}>
                                <Input
                                    {...getInputProps({
                                        isOpen,
                                        placeholder: this.props.placeholder,
                                        onChange: (event) => {
                                            this.getItems(event.target.value);
                                        }
                                    })}
                                />
                            </div>
                            <div {...css({ position: "relative" })}>
                                <Menu {...getMenuProps({ isOpen })} onClick={clearSelection}>
                                    {isOpen
                                        ? this.state.allItems.map((item, index) => (
                                              <Item
                                                  key={item.id}
                                                  {...getItemProps({
                                                      item,
                                                      index,
                                                      isActive: highlightedIndex === index,
                                                      isSelected: selectedItem === item
                                                  })}
                                              >
                                                  {itemToString(item)}
                                              </Item>
                                          ))
                                        : null}
                                </Menu>
                            </div>
                        </div>
                    )}
                </Downshift>
            </div>
        );
    }
}

export default withTranslation()(DropdownSearch);
