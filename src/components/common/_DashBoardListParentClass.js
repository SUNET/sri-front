// Common imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

class _DashBoardListParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.MAIN_PROP_NAME = '';
    this.SINGLE_ELEMENT_NAME = '';
    this.HEADER_DATA = {
      title: '',
      sortKey: {
        defaultUp: '',
        down: '',
      },
    };
    this.FOOTER_DATA = { label: '', link: '' };
    this.DETAILS_LINK = '';
  }

  shouldComponentUpdate(nextProps) {
    const haveNewElements = nextProps[this.MAIN_PROP_NAME] !== null;
    return haveNewElements;
  }

  onFooterButtonClick() {
    const { history } = this.props;
    history.push(this.FOOTER_DATA.link);
  }

  handleClickInRow(event, data) {
    const { history } = this.props;
    history.push(this.DETAILS_LINK.replace('__dataId__', data.id));
  }

  renderHeader() {
    const { t } = this.props;
    return (
      <header>
        <h2>{t(this.HEADER_DATA.title)}</h2>
        {this.HEADER_DATA.sortKey && (
          <div className="pretty custom p-icon p-toggle p-plain icon-right order-by">
            <input
              type="checkbox"
              name="elements-orderby"
              checked={this.props.orderBy.includes('_ASC')}
              onChange={(e) => {
                this.props.changeOrderBy(e, this.MAIN_PROP_NAME);
              }}
            />
            <div className="state p-on">
              <label>
                <span>{t(`${this.HEADER_DATA.sortKey.defaultUp}`)}</span> <FontAwesomeIcon icon={faAngleUp} />
              </label>
            </div>
            <div className="state p-off">
              <label>
                <span>{t(`${this.HEADER_DATA.sortKey.down}`)}</span> <FontAwesomeIcon icon={faAngleDown} />
              </label>
            </div>
          </div>
        )}
      </header>
    );
  }

  renderList() {
    const dataEntity = this.props[this.MAIN_PROP_NAME];
    return (
      <div>
        {dataEntity &&
          dataEntity[this.MAIN_PROP_NAME].edges &&
          dataEntity[this.MAIN_PROP_NAME].edges.map(({ node }) => {
            const props = {
              [this.SINGLE_ELEMENT_NAME]: node,
              key: node.__id,
              onClick: (event, data) => this.handleClickInRow(event, data),
            };
            return <this.RowComponent {...props} />;
          })}
      </div>
    );
  }

  renderFooter() {
    const { t } = this.props;
    return (
      <div>
        <button type="button" onClick={() => this.onFooterButtonClick()} className="btn outline dash-board-footer-button">
          <span>{t(this.FOOTER_DATA.label)}</span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="dashboard-list">
        {this.renderHeader()}
        {this.renderList()}
        {this.FOOTER_DATA && this.renderFooter()}
      </div>
    );
  }
}

export default _DashBoardListParentClass;
