import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let customers,
	url = 'https://randomuser.me/api/?results=5'

axios
 .get(url)
 .then( response => (customers = response.data.results))

const store = new Vuex.Store({
	state:{
		customers: 'nada'
	},
	actions:{
		darvalor(){
			return state.customers = 'algo';
		}
	}
})

export default store