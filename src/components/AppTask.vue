<script>
import {useRouter} from "vue-router";
import AppTaskStatusBar from "@/components/AppTaskStatusBar.vue";
export default {
  setup(){
    const router = useRouter();
    const showDetails = (id) => {
      router.push(`/tasks/${id}`)
    }
    return{
      showDetails
    }
  },
  props: ['title', 'status', 'date', 'id', 'description', 'showBtn', 'showDescription'],
  components: {AppTaskStatusBar}
}
</script>

<template>
  <div class="temp-block">
    <div>
      <h2>{{title}}</h2>
      <app-task-status-bar
        :status="status"
      ></app-task-status-bar>
    </div>
    <hr>
    <p><strong>Дедлайн: </strong> {{date}}</p>
    <p v-if="showDescription"><strong>Описание: </strong> {{description}}</p>
    <button v-if="showBtn" @click="showDetails(id)">Подробнее</button>
  </div>
</template>

<style scoped lang="scss">
@import "@/res";
.temp-block{
  @include flexbox(flex, unset, unset, column);
  gap: $padding-small;
  div{
    @include flexbox(flex, space-between, center, row)
  }
  button{
    cursor: pointer;
    width: fit-content;
    margin-top: 10px;
    padding: $padding-small;
    border-radius: $radius;
  }
}
</style>