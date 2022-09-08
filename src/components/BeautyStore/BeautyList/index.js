import React, { Component } from "react";
import { connect } from "react-redux";
import BeautyListItem from "./BeautyListItem/index";
import withBeautySalonService from "../../HOCs/withBeautySalonService";
import { beautyLoaded, beautyRequest, beautyError } from "../../../actions";
import Spiner from "../Spiner/index";

import "./BeautyList.css";
// import compose from '../../../utils/compose';
import ErrorIndicator from '../ErrorIndicator/index';

class BeautyList extends Component {
  componentDidMount() {
    const { beautySalonService, beautyLoaded, beautyError, beautyRequest } =
      this.props;
    beautyRequest();
    beautySalonService
      .getBeauty()
      .then((data) => beautyLoaded(data))
      .catch((err) => beautyError(err));
  }

  render() {
    const { beauty, isLoading, isError } = this.props;
    if (isError){
      return <ErrorIndicator/>
    }
    return (
      <div>
        {isLoading ? (
          <div className="spinner">
            <Spiner />
          </div>
        ) : (
          <ul className="beauty-list">
            {beauty.map((beauty) => {
              return (
                <li key={beauty.id}>
                  <BeautyListItem beauty={beauty} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ beauty, isLoading, isError }) => {
  return { beauty, isLoading, isError };
};
const mapDispatchToProps = {
  beautyLoaded,
  beautyRequest,
  beautyError,
};

export default withBeautySalonService()(
  connect(mapStateToProps, mapDispatchToProps)(BeautyList)
);
