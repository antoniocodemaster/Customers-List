import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



let customers = 'los customers',
	url = 'https://randomuser.me/api/?results=5000'

axios
 .get(url)
 .then( response => (customers = response))

const store = new Vuex.Store({
	state:{
		customers: customers
	},
	mutations:{

	}
})

export default store