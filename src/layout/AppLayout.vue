<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
</script>
<template>
    <el-container>
      <el-aside width="200px">
          <AppMenu></AppMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
.el-header, .el-footer{
  background-color: #b3c0d1;
  color: #333;
}
.el-aside {
    background-color: #304156;
    color: #333;
}
.el-main{
    background-color: #E9EEF3;
    color: #333;
}
.el-container {
    height: 100vh;
}

</style>
