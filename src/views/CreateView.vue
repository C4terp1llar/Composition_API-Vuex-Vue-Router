<script>
import {ref} from "vue";
import {useStore} from 'vuex';
import {useRouter} from "vue-router";

export default {
  setup(){
    const title = ref('');
    const date = ref('');
    const description = ref('');

    const store = useStore();
    const router = useRouter();
    const submit = () => {
      if (!validDate()) return;
      store.commit('addTask', {
        title: title.value,
        date: date.value,
        description: description.value,
        status: 'active'
      });

      title.value = '';
      date.value = '';
      description.value ='';

      router.push('/');
    };

    /*
    * Валидация даты не очень красивая из-за алерта
    *  не хочется заморачиваться с компонентой для алертов ошибок
    * */
    const validDate = () => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0,10);
      if(date.value < formattedDate){
        alert('Выберите дату позже текущей');
        return false;
      }
      return true
    }

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
      <input type="text" id="title" maxlength="45" v-model="title">
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