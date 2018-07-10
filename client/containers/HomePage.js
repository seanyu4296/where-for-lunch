import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import * as placeActions from 'actions/placeActions';
import * as conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import { hasCompleteConditions } from '../reducers/conditionReducer';

class HomePage extends React.Component {
  onSubmit = () => {
    this.props.actions.fetchPlaceRequest(this.props.condition);
  };
  render() {
    const { condition, place } = this.props;
    const fetchingConditionMessage = condition.fetching
      ? 'Getting your Location...'
      : null;
    const fetchingPlaceMessage = place.fetching ? 'Getting a Place...' : null;
    const errorMessage =
      condition.error || place.error
        ? 'Encountered an error. Please try again.'
        : null;
    return (
      <div className="homePageWrapper">
        <div>
          {fetchingConditionMessage ||
            fetchingPlaceMessage ||
            errorMessage || <Place place={place} />}
        </div>
        <div className="searchWrapper">
          <Condition
            condition={condition}
            action={this.props.actions.setCondition}
          />
          <Button
            onClick={this.onSubmit}
            theme="homepageClick"
            disabled={!hasCompleteConditions(condition)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ condition, place }) => ({
  condition,
  place,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setCondition: conditionActions.setProperty,
      fetchPlaceRequest: placeActions.fetchPlaceRequest,
    },
    dispatch,
  ),
});

HomePage.propTypes = {
  place: PropTypes.object,
  condition: PropTypes.object,
  actions: PropTypes.shape({
    fetchPlaceRequest: PropTypes.func,
    setCondition: PropTypes.func,
  }).isRequired,
};

HomePage.defaultProps = {
  place: {},
  condition: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
