<template>
    <div class="pane-container" ref="wrapper" @mouseup="mouseupHandle" :style="{width: boxWdith + 'px'}">
        <div class="left pane-item" :style="{width: boxWdith * leftWidth + 'px'}">hello</div>
 
        <div class="line" :style="{left:boxWdith * leftWidth-4 + 'px'}" @mousedown="mouseDownHandle"></div>

        <div class="right pane-item" :style="{width:(1-leftWidth)*boxWdith + 'px'}">hi</div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            leftWidth: 0.3,
            canMove: false,
            boxWdith: 400
        }
    },
    methods: {
        mouseMoveHandle(event) {
            //event.pageX 鼠标距离页面左边的距离, getBoundingClientRect() 返回一个元素的一些属性
            
            if (!this.canMove) {
                return;
            }
            //鼠标距离父元素最左边的距离 = 鼠标的左边距离 - 盒子距离页面左边的距离
            let mouseToBoxLeft = event.pageX - this.$refs.wrapper.getBoundingClientRect().left

            this.leftWidth = (mouseToBoxLeft / this.boxWdith).toFixed(2)

            console.log(this.leftWidth)

            // console.log(mouseToBoxLeft)

            // console.log(this.$refs.wrapper.getBoundingClientRect())
        },

        // 当 鼠标按下时候，给document添加一个 鼠标移动事件
        mouseDownHandle () {
            this.canMove = true
            document.addEventListener('mousemove', this.mouseMoveHandle)
        },
        mouseupHandle () {
            this.canMove = false
        }
    }
}
</script>
<style lang="scss" scoped>
.pane-container {
    height: 250px;
    background-color: #FFF8DC;
    position: relative;

    .pane-item {
        height: 100%;
        color: red;
        display: inline-block;
    }

    .left {
        background-color: lightblue;
        float: left;
    }

    .right {
        background-color: pink;
        width: 50%;
    }

    .line {
        width: 8px;
        height: 100%;
        background-color: red;
        position: absolute;
        top: 0;
    }
}
</style>