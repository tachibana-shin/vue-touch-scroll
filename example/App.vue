<template>
   <div id="app">
      <div>
         <ul v-touch-scroll:vertical="{ style: { background: 'red' } }" >
            <li v-for="i in 100"> {{ i }} </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss">
   @import "./style.css";

   #app div {
      height: 200px;
      overflow: hidden;
      border: 1px solid rbga(0, 0, 0, .1);

      ul {
         transform: translate3d(0, 0, 0);
      }

   }
</style>
<script>
   export default {

   }
</script>