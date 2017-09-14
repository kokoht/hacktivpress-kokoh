<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h1 style="color:green;">Hacktivpress App</h1>
      </div>
      <!-- modal singin signout start here -->
      <div class="col-md-3">
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#register">Login | Register</button>
        <div id="register" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h5>Input Your Credential:</h5>
                <register></register>
                <login></login>
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- end here -->
      <div class="col-md-2 panel">
        <div class="panel-heading" v-if="haveLogin">Welcome, {{decoded.username}} </div>
        <div class="panel-heading" v-if="!haveLogin"> you need to login </div>
        <button type="button" class="btn btn-default" v-if="haveLogin" v-on:click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import Register from '@/components/Register'
import Login from '@/components/Login'
export default {
  data () {
    return {
      decoded: '',
      token: ''
    }
  },
  components: {
    Register,
    Login
  },
  methods: {
    decoding () {
      this.token = localStorage.getItem('token')
      this.decoded = jwtDecode(this.token)
    },
    logout () {
      localStorage.removeItem('token')
      this.haveLogin = null
      this.decoded = ''
      this.token = ''
    }
  },
  created () {
    this.decoding()
  },
  computed: {
    haveLogin () {
      return localStorage.getItem('token')
    }
  }
}
</script>
<style lang="css" scoped>
.panel-heading {
  color: blue;
  }
</style>
