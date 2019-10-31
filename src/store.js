import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let customers,
  url = "https://randomuser.me/api/?results=20";

axios.get(url).then(response => (customers = response.data.results));

const store = new Vuex.Store({
  state: {
    customersList: [],
    selectedCustomer: [],
    customerRemoved: false
  },
  mutations: {
    getCustomersList() {
      axios
        .get(url)
        .then(response => (this.state.customersList = response.data.results));
    },
    createCustomer(state, payload) {
      this.state.customersList.push(payload);
      this.state.selectedCustomer = payload;
    },
    selectCustomer(state, payload) {
      this.state.selectedCustomer = payload;
      this.state.customerRemoved = false;
    },
    editCustomer(state, payload) {
      let customersList = this.state.customersList;
      for (let i = 0; i < customersList.length; i++) {
        if (payload.email == customersList[i].email) {
          customersList[i] = payload;
          break;
        }
      }
    },
    removeCustomer(state, payload) {
      let customersList = this.state.customersList;
      let _this = this;
      for (let i = 0; i < customersList.length; i++) {
        if (payload.email == customersList[i].email) {
          customersList.splice(i, 1);
          _this.state.customerRemoved = true;
          break;
        }
      }
    }
  },
  actions: {
    actionGetList(context) {
      context.commit("getCustomersList");
    }
  }
});

export default store;
