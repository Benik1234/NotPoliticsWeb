<template>
    <div class="container" ref="container" @mousemove="updateCursorPosition">
      <div class="ball" :style="{ top: cursorPosition.y + 'px', left: cursorPosition.x+ 'px' }" style="background: white;" ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cursorPosition: { x: 0, y: 0 },
        ballColor: '#000'
      };
    },
    mounted() {
      this.updateBackground();
      window.addEventListener('resize', this.updateBackground);
    },
    destroyed() {
      window.removeEventListener('resize', this.updateBackground);
    },
    methods: {
      updateCursorPosition(event) {
        this.cursorPosition.x = event.clientX -10 ;
        this.cursorPosition.y = event.clientY -100;
      },
      updateBackground() {
        const container = this.$refs.container;
        const computedStyles = getComputedStyle(container);
        this.ballColor = computedStyles.backgroundColor;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  
  .ball {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    pointer-events: none;
  }
  </style>