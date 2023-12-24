<template>
    <div class="name-and-info-box flex flex-col grow items-start justify-items-start">
        <div v-if="header" class="name text-left text-indigo-600 m-4 ml-8 grow">{{ header }}</div>
        <div v-if="info" :class="{'mt-0': !!header}" class="info text-left m-4 ml-8 grow">{{ info }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'header',
        'info'
    ],
    setup(props) {
        return {
        }
    }
})
</script>