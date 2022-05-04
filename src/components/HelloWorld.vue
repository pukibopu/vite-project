<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'
const count = ref(0)
export default defineComponent({
  name: 'helloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }

  },
  setup (props) {
    return { count }
  }
})
</script> -->
<script lang="ts" setup>
import { ref, defineProps } from 'vue'

defineProps({
  msg: {
    type: String,
    default: ''
  }
})
const count = ref(0)
const doAdd = () => {
  count.value++
}
</script>
<template>
   <h1>{{ msg }}</h1>

  <button
    type="button"
    @click="doAdd"
  >
    count is: {{ count }}
  </button>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
