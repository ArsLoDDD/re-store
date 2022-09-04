import { legacy_createStore as createStore } from "redux";
import reducer from "../components/BeautyStore/reducers/index";

const store = createStore(reducer);

export default store;
