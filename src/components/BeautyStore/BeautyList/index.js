import React, { Component } from "react";
import { connect } from "react-redux";
import BeautyListItem from "./BeautyListItem/index";
import withBeautySalonService from "../../HOCs/withBeautySalonService";
import { beautyLoaded } from "../../../actions";
import Spiner from "../Spiner/index";

import "./BeautyList.css";
// import compose from '../../../utils/compose';

class BeautyList extends Component {
  componentDidMount() {
    const { beautySalonService, beautyLoaded } = this.props;
    beautySalonService.getBeauty().then((data) => beautyLoaded(data));
  }

  render() {
    const { beauty, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="spinner">
          <Spiner />
        </div>
      );
    }
    return (
      <ul className="beauty-list">
        {beauty.map((beauty) => {
          return (
            <li key={beauty.id}>
              <BeautyListItem beauty={beauty} />
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = ({ beauty, isLoading }) => {
  return { beauty, isLoading };
};
const mapDispatchToProps = {
  beautyLoaded,
};

export default withBeautySalonService()(
  connect(mapStateToProps, mapDispatchToProps)(BeautyList)
);
