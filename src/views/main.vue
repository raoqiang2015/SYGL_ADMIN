<style lang="less">
    @import "./main.less";
</style>

<template>
    <div class="main" :class="{ 'main-hide-text': shrink }">
        <div class="sidebar-menu-con" :style="{ width: shrink ? "60px" : "200px", overflow: shrink ? 'visible' : 'auto' }">
            <shrinkable-menu

                >
                <div slot="top" class="logo-con">
                    <img v-show="!shrink" src="../images/logo.jpg" key="max-logo" />
                    <img v-show="shrink" src="../images/logo-min.jpg" key="min-logo" />
                </div>
            </shrinkable-menu>
        </div>
        <div>
        </div>
        <div></div>

    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>

</style>