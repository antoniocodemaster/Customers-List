<template>
	<div>
		<h2>Add New</h2>
		<form action="">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">First Name</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.name.first"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Last Name</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.name.last"
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
							v-model="newCustomer.phone"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Email</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.email"
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
							v-model="newCustomer.dob.age"
						>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Gender</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.gender"
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
							v-model="newCustomer.location.street"
						>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label for="">City</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.location.city"
						>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label for="">Zip Code</label>
						<input 
							type="text" 
							class="form-control"
							v-model="newCustomer.location.postcode"
						>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
 
	export default {
		name : 'create',
		data(){
			return {
				newCustomer : {
					name : {
						first : 'Carlos',
						last : 'Carlos'
					},
					dob : {
						age : 'age'
					},
					location : {
						street : 'street',
						city : 'city',
						postcode : 'post code'
					},	
					email : 'email',
					phone : 'phone',
					gender : 'gender'
				}
			}
		}
	}
</script>