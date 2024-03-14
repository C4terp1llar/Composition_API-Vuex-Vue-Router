<script>
export default {
  setup() {
    const statusText = (statusVal) => {
      if (statusVal === 'active') {
        return 'Активно'
      } else if (statusVal === 'done') {
        return 'Выполнено'
      } else if (statusVal === 'cancelled') {
        return 'Отменено'
      } else {
        return 'Выполняется'
      }
    }
    return {
      statusText
    }
  },
  props: ['status']
}
</script>

<template>
  <p class="status-default"
     :class="status"
  >{{ statusText(status) }}</p>
</template>

<style scoped lang="scss">
@import "@/res";

.status-default {
  padding: 5px;
  border: 2px solid;
  width: fit-content;
  border-radius: $radius;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.active {
  color: $color4;
  border-color: $color4;
}

.done {
  color: $color9;
  border-color: $color9;
}

.cancelled {
  color: $color8;
  border-color: $color8;
}

.pending {
  color: $color2;
  border-color: $color2;
}
</style>