<template lang="html">
  <div class="col-md-6">
    <form class="form-vertical">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="your username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="text" v-model="password" placeholder="your password">
      </div>
      <button type="submit" @click="signUp" class="btn btn-primary" name="button">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const self = this
      axios.post('http://localhost:3000/user/signup', {
        username: self.username,
        password: self.password
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
