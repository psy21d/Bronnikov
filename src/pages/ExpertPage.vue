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
                            <!-- Здесь можно сделать v-for и расставить данные в слоты, а сами слоты тоже итерировать -->
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
                                        <TextCard 
                                            :header="'Описание проекта'"
                                            :info="`В основе вечного двигателя вода в замкнутом контуре, 
                                            газ, атмосферное давление снаружи и окружающее тепло, 
                                            а также разница давлений в самом двигателе.`"
                                        />
                                    </template>
                                    <template #slot2>
                                        <TextCard :info="'Скачать презентацию прооекта'" />
                                    </template>
                                    <template #slot3>
                                        <TabMenu
                                            class="asks-tab-menu max-w-6xl"
                                            :model="projectMenuItems[0]"
                                            :activeIndex="projectMenuItemsActiveTabs[0]"
                                            @tab-change="(e) => projectMenuItemsTabChange(e, 0)"
                                        />
                                        <!-- 0 здесь меняется на переменную цикла, проойтись по данным и собрать, создать все табы и вкладки -->
                                        <Accordion :activeIndex="0" class="expert-page-accordion" v-if="projectMenuItemsActiveTabs[0] === 0">
                                            <AccordionTab>
                                                <template #header>
                                                    <TextCard 
                                                            :header="'Вопрос первый'"
                                                    />
                                                </template>
                                                <!-- заполнить данными можно автоматизированно по запросу с сервера-->
                                                <TextCard 
                                                    :info="`Откуда берётся энергия?`"
                                                />
                                            </AccordionTab>
                                            <AccordionTab>
                                                <template #header>
                                                    <TextCard 
                                                            :header="'Вопрос второй'"
                                                    />
                                                </template>                                               
                                                <TextCard 
                                                    :info="`Как рассчитать количество энергии в секунду?`"
                                                />
                                            </AccordionTab>
                                            <AccordionTab>
                                                <template #header>
                                                    <TextCard 
                                                        :header="'Вопрос третий'"
                                                    />
                                                </template>
                                                <TextCard 
                                                    :info="`Размер установки?`"
                                                />
                                            </AccordionTab>        
                                            <AccordionTab>
                                                <template #header>
                                                    <TextCard 
                                                        :header="'Вопрос четвёртый'"
                                                    />
                                                </template>
                                                <TextCard 
                                                    :info="`Безоопасно ли это?`"
                                                />
                                            </AccordionTab>
                                            <AccordionTab :disabled="true">
                                                <template #header>
                                                    <TextCard 
                                                        :header="'Всего 4 вопроса'"
                                                    />
                                                </template>
                                            </AccordionTab>
                                        </Accordion>
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
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    setup() {
        let menuItems = [
            {label: 'Карточки'},
            {label: 'На проверке'},
            {label: 'Экспертиза'}
        ];
        let selectedTab = ref(0);
        let projectMenuItemsActiveTabs = ref([
            0,
            0,
            0
        ])

        // Заполнить с сервера
        // Данные реактивны, можно делать пагинацию и подгрузку
        let projectMenuItems = ref([
            [
                {label: 'Этап 1'},
                {label: 'Этап 2'},
                {label: 'Этап 3'},
                {label: 'Этап 4'},
                {label: 'Этап 5'},
                {label: 'Этап 6'},
                {label: 'Этап 7'},
                {label: 'Этап 8'},
                {label: 'Новый этап 9'},
                {label: 'Этап 10'},
                {label: 'Этап разработки'},
                {label: 'Этап планирования'},
                {label: 'Этап проектирования'},
                {label: 'Этап сдачи'},
                {label: 'Этап защиты проекта'}
            ],
            [],
            []
        ])
        
        let tabChange = (e: any) => {
            selectedTab.value = e.index;
        }
        let projectMenuItemsTabChange = (e:any, projectNumber: Number) => {
            console.log(e.index);
            console.log(projectNumber);
            projectMenuItemsActiveTabs.value[projectNumber] = parseInt(e.index);
        }
        return {
            menuItems,
            selectedTab,
            tabChange,
            projectMenuItemsActiveTabs,
            projectMenuItems,
            projectMenuItemsTabChange
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
    [data-pc-name="tabmenu"]::v-deep {
        & [data-pc-section="label"] {
            text-wrap: nowrap;
        }
    }
    .asks-tab-menu::v-deep {
        & [data-pc-section="headeraction"] {
            border-radius: 0;
            border:none;
            border-bottom: 1px solid;
        }
        & [data-pc-name="accordiontab"] {
            margin: 0;
        }
    }
</style>