class AuthController {
  constructor(Auth, $state, $timeout) {
    this.$timeout = $timeout;
    this.$state = $state;
    this.Auth = Auth;
    this.current = 'signin';
    this.message = 'Don\'t have an account?';
    this.other = 'signup';
    this.credits = {};
    this.showUserError = false;
  }

  send(){
    const action = this.current;
    this[action].call(this, this.credits);
  }

  signin(credits) {
    this.Auth.signin(credits)
    .then(()=> {
      this.$state.go('admin')
    })
    .catch(()=> {
      this.showError();
    })
  }

  signup(credits) {
    this.Auth.signup(credits)
    .then(()=> {
      this.$state.go('admin')
    })
    .catch(e => {
      this.showError(e);
    })
  }

  showError(e){
    this.showUserError = true;
    this.errorMessage = 'Nope';
    this.credits = {};
    this.$timeout(()=> {
      this.showUserError = false;
      this.errorMessage = '';

    }, 3000);
  }

  changeForm() {
    const temp = this.current;
    this.current = this.other;
    this.other = temp;

    if(this.current === 'signup') {
      this.message = 'Already have and account?';
    } else {
      this.message = 'Don\'t have an account?';
    }
  }
}

AuthController.$inject = ['Auth', '$state', '$timeout'];

export {AuthController};
