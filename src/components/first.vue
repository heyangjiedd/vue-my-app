<template>
  <div>
    <el-menu :router="ahh" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" route="/first/four">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" route="/first/five">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-main>
      <transition name="fade"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        ahh:true
      };
    },
  }
</script>
