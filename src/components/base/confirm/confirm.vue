<template>
    <div class="confirm" v-if="isShow">
        <div class="con_box" >
            <div class="context">
                <h6>{{obj.type}}</h6>
                <p>{{obj.msg}}</p>
                <div class="btn">
                    <span @click="close()" v-if="obj.btn.no">{{obj.btn.no}}</span>
                    <span @click="ok()"  v-if="obj.btn.ok">{{obj.btn.ok}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:true,
        }
    },
    methods:{
        close(){
            console.log('关闭');
        },
        ok(){
            console.log('确定')
        }
    }
}
</script>
<style scoped>
.confirm{background-color:rgba(0, 0, 0, 0.6);width: 100%;height: 100%; position: fixed;top: 0;}
.con_box{width: 75%;height: 22%;background-color: white;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;border-radius: 5px;}
.context{padding: 10px;}
.context h6{font-size: 24px;padding: 15px;}
.context p{font-size: 20px;padding: 35px 15px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.btn{padding: 15px;text-align: right;}
.btn span{padding: 10px 35px;    color: white;border-radius: 5px;}
.btn span:nth-child(1){background-color: #f1f1f1;color: rgb(106, 223, 223);}
.btn span:nth-child(2){background-color: rgb(106, 223, 223);}
</style>
