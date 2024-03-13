import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [] //инит массива задач (если нет -> создается)
  },
  getters: {

  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // сохранение массива задач в локал сторадж после мутации
    }
  },
  actions: {

  },
  modules: {

  }
})
