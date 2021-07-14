<template>
  <div class="navBar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>ES6语法</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="proxy" @click="handleClickOnMenuItem">proxy</el-menu-item>
              <el-menu-item index="reflect" @click="handleClickOnMenuItem">reflect</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClickOnMenuItem(component) {
        console.log('component', component);
        const {index} = component
        this.$store.commit('SHOW_CONTENT', index)
        console.log('state', this.$store.state.proxy.currentComponent);
    }
  },
};
</script>

<style>
</style>