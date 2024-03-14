<script>
import {mapGetters, useStore} from 'vuex';
import {ref} from "vue";

import AppTask from "@/components/AppTask.vue";

export default {
  setup() {
    const store = useStore()
    const data = ref(store.state.tasks);

    return {
      data,
      ...mapGetters(['getAmountTasks'])
    }
  },
  components: {AppTask}
}
</script>

<template>
  <div v-if="data.length === 0">
    <h2>Активных задач нет</h2>
  </div>
  <div class="tasks-list" v-else>
    <h2>Активных задач: {{ getAmountTasks() }}</h2>
    <div
        v-for="(item, id) in data"
        :key="id"
    >
      <app-task
          :id="id"
          :title="item.title"
          :status="item.status"
          :date="item.date"
          :description="item.description"
          :showBtn="true"
          :showDescription="false"
      >

      </app-task>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/res";
.tasks-list{
  @include flexbox(flex, unset,unset, column);
  gap: $padding-medium;
}
</style>