import React from "react";
import graphql from "babel-plugin-relay/macro";
import Downshift from "downshift";
import matchSorter from "match-sorter";
import { Menu, ControllerButton, Input, Item, ArrowIcon, XIcon, css, itemToString } from "./DropdownSearchItems";

import { fetchQuery } from "relay-runtime";

import environment from "../createRelayEnvironment";

const DropdownSearchAllContactsQuery = graphql`
    query DropdownSearchAllContactsQuery {
        all_contacts {
            handle_id
            name
        }
    }
`;
class DropdownSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: "",
            allItems: {}
        };
    }
    componentDidMount() {
        const variables = {};

        fetchQuery(environment, DropdownSearchAllContactsQuery, variables).then((data) => {
            this.setState({ allItems: data.all_contacts });
        });
    }

    getItems = (filter) => {
        return filter
            ? matchSorter(this.state.allItems, filter, {
                  keys: ["name"]
              })
            : this.state.allItems;
    };

    handleSelectMember = (selection) => {
        console.log(selection);
        this.props.selection(selection);
    };

    render() {
        console.log(this.state);
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
                        <div {...css({ width: 250, margin: "auto" })}>
                            <div {...css({ position: "relative" })}>
                                <Input
                                    {...getInputProps({
                                        isOpen,
                                        placeholder: this.props.placeholder
                                    })}
                                />
                                {selectedItem ? (
                                    <ControllerButton onClick={clearSelection} aria-label="clear selection">
                                        <XIcon />
                                    </ControllerButton>
                                ) : (
                                    <ControllerButton {...getToggleButtonProps()}>
                                        <ArrowIcon isOpen={isOpen} />
                                    </ControllerButton>
                                )}
                            </div>
                            <div {...css({ position: "relative" })}>
                                <Menu {...getMenuProps({ isOpen })} onClick={clearSelection}>
                                    {isOpen
                                        ? this.getItems(inputValue).map((item, index) => (
                                              <Item
                                                  key={item.handle_id}
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

export default DropdownSearch;
