<template>
    <div class="page">
        <div class="header flex justify-center">
            <div class="max-w-6xl grow">
                <TabMenu
                    :model="menuItems"
                    :activeIndex="selectedTab"
                    @tab-change="tabChange"
                />
            </div>
        </div>
        <div class="content flex justify-center min-h-screen">
            <div class="max-w-6xl grow">
                <div v-if="selectedTab === 0">
                    <div class="button-box flex justify-end mb-3 mt-3">
                        <Button severity="success">
                            Создать карточку
                        </Button>
                    </div>
                    <div class="cards flex-col">
                        <CardModule
                            name="Иван Иванович Иванов"
                            info="Проект вечного двигателя"
                            date="13.14.2025"
                        />
                        <CardModule
                            name="Николай Сергеевич Грин"
                            info="Колесо для лягушек"
                            date="11.02.2023"
                            :outdated="true"
                        />
                    </div>
                </div>
                <div v-if="selectedTab === 1">

                </div>
                <div v-if="selectedTab === 2">

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        let menuItems = [
            {label: 'Карточки'},
            {label: 'На проверке'},
            {label: 'Экспертиза'}
        ];
        let selectedTab = ref(0);
        let tabChange = (e: any) => {
            selectedTab.value = e.index;
        }
        return {
            menuItems,
            selectedTab,
            tabChange
        }
    }
})
</script>

<style lang="scss">
    .content {
        background-color: rgb(255, 236, 200);
    }
</style>