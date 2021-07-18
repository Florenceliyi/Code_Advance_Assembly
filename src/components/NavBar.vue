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
              <el-menu-item v-for="item in showList" :key="item.value" :index="item.index" @click="handleClickOnMenuItem">{{ item.value }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import config from '@/config'
console.log('config', config);
export default {
  data() {
    return {
      showList: config.NAVBARMAP
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClickOnMenuItem(component) {
        const {index} = component
        this.$store.commit('SHOW_CONTENT', index)
        console.log('state', this.$store.state.proxy.currentComponent);
    }
  },
};
</script>

<style>
</style>