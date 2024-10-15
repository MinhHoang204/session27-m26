import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    employees: []
  },
  mutations: {
    setEmployees(state, employees) {
      state.employees = employees;
    },
    addEmployee(state, employee) {
      state.employees.push(employee);
    }
  },
  actions: {
    fetchEmployees({ commit }) {
      axios.get('http://localhost:3000/employees').then(response => {
        commit('setEmployees', response.data);
      });
    },
    addEmployee({ commit }, employee) {
      axios.post('http://localhost:3000/employees', employee).then(() => {
        commit('addEmployee', employee);
      });
    }
  },
  getters: {
    getAllEmployees(state) {
      return state.employees;
    }
  }
});
