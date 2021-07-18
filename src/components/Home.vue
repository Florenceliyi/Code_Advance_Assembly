<template>
  <el-container direction="vertical">
  <el-container>
    <el-aside width="200px">
      <NavBar/>
    </el-aside>
    <el-main>
        <keep-alive>
          <component :is="getCurrentComponent"></component>
        </keep-alive>
      </el-main>
  </el-container>
</el-container>
 
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import allComponents from  '@/config/componentsTotal'
export default {
  name: "Home",
  components:{
    NavBar,
    ...allComponents
  },
  computed:{
    getCurrentComponent(){
      return  allComponents[this.$store.state.proxy.currentComponent]
    }
  },
  props: {
    
  },
  data() {
    return {
     
    };
  },
  created(){
    console.log('created', this.$store.state.currentComponent)
  },
  methods: {
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100vh;
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
