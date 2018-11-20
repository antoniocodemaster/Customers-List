<template>
  <ul>
    <li 
    	v-for="customer in customersList" 
    	v-on:click="selectCustomer(customer)"
    >
    	<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=0&oh=3159408d7aa93eaa5bfb08ae78208d80&oe=5C068B59" alt="">
    	<p class="customersList" >
    		{{`${customer.name.first} ${customer.name.last}`}}
    	</p>
    </li>
  </ul>
</template>

<script>

	import { mapState } from 'vuex'

	export default{
		name:'customersList',
		computed: {
			...mapState(['customersList']),
		},
		methods: {
			selectCustomer(customer){
				this.$store.commit('selectCustomer', customer)
				this.$router.push('/customersinfo')
			}
		},
		created(){
			this.$store.dispatch('actionGetList')
		}
	}

</script>