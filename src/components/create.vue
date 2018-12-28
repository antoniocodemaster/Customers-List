<template>
	<div>
		<h2>Add New</h2>
		<form action="" v-on:submit.preventDefault="createCustomer()">
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
			<div class="row">
				<div class="col-md-12">
					<input type="submit" class="btn btn-sm btn-primary" value="Create">
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
						first : '',
						last : ''
					},
					dob : {
						age : ''
					},
					location : {
						street : '',
						city : '',
						postcode : ''
					},
					picture : {
						large : 'src/assets/profile-sample.png',
						medium : 'src/assets/profile-sample.png',
						thumbnail : 'src/assets/profile-sample.png'
					},	
					email : '',
					phone : '',
					gender : ''
				}
			}
		},
		methods: {
			createCustomer(){
				const newCustomer = this.newCustomer;
				if (newCustomer.name.first != '') {
					this.$store.commit('createCustomer', newCustomer)
					this.$router.push('/customersinfo')
				} else {
					alert(`Please check the mandatory fields`)
				}
			}
		}
	}
</script>