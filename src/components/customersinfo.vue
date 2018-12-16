<template>
	<div>
		<img :src="selectedCustomer.picture.large" alt="">
		<p><b>Name: </b> {{ selectedCustomer.name.first }}</p>
		<p><b>Phone Number: </b> {{ selectedCustomer.phone }}</p>
		<p><b>Email: </b> {{ selectedCustomer.email }}</p>
		<p><b>Address: </b> {{ selectedCustomer.location.street }}</p>
		<p><b>Birthday: </b> {{ selectedCustomer.dob.date }} </p>
		<p><b>Age: </b> {{ selectedCustomer.dob.age }} </p>
		<router-link class="btn btn-primary btn-sm" to="editcustomer">Edit</router-link>
		<button class="btn btn-danger btn-sm">Remove</button>
	</div>
</template>
<script>

	import { mapState } from 'vuex'

	export default{
		name: 'customersinfo',
		computed: {
			...mapState(['selectedCustomer'])
		},
		methods :{

		}
	}
	
</script>