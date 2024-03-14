import { createStore } from 'vuex'
/*

vuex здесь получается как какая-то реактивная прослойка между локал стораджем и компонентами, которые используют данные,
при изменения vuex нужно менять и сторадж

 */
export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [] //инит массива задач (если нет -> создается)
  },
  getters: {
    getAmountTasks(state){
      let tempArr = state.tasks.filter(el => el.status === 'active');
      return tempArr.length;
    }
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // сохранение массива задач в локал сторадж после мутации
    },
    changeStatus(state, payload){
      state.tasks[payload.id].status = payload.status;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {

  },
  modules: {

  }
})
