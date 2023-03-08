<template>
    <div>
        <!-- 顶部导航 -->
        <Nav />
        <router-view/>
    </div>
</template>

<script>
import Nav from '@/components/index/Nav'
export default {
    data(){
        return {

        }
    },
    components: {
        Nav,
    } 
}
</script>

<style>

</style>