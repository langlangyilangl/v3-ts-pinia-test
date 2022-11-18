import { ref } from "vue"

const renderDom = (props:Props,ctx:any)=>{
  return (
    <div>
      <hr />
      <h2>props使用</h2>
      <div>{props.data}</div>
      <hr />

      <h2>v-model使用</h2>
      <input type="text" v-model={vmodelData.value} />
      <div>{vmodelData.value}</div>
      <hr />

      <h2>v-show和v-if使用</h2>
      <h2>点击事件用onClick</h2>
      <button onClick={changeFlag.bind(this)}>改变flag</button>
      <div v-show={flag.value}>v-show</div>
      {
        flag.value ?  <template></template> : <div>v-if(false的时候出现)</div>
      }
      <hr />

      <h2>emit派发</h2>
      <button onClick={emitData.bind(this,'hello parents',ctx)}>派发按钮</button>
      <hr />

      <h2>v-for使用</h2>
      {
        arr.map(v=>{
          return (
            <div class="classTest">我是{v}号</div>
          )
        })
      }
      <hr />

      <h2>v-bind使用</h2>
      <input type="text" value={iuputValue.value}/>

    </div>
    
  )
}

type Props = {
  data:string
}

let vmodelData = ref('v-model')
let flag = ref<Boolean>(true)
const changeFlag = ()=>{
  flag.value = !flag.value
}
const emitData = (value:String,ctx:any)=>{
  ctx.emit('jj',value)
}
const arr = [1,2,3,4]
const iuputValue = ref<string>('v-bind')


export default renderDom

