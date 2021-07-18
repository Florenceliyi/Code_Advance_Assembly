<template>
  <div class="generator">
      <div class="baseSyntax" ref="baseSyntax">
          <pre>
              <code>function* helloWorldGenerator() {
            yield 'hello';
            yield 'world';
            return 'ending';
        }

        var hw = helloWorldGenerator()</code>
          </pre>
        
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        
    }
}
</script>

<style>

</style>