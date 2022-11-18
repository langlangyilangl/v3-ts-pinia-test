type BusClass = {
  on:(name:string,callback:Function)=>void
  emit:(name:string)=>void
}

type PramsKey = string | number | symbol

type list = {
  [key:PramsKey]:Array<Function>
}

class Bus implements BusClass {
  list:list
  constructor(){
    this.list = {}
  }
  emit(name:string,...args:Array<any>){
    let eventName:Array<Function> = this.list[name]
    eventName.forEach(item=>{
      item.apply(this,args)
    })
  }
  on(name:string,callback:Function){ 
    let event = this.list[name] || []
    event.push(callback)
    this.list[name] = event
  }
}

export default new Bus()