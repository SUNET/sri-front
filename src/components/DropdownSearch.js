import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Downshift from "downshift";
import { Menu, ControllerButton, Input, Item, ArrowIcon, XIcon, css, itemToString } from "./DropdownSearchItems";

import environment from "../createRelayEnvironment";

const DropdownSearchContactsQuery = graphql`
    query DropdownSearchContactsQuery($filter: ContactFilter, $orderBy: ContactOrderBy) {
        contacts(filter: $filter, orderBy: $orderBy) {
            edges {
                node {
                    handle_id
                    name
                    first_name
                    last_name
                    contact_type
                    emails {
                        handle_id
                        name
                        type
                    }
                    phones {
                        handle_id
                        name
                        type
                    }
                    roles {
                        role_data {
                            handle_id
                            name
                        }
                        end {
                            handle_id
                            name
                        }
                    }
                }
            }
        }
    }
`;

class DropdownSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ""
        };
    }
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
                        <div {...css({ width: 250, margin: "auto" })}>
                            <div {...css({ position: "relative" })}>
                                <Input
                                    {...getInputProps({
                                        isOpen,
                                        placeholder: "Enter a name"
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
                                <Menu
                                    {...getMenuProps({ isOpen })}
                                    onClick={() => {
                                        document.getElementById("downshift-0-input").value = "";
                                    }}
                                >
                                    {isOpen ? (
                                        <QueryRenderer
                                            environment={environment}
                                            query={DropdownSearchContactsQuery}
                                            variables={{
                                                filter: {
                                                    AND: [
                                                        {
                                                            name_contains: inputValue
                                                        }
                                                    ]
                                                },
                                                orderBy: "name_ASC"
                                            }}
                                            render={({ error, props }) => {
                                                if (error) {
                                                    return <div>{error.message}</div>;
                                                } else if (props) {
                                                    return (props[Object.keys(props)[0]].edges.map((item, index) => (
                                                        <Item
                                                            key={item.node.handle_id}
                                                            {...getItemProps({
                                                                item,
                                                                index,
                                                                isActive: highlightedIndex === index,
                                                                isSelected: selectedItem === item
                                                            })}
                                                        >
                                                            {itemToString(item.node)}
                                                        </Item>
                                                    )): null);
                                                }
                                                return <div>Loading</div>;
                                            }}
                                        />
                                    ) : null}
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
