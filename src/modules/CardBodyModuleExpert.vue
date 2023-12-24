<template>
    <div class="min-w-fit max-w-6xl grow gap-x-2 bg-white rounded-md mb-4 items-center flex">
        
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'name',
        'info',
        'date',
        'outdated',
        'progress'
    ],
    setup(props) {
        return {
            // 
        }
    }
})
</script>