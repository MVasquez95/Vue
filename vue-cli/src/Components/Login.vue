<template>
  <div class="container">
    <div class= "row">
      <div class="col-xs-2 col-sm-4 col-sm-offset-2 col-me-6 col-me-offset-3">
        <h1>Bienvenido!</h1>
        <div class="form-group">
          <label>Usuario</label>
          <input type="text" class="form-control" v-model="user.usuario">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="user.password">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        user: {
          usuario: '',
          password: ''
        }
      };
    },
    methods: {
      submit(){
        this.$http.post('', this.user)
          .then(response => {
            console.log(response);  
          }, error =>{
            console.log(error);
          });
      }
    }
  }
</script>

<style>
</style>