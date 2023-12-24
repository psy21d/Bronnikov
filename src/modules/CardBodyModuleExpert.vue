<template>
    <div class="min-w-fit max-w-6xl grow gap-x-2 bg-white rounded-md items-center flex flex-col">
        <template v-if="slots">
            <div v-for="sl in Object.keys(slots)">
                <slot :name="sl">
                </slot>
            </div>
        </template>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    setup(props) {
        return {
            slots: null
            // 
        }
    },
    mounted() {
        console.log(this);
        this.slots = this.$slots
    }
})
</script>