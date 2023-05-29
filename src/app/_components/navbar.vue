<template>
  <div class="navbar--fixed">
    <nav class="mobile-navbar nav1" >
      <span  class="not-politics">NotPolitics</span>
      <div  @click="animateBox" class="menu btn15" :class="{ open: isOpen, disabled: isDivDisabled }">
        <div class="icon"></div>
      </div>
      <div class="container" ref="box">
        <ul>
          <li ><router-link @click="animateBox" to="/"><a>Home</a></router-link></li>
          <li><router-link @click="animateBox" to="/about"><a>About</a></router-link></li>
          <li><router-link @click="animateBox" to="/"><a>Home</a></router-link></li>
          <li><router-link @click="animateBox" to="/"><a>Home</a></router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
  import gsap from 'gsap';
  export default {
    data() {
      return {
        isDesktop: true,
        isOpen: false,
        isDivDisabled:false
        
      };
    },
    computed: {
      isLightBackground() {
        // Implement your logic to determine if the background is light
        // For example, you can check the background color of the parent container
        return true; // Replace with your logic
      },
      isDarkBackground() {
        // Implement your logic to determine if the background is dark
        // For example, you can check the background color of the parent container
        return false; // Replace with your logic
      }
    },
    mounted() {
      // Check the initial viewport width
      this.isDesktop = window.innerWidth >= 768;
  
      // Add a listener to handle viewport width changes
      window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
      // Remove the listener when the component is destroyed
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen;

        },

        animateBox() {
          this.isDivDisabled = true
          console.log(this.isDivDisabled)
        
        const box = this.$refs.box;
        const calculatedHeight= window.innerHeight - 90
        const tl = gsap.timeline();
        tl.fromTo(
          box,
          { x: window.innerWidth, y: '50%',height:'20px',top:'50vh', width: 0 },
          { x: 0, y: '50%', width: '100%', duration: 0.5 }
        );
        tl.fromTo(
          box,
          {x: 0, y: '50%', width: '100%'},
          { x: 0, y: "90px", width: '100%',height: calculatedHeight + 'px',top: 0,duration: 0.5}
        );
        tl.fromTo('nav ul li a',
        { opacity:0},
        { opacity: 1, pointerEvents: 'all', stagger: .1 }, )
        
        if (this.isOpen ==true){
            tl.reverse(0)
        }
        this.isOpen = !this.isOpen;
        setTimeout(() => {
        this.isDivDisabled = false;
        }, 1500);
        
        
      },

      handleResize() {
        // Update the isDesktop flag based on the viewport width
        this.isDesktop = window.innerWidth >= 768;
      }
    }
  };
  </script>
  
  <style lang="scss">
  $dark: #212121;
$light: #efefef;
$color: #b3e5fc;

.nav1{
    
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.disabled {
  pointer-events: none;
  
}

.nav1 ul{
    list-style-type: none
}
.nav1 ul li a{
	color: #fafafa;
	font-size: 2em;
	text-decoration: none;
	font-weight: 500;
	position: relative;
  opacity:0
	
}
@mixin btn($top, $right) {
  position: fixed;
  width: 60px;
  height: 60px;
  top: $top;
  right: $right;
  transition-duration: 0.5s;
}
@mixin icon($height, $width) {
  transition-duration: 0.5s;
  position: absolute;
  height: $height;
  width: $width;
  top: 30px;
  background-color: $light;
}
@mixin icon-before($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $light;
  content: "";
  top: $top;
}

@mixin icon-after($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $light;
  content: "";
  top: $top;
}
  
.container {
    position: fixed;
    top: 50vh;
    right: 0;
    background-color: #181818;
    width: 0;
    height: 20px ;
  }
.btn15{
    @include btn(15px, 15px);
    .icon {
        @include icon(4px, 30px);
        border-radius: 4px;
        left: 15px;
        
        &:before{
        @include icon-before(4px, 30px, -10px);
        border-radius: 4px;
        }
        
        &:after{
        @include icon-after(4px, 30px, 10px);
        border-radius: 4px;
        }
    }
    &.open {
        .icon {
        transition-duration: 0.5s;
        background: transparent;
        
        &:before{
            transform: rotateZ(45deg) scaleX(1.25) translate(6.5px, 6.5px);
        }

        &:after{
            transform: rotateZ(-45deg) scaleX(1.25) translate(6px, -6px);
        }
        }
    }  

    &:hover {
        background: transparent;
        cursor: pointer;
    }
}
  /* Styles for desktop navbar */
  .desktop-navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:50px
  }
  
  .desktop-navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .desktop-navbar li {
    margin-right: 10px;
  }
  
  .desktop-navbar li:last-child {
    margin-right: 0;
  }
  
  .desktop-navbar a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  

  
  .not-politics {
    
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 0 auto; /* Add this line */
    margin-left: 15px;
    text-align: center; /* Add this line */
    line-height: 90px; /* Adjust this value based on the height of the navigation bar */
    }
  .mobile-navbar{
    height: 90px;
    
  }
  .navbar--fixed {
  position: fixed;
  background-color: #181818; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
</style>