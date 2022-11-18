import { defineStore } from "pinia";
import { user } from "./interface";

const useUserStore = defineStore({
  id:'user',
  state:():user=>({
    name:'胡涛',
    sex:'女',
    age:18
  }),
  getters: {
    ageAddOne: (state) => state.age as number +  1
  },
  actions:{
    //不能用箭头函数
    ageAdd(number:number){
      this.age +=number
    }
  }
})

export default useUserStore