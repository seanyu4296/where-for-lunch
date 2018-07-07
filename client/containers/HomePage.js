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

const HomePage = ({ actions, condition, place }) => {
  const fetchingCondition = condition.fetching ? 'Getting Location...' : null;
  const fetchingPlace = place.fetching ? 'Getting a Place...' : null;
  const hasError =
    condition.error || place.error
      ? 'Encountered an error. Please try again.'
      : null;
  return (
    <div className="homePageWrapper">
      <div>
        {fetchingCondition ||
          fetchingPlace ||
          hasError || <Place place={place} />}
      </div>
      <div className="searchWrapper">
        <Condition condition={condition} action={actions.setRadius} />
        <Button
          onClick={actions.fetchPlaceRequest}
          theme="homepageClick"
          disabled={!hasCompleteConditions(condition)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ condition, place }) => ({
  condition,
  place,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchPlaceRequest: placeActions.fetchPlaceRequest,
      setRadius: conditionActions.setRadius,
    },
    dispatch,
  ),
});

HomePage.propTypes = {
  place: PropTypes.object,
  condition: PropTypes.object,
  actions: PropTypes.shape({
    fetchPlaces: PropTypes.func,
    setRadius: PropTypes.func,
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
