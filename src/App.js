import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/BeautyStore/ErrorBoundry";
import BeautySalonService from "./services/beautySalonService";
import { BeautySalonServiceProvider } from "./components/BeautyStore/BeautySalonServiceContext";
import store from "./utils/store";
import BeautyStore from "./components/BeautyStore";
const beautySalonService = new BeautySalonService();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundry>
          <BeautySalonServiceProvider value={beautySalonService}>
            <Router>
              <BeautyStore />
            </Router>
          </BeautySalonServiceProvider>
        </ErrorBoundry>
      </Provider>
    );
  }
}

export default App;
