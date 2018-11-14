import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let customers,
	url = 'https://randomuser.me/api/?results=20'

axios
 .get(url)
 .then( response => (customers = response.data.results))

const store = new Vuex.Store({
	state:{
		customersList: []
	},
	mutations:{
		getCustomersList(){
			axios
			 .get(url)
			 .then( response => (this.state.customersList = response.data.results))
		}
	},
	actions:{
		actionGetList(context) {
			context.commit('getCustomersList')
		}
	}
})

export default store