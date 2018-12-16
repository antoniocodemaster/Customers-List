<template>
  <ul>
    <li 
    	v-for="customer in customersList" 
    	v-on:click="selectCustomer(customer)"
    >
    	<img :src="customer.picture.large" >
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