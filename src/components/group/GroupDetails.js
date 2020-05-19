import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import { withTranslation } from "react-i18next";
import environment from "../../createRelayEnvironment";

import GroupUpdateFormContainer from "../../containers/group/GroupUpdateForm";
import DeleteGroupMutation from "../../mutations/group/DeleteGroupMutation";
import GroupDetailsQuery from "../../queries/group/GroupDetailsQuery";

class GroupDetails extends React.Component {
    ID_ENTITY_KEY = "groupId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteGroupMutation(idEntity, () => this.props.history.push(`/community/groups`));
    };

    render() {
        const { t } = this.props;
        return (
            <QueryRenderer
                environment={environment}
                query={GroupDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    
                    if (error) {
                        return <div>{t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details group-details">
                                <GroupUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    group={props.getGroupById}
                                    history={this.props.history}
                                    refetch={retry}
                                />
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default withTranslation()(GroupDetails);
