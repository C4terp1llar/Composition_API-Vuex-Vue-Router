<script>
import {ref} from "vue";
import {useStore} from 'vuex';

export default {
  setup(){
    const title = ref('');
    const date = ref('');
    const description = ref('');

    const store = useStore()
    console.log(store.state.tasks);
    const submit = () => {
      console.log(store.state.tasks);

      store.commit('addTask', {
        title: title.value,
        date: date.value,
        description: description.value,
        status: 'active'
      });
    };

    return{
      title, date, description, submit
    }
  }
}
</script>

<template>
  <div class="temp-block">
    <h2>Создать новую задачу</h2>
    <form @submit.prevent>
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
      <label for="date">Дедлайн</label>
      <input type="date" id="date" v-model="date">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>

      <button
          type="submit"
          :disabled="!title || !date || !description"
          @click="submit"
      >Создать</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/res";

form{
  @include flexbox(flex, unset,unset,column);
  *{
    padding: $padding-small;
    border-radius: $radius;
  }
  textarea{
    max-width: 100%;
    min-width: 100%;
    min-height: 50px;
    max-height: 100px;
  }
  button{
    cursor: pointer;
    width: fit-content;
    margin-top: 10px;
  }
  button:disabled{
    cursor: not-allowed;
  }
}
</style>