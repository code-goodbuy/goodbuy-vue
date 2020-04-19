import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor() {
    this.login = this.login.bind( this )
    this.setSession = this.setSession.bind( this )
    this.logout = this.logout.bind( this )
    this.isAuthenticated = this.isAuthenticated.bind( this )
    this.handleAuthentication = this.handleAuthentication.bind( this )
  }

  auth0 = new auth0.WebAuth( {
    domain: 'goodbuy.eu.auth0.com',
    clientID: 'hd22C2jDhlHRPxiE3ZT8hwk79U2IrcO1',
    redirectUri: 'http://localhost:8080/login/',
    audience: 'https://goodbuy-api',
    responseType: 'token id_token',
    scope: 'openid profile'
  } )

  login() {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash(( err, authResult ) => {
      if ( authResult && authResult.accessToken && authResult.idToken ) {
        this.setSession( authResult )
      } else if ( err ) {
        console.log( err )
        alert( `Error: ${ err.error }. Check the console for further details.` )
      } else {
        this.silentAuth()
          .then(() => {
            console.log( 'user logged in through silent auth' )
          })
          .catch(( err ) => {
            console.log( err )
          })
      }
      router.replace('/login/')
    })
  }

  setSession( authResult ) {
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.profile = authResult.idTokenPayload
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    this.authNotifier.emit( 'authChange', { authenticated: true } )
  }

  logout() {
    delete this.accessToken
    delete this.idToken
    delete this.expiresAt
    this.authNotifier.emit( 'authChange', false )
    router.replace( '/login/' )
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt
  }

  getAuthToken() {
    return this.accessToken
  }

  getUserProfile() {
    return this.profile
  }
  silentAuth () {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err)
        this.setSession(authResult)
        resolve()
      })
    })
  }
}
