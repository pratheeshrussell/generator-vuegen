import * as LocalStorageService from '@services/localStorage/index';
import AppLocalStorageKeys from '@constants/localStorageKeys.app';
import AppPaths from '@constants/paths.app';
import Router from '@router/index';
import AuthService from '@services/auth/auth.service';

export default {
  components: {},
  props: [],
  data() {
    return {
      loggedInUser: null,
    };
  },
  computed: {
    userName() {
      return this.loggedInUser?.firstName || '';
    },
  },
  created() {
    const userData = LocalStorageService.getItem(AppLocalStorageKeys.UserData);
    if (userData) {
      this.loggedInUser = userData;
    } else {
      Router.push({ name: AppPaths.login.name });
    }
  },
  methods: {
    logout() {
      const authservice = new AuthService();
      authservice.handleLogout();
    },
  },
};
