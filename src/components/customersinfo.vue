<template>
	<div class="customers-info" >
		<div v-if="selectedCustomer.name && customerRemoved != true">
			<img :src="selectedCustomer.picture.large" alt="">
			<p class="name" ><b>Name: </b> {{ selectedCustomer.name.first }}</p>
			<p><b>Phone Number: </b> {{ selectedCustomer.phone }}</p>
			<p><b>Email: </b> {{ selectedCustomer.email }}</p>
			<p><b>Address: </b> {{ selectedCustomer.location.street }}</p>
			<p><b>Birthday: </b> {{ selectedCustomer.dob.date }} </p>
			<p><b>Age: </b> {{ selectedCustomer.dob.age }} </p>
			<router-link class="btn btn-primary btn-sm" to="editcustomer">Edit</router-link>
			<button v-on:click="removeCustomer()" class="btn btn-danger btn-sm">Remove</button>
		</div>
		<div v-else>
			<p>No Customer Has Been Selected</p>
		</div>
	</div>
</template>
<script>

	import { mapState } from 'vuex'

	export default{
		name: 'customersinfo',
		computed: {
			...mapState(['selectedCustomer', 'customerRemoved'])
		},
		methods : {
			removeCustomer(){
				if (confirm(`Do you want to remove?`)) {
					this.$store.commit('removeCustomer', this.selectedCustomer)
				}
			}
		}
	}
	
</script>

<style lang="scss">
	@import "src/scss/colors.scss";
	.customers-info{
		.name{
			text-transform: capitalize;
		}
		img{
			max-width: 130px;
		    max-height: 130px;
		    border-radius: 50%;
		    border: 1px solid $secondary-color;
		}
	}
</style>