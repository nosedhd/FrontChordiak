<template>

    <div class="row">
    
    <div class="col-sm-4" >
     <h2 align="center"> Login</h2>
   
     <form @submit.prevent="LoginData">
     
   
     <div class="form-group" align="left">
       <label>Email</label>
       <input type="email" v-model="student.email" class="form-control"  placeholder="Email">
     </div>


    <div class="form-group" align="left">
    <label>Password</label>
    <input type="password" v-model="student.password" class="form-control"  placeholder="Password">
  </div>

     <button type="submit" class="btn btn-primary">Login</button>
     </form>
   </div>
   </div>

</template>
   
<script>
import axios from 'axios';
   
export default {
  name: 'Login',
  data() {
    return {
      result: {},
      student: {
        email: '',
        password: ''
      }
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    LoginData() {
      axios.post("http://127.0.0.1:8000/api/login", this.student)
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.status === true) {
              alert("Login Successfully");
              // Redirigir a una ruta llamada 'HelloWorld'
              // Reemplaza 'this.$router.push({ name: 'HelloWorld' })' con la lógica de redirección adecuada
            } else {
              alert("Login failed");
            }
          } catch (err) {
            alert("Error, please try again");
          }
        })
        .catch(error => {
          console.error(error);
          alert("Error, please try again");
        });
    }
  }
};
  </script>

<style scoped>
.form-group {
  margin-bottom: 10px;
}

.form-control {
  width: 600%; /* Ajusta el ancho del input al 600% del contenedor */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>