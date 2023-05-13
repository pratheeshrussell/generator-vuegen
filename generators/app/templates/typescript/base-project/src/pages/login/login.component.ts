import AuthService from "@services/auth/auth.service";
import AppPaths from '@constants/paths.app';
import * as LocalStorageService from '@services/localStorage/index';
import AppLocalStorageKeys from '@constants/localStorageKeys.app';
import Router from '@router/index';

<% if(formPackage === 'veevalidate') { %>
import { Field, Form } from 'vee-validate';
<% } %>
export default {
  components: {
    <% if(formPackage === 'veevalidate') { %>
      Field,
      Form,
    <% } %>
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {
    getUsernameText(){
      <% if(extrapackages.includes('internationalization')) { %>
        return this.$t("username")
      <% } else { %>
        return 'Username';
      <% }%>
    },
    getPasswordText(){
      <% if(extrapackages.includes('internationalization')) { %>
        return this.$t("password")
      <% } else { %>
        return 'Password';
      <% }%>
    }
  },
  mounted () {

  },
  methods: {
    <% if(formPackage === 'formkit') { %>
      submitHandler(formdata: { [key: string]: string }) {
        const authservice = new AuthService();
        authservice.handleLogin({
          username: formdata["username"], password: formdata["password"]
        }).then((resp: any) => {
          LocalStorageService.setItem(AppLocalStorageKeys.UserData, resp);
          // save data to store
          this.$router.push({ name: AppPaths.userDashboard.name });
        }).catch(() => {
          this.$notify({
            text: 'unable to login',
            type: 'error',
          });
        });;
      },
    <% } else if(formPackage === 'veevalidate') { %>
      validateUsername(value:string){
        if(value){
          return true;
        }
        return false;
      },
      validatePassword(value:string){
        if(value){
          return true;
        }
        return false;
      },
      submitHandler(formdata: { [key: string]: string }) {
        const authservice = new AuthService();
        Credentials
        authservice.handleLogin({
          username: formdata["username"], password: formdata["password"]
        }).then((resp: any) => {
          LocalStorageService.setItem(AppLocalStorageKeys.UserData, resp);
          // save data to store
          this.$router.push({ name: AppPaths.userDashboard.name });
        }).catch(() => {
          this.$notify({
            text: 'unable to login',
            type: 'error',
          });
        });;
      },
    <% } else { %>
      submitHandler(event: any){
        const authservice = new AuthService();
        const uname = event.target.elements.username.value;
        const pass = event.target.elements.password.value;
        if (uname !== "" && pass !== "") {
          authservice.handleLogin({
            username: uname, password: pass
          }).then((resp: any) => {
            LocalStorageService.setItem(AppLocalStorageKeys.UserData, resp);
            // save data to store
            Router.push({ name: AppPaths.userDashboard.name });
          }).catch(() => {
            this.$notify({
              text: 'unable to login',
              type: 'error',
            });
          });;
        }
      },
    <% } %>
  }
}


