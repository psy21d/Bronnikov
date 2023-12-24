<template>
    <div @click.stop="" class="min-w-fit max-w-6xl grow gap-x-2 bg-white rounded-md h-24 items-center flex cursor-default">
        <div class ="user-picture w-28 grow">
            <UserPicture class="mx-8 grow-0"/>
        </div>
        <div class="name-and-info-box flex flex-col grow items-start justify-items-start w-52">
            <div class="name text-left w-52 text-indigo-600">{{ name }}</div>
            <div class="info text-left">{{ info }}</div>
        </div>
        <div class="card-clock-box grow w-44 flex items-center justify-items-center">
            <div class="clock w-44">
                <img src="/icons/clock.gif" class="w-12 h-12 mx-4">
            </div>
            <div class="card-date" :class="{'text-amber-700': outdated}">
                {{ date }}
            </div>
        </div>
        <div class="card-button-box grow w-16 mx-4">
            {{ progress }}
        </div>
        <Dropdown>

        </Dropdown>
        <div class="card-button-box grow">
            <Button class="card-button">Отправить</Button>
        </div>
        <div class="card-settings-and-delete-box grow-0 flex items-center justify-items-center justify-self-end mx-4">
            <div class="w-12"><img src="/icons/gear.gif" class="w-8 h-8 mx-2"></div>
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