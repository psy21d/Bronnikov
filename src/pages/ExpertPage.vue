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
        <div class="content flex justify-center min-w-fit min-h-screen">
            <div class="max-w-6xl grow mx-8">
                <div v-if="selectedTab === 0">
                    <div class="button-box flex justify-end mb-3 mt-3">
                        <Button severity="success">
                            Создать карточку
                        </Button>
                    </div>
                    <div class="cards flex-col">
                        <Accordion :activeIndex="0" class="expert-page-accordion">
                            <AccordionTab>
                                <template #header>
                                    <CardModuleExpert
                                        name="Иван Иванович Иванов"
                                        info="Проект вечного двигателя"
                                        date="13.14.2025"
                                        progress="70%"
                                    />
                                </template>
                                <CardBodyModuleExpert>
                                    <!-- название слотов может быть любое, важен лишь порядок следования -->
                                    <!-- в компоненте они будут следовать один за другим -->
                                    <template #slot1>
                                        1
                                    </template>
                                    <template #slot2>
                                        2
                                    </template>
                                    <template #slot3>
                                        3
                                    </template>
                                    <template #slot4>
                                        4
                                    </template>
                                </CardBodyModuleExpert>
                            </AccordionTab>
                            <AccordionTab>
                                <template #header>
                                    <CardModuleExpert
                                        name="Николай Сергеевич Грин"
                                        info="Колесо для лягушек"
                                        date="11.02.2023"
                                        progress="60%"
                                        :outdated="true"
                                    />
                                </template>
                                <p class="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab>
                                <template #header>
                                    <CardModuleExpert
                                        name="Федор Матвеев"
                                        info="Проект сенсорного манипулятора"
                                        progress="40%"
                                        date="11.06.2025"
                                    />
                                </template>
                                <p class="m-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </AccordionTab>
                        </Accordion>
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

<style scoped lang="scss">
    .content {
        background-color: rgb(255, 236, 200);
    }
    .p-accordion-header {

    }
    .expert-page-accordion::v-deep {
        & [data-pc-section="headeraction"] {
            background-color: white;
            flex-direction: row-reverse;
            margin: 0;
            padding: 0;
            padding-right: 8px;
            outline: none;
            &:focus {
                box-shadow: none;
            }
        }
        & [data-pc-section="content"] {
            background-color: white;
            margin: 0;
            padding: 0;
        }
    }
</style>