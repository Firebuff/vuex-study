<template>
    <div class="pane-container" ref="wrapper">
        <div class="left pane-item" style="width: 30%;">hello</div>

        <div class="line" style="left:calc(30% - 4px);" @mousedown="mouseDownHandle"></div>

        <div class="right pane-item" style="width:70%;">hi</div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            leftWidth: 0.3
        }
    },
    methods: {
        mouseMoveHandle(event) {

            //event.pageX 鼠标距离页面左边的距离, getBoundingClientRect() 返回一个元素的一些属性
            
            console.log(this.$refs.wrapper.getBoundingClientRect())
        },

        // 当 鼠标按下时候，给document添加一个 鼠标移动事件
        mouseDownHandle () {
            document.addEventListener('mousemove', this.mouseMoveHandle)
        }
    }
}
</script>
<style lang="scss" scoped>
.pane-container {
    width: 400px;
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