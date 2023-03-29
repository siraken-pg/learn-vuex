<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '../lib/store';

defineProps<{ msg: string }>();

const refCount = ref(0);
const store = useStore(key);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div class="flex">
      <button type="button" @click="refCount++">
        refCount: {{ refCount }}
      </button>
      <button type="button" @click="store.commit('increment')">
        vuexIncrement: {{ store.state.count }}
      </button>
      <button type="button" @click="store.state.count--">
        vuexDecrement: {{ store.state.count }}
      </button>
      <button type="button" @click="store.commit('setCount', 0)">
        vuexSetCount: {{ store.state.count }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>
