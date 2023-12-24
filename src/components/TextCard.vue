<template>
    <div class="name-and-info-box flex flex-col grow items-start justify-items-start">
        <div class="name text-left text-indigo-600">{{ header }}</div>
        <div class="info text-left">{{ info }}</div>
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