<template>
    <div class="card-body-module-expert min-w-fit max-w-6xl grow gap-x-2 bg-white rounded-md items-start flex flex-col">
        <template v-if="slots">
            <div v-for="sl in Object.keys(slots)" class="border-b border-solid border-[#e5e7eb]">
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