<script>
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import AppTask from "@/components/AppTask.vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const id = route.params.id;
    const currentData = ref(store.state.tasks[id]);

    let newStatus = ref(null);
    const changeStatus = (status) => {
      store.commit('changeStatus' ,{
        id: id,
        status: status
      });
      router.push('/');
    }

    return {
      currentData,
      newStatus,
      changeStatus
    }
  },
  components: {AppTask}
}
</script>

<template>
  <app-task
      :title="currentData.title"
      :status="currentData.status"
      :date="currentData.date"
      :description="currentData.description"
      :showBtn="false"
      :showDescription="true"
  ></app-task>
  <div class="temp-block">
    <h3>Изменить статус</h3>
    <div>
      <p><strong>Выберите нужный статус:</strong></p>
      <select v-model="newStatus">
        <option disabled name="status" >Выберите статус:</option>
        <option name="status" value="active">Активно</option>
        <option name="status" value="done">Выполнено</option>
        <option name="status" value="cancelled">Отменено</option>
        <option name="status" value="pending">Выполняется</option>
      </select>
    </div>
    <button :disabled="!newStatus || newStatus === currentData.status" @click="changeStatus(newStatus)">Изменить</button>
  </div>
</template>

<style scoped lang="scss">
@import "@/res";

.temp-block{
  @include flexbox(flex, unset, unset, column);
  gap: $padding-small;
  div{
    @include flexbox(flex, unset, center, row);
    gap: $padding-small;
    select{
      padding: 5px;
    }
  }
  button{
    cursor: pointer;
    width: fit-content;
    margin-top: 10px;
    padding: $padding-small;
    border-radius: $radius;
  }
  button:disabled{
    cursor: not-allowed;
  }
}
</style>