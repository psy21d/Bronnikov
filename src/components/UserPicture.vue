<template>
    <div class="picturebox bg-teal-600 rounded-full w-16 h-16">
        <img :src="pictureUrl" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'pictureUrl'
    ],
    setup(props) {
        return {
            ...props
        }
    }
})
</script>