<template>
  <el-container>
    <el-header>
      <el-menu :router="ahh" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" route="/first/four">处理中心</el-menu-item>
        <el-menu-item index="2" route="/first/five">研发工作</el-menu-item>
        <el-submenu index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1" route="/first/five">选项1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>
<style scoped lang="less">
  .el-header {
    padding: 0;
  }
</style>
<script>
  export default {
    data() {
      return {
        ahh: true
      };
    },
  }
</script>
