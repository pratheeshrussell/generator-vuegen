import { defineStore } from 'pinia';

// For details on usage check
// https://pinia.vuejs.org/core-concepts/
export const useUserStore = defineStore('user', {
    // state is like data property
    state: () => ({ name: 'John Doe', gender:'m' }),
    getters: {
      // Consider this as a computed property
      // dont modify state
      getTitle: (state) => {
        if(state.gender=='m'){
            return `Mr. ${state.name}`
        }
        return `Ms. ${state.name}`
      },
    },
    actions: {
      // actions are similar to methods
      setUser(userDetail) {
        this.name = userDetail.name;
        this.gender = userDetail.gender;
      },
    },
  })