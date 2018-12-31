<template>
	<div class="editcustomer" v-if="selectedCustomer.name" >
		<h2>Edit Customer</h2>
		<img :src="selectedCustomer.picture.large" alt="">
		<form action="" v-on:submit.preventDefault="editCustomer()">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">First Name</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.name.first"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Last Name</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.name.last"
						>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Phone</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.phone"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Email</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.email"
						>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Age</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.dob.age"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Gender</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.gender"
						>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Address Street</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.location.street"
						>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label for="">City</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.location.city"
						>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label for="">Zip Code</label>
						<input 
							type="text" 
							class="form-control"
							v-model="selectedCustomer.location.postcode"
						>
					</div>
				</div>
			</div>
			<input class="btn btn-primary btn-sm" type="submit" value="Save">
		</form>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
 
	export default {
		name : 'editcustomer',
		computed : {
			...mapState(['selectedCustomer'])
		},
		methods : {
			editCustomer(){
				this.$store.commit('editCustomer',this.selectedCustomer)
				this.$router.push('/customersinfo')
			}
		}
	}
</script>

<style lang="scss">
	@import "src/scss/colors.scss";
	.editcustomer{
		img{
			max-width: 130px;
		    max-height: 130px;
		    border-radius: 50%;
		}
	}
</style>