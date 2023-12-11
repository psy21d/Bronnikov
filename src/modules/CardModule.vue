<template>
    <div class="min-w-fit max-w-6xl grow bg-white rounded-md mb-4 h-24 items-center flex">
        <UserPicture class="mx-8 grow-0"/>
        <div class="name-and-info-box flex flex-col grow items-start justify-items-start w-52">
            <div class="name text-indigo-600">{{ name }}</div>
            <div class="info">{{ info }}</div>
        </div>
        <div class="card-clock-box grow flex items-center justify-items-center">
            <img src="/icons/clock.gif" class="w-12 h-12 mx-4">
            <div class="card-date" :class="{'text-amber-700': outdated}">
                {{ date }}
            </div>
        </div>
        <div class="card-button-box grow">
            <Button class="card-button">Отправить</Button>
        </div>
        <div class="card-settings-and-delete-box grow-0 flex items-center justify-items-center justify-self-end mx-4">
            <img src="/icons/gear.gif" class="w-8 h-8 mx-2">
            <img src="/icons/bucket.png" class="w-8 h-8 mx-2">
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'name',
        'info',
        'date',
        'outdated'
    ],
    setup(props) {
        return {
            // 
        }
    }
})
</script>