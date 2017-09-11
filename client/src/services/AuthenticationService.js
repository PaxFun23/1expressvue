import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// Calling the method!
//
//  AuthenticationService.register({
//      email:'123@gmail.com',
//      password:'123'
//  });
