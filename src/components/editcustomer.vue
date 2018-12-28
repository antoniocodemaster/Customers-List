<template>
	<div>
		<h2>Edit</h2>
		<form action="">
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
			<input type="text" submit value="Save">
		</form>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
 
	export default {
		name : 'editcustomer',
		computed : {
			...mapState(['selectedCustomer'])
		}
	}
</script>