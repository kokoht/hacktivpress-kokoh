<template lang="html">
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="your username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="text" v-model="password" placeholder="your password">
      </div>
      <button type="button" class="btn btn-info" @click="masuk" data-dismiss="modal">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      token: ''
    }
  },
  methods: {
    masuk: function () {
      var self = this
      axios.post('http://localhost:3000/user/signin', {
        username: self.username,
        password: self.password
      })
      .then(response => {
        console.log('token', response.data.token)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        localStorage.setItem('username', response.data.username)
      })
    }
  }
}
</script>

<style lang="css">
</style>
