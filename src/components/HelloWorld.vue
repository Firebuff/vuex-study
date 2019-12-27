<template>
    <div class="hello">
        <div>{{ msg }}</div>
        <input type="text" name="" v-model="inputText">
        <button @click="addHandle">add</button>
        <ul>
            <li v-for="(item,index) in nameList" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: 'HelloWorld',
    data() {
        return {
            inputText: ''
        }
    },
    props: {
        msg: String,
    },
    created () {
        // console.log(this.$store.state)
    },
    methods: {
        addHandle () {
            if (!this.inputText) {
                return;
            }
            // console.log(this.inputText)
            // this.$store.state.nameList.push(this.inputText)
            // console.log(this)
            // this.$store.commit('ADDLIST',this.inputText)
            // this.$store.dispatch('setList', this.inputText)
            // this.$store.commit('SET_LIST', this.inputText)
            // console.log(this.$store.getters.getList)
            

            // this.setList('万里长风宋秋燕') //使用mapActions的写法 1
            
            // this.makeList('抽刀断水水更流') //使用mapActions的写法 2

            // this.asynMakeList('mutation 的用法1') // mutation 的用法 1

            this.SET_LIST('mutation 的用法2') // mutation 的用法 2
        },

        /*  mapActions 使用方法1: */
        // ...mapActions(['setList'])
        

        /*  mapActions 使用方法2: */

        ...mapActions({
            'makeList': 'setList',
            // makeList: 'setList' //键名加不加双引号效果都一样
        }),

        /* mapMutations 的使用方法 */

        ...mapMutations(['SET_LIST']), //用法1

        // ...mapMutations({
        //     asynMakeList: 'SET_LIST'
        // }) //用法2



    },
    computed: {

        //可以传入一个对象
    
        /*...mapState({
            list: state => state.nameList
        })*/

        //也可以传入一个数组，数组元素要和state里面的属性名字一一对应（名字相同）
        //
        
        ...mapState([
            'nameList' 
        ])
    },
    mounted () {
        console.log(this.list)
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    .hello {
        text-align: left;
        font-size: 18px;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        background-color: pink;
        line-height: 30px;
        margin-top: 5px;
    }
</style>