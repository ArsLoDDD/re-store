import React from "react";
import { BeautySalonServiceConsumer } from "../BeautyStore/BeautySalonServiceContext";

const withBeautySalonService = () => (Wrapped) => {
  return (props) => {
    return (
      <BeautySalonServiceConsumer>
        {(beautySalonService) => {
          return <Wrapped {...props} beautySalonService={beautySalonService} />;
        }}
      </BeautySalonServiceConsumer>
    );
  };
};

export default withBeautySalonService;
