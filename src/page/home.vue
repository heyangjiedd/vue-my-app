<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px">
      <div>
        <img src="../assets/logo.png" width="100" height="100">
      </div>
      <el-menu
        :router="ahh"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" route="/first">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2" route="/second">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" route="/three">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" route="/three">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px" height="40px">
        <el-dropdown trigger="click" class="">
      <span class="el-dropdown-link">
        <i class="el-icon-info el-icon--right"></i> 王小虎 <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-info el-icon--right"></i> 个人信息</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-edit el-icon--right"></i> 信息修改</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-back el-icon--right"></i> 安全退出</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-setting el-icon--right"></i> 设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <transition name="fade"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 40px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }

  .el-menu {
    border-right: none;
  }

  .el-main {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 200px;
    right: 0;
    padding: 10px;
  }

  .el-aside {
    color: #545c64;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgb(84, 92, 100)
  }
</style>

<script>
  export default {
    data() {
      return {
        ahh:true
      };
    }
  };
</script>
