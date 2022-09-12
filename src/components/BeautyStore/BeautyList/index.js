import React, { Component } from "react";
import { connect } from "react-redux";
import BeautyListItem from "./BeautyListItem/index";
import withBeautySalonService from "../../HOCs/withBeautySalonService";
import { fetchBeauty, beautyAddedToCart } from "../../../actions";
import Spiner from "../Spiner/index";

import "./BeautyList.css";
// import compose from '../../../utils/compose';
import ErrorIndicator from "../ErrorIndicator/index";

const BeautyList = ({ beauty, onAddedToCart }) => {
  return (
    <ul className="beauty-list">
      {beauty.map((beauty) => {
        return (
          <li key={beauty.id}>
            <BeautyListItem
              onAddedToCart={() => onAddedToCart(beauty.id)}
              beauty={beauty}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BeautyListContainer extends Component {
  componentDidMount() {
    this.props.fetchBeauty();
  }

  render() {
    const { beauty, isLoading, isError, onAddedToCart } = this.props;
    if (isError) {
      return <ErrorIndicator />;
    }
    if (isLoading) {
      return (
        <div className="spinner">
          <Spiner />
        </div>
      );
    }
    return <BeautyList onAddedToCart={onAddedToCart} beauty={beauty} />;
  }
}

const mapStateToProps = ({ beauty, isLoading, isError }) => {
  return { beauty, isLoading, isError };
};
const mapDispatchToProps = (dispatch, { beautySalonService }) => {
  return {
    fetchBeauty: fetchBeauty(dispatch, beautySalonService),
    onAddedToCart: (id) => dispatch(beautyAddedToCart(id)),
  };
};

export default withBeautySalonService()(
  connect(mapStateToProps, mapDispatchToProps)(BeautyListContainer)
);
