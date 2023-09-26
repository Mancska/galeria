class NagyKepVivew{
    #kep
    constructor(kep,szuloElem){
        this.#kep=kep
        this.szuloElem=szuloElem
        this.#htmlOszerak()
        console.log("sdf")
        this.balGombElem=$("#bal")
        this.jobbGombElem=$("#jobb")
        this.nagyKepHelye=$("#nagyKepHelye")
    this.balGombElem.on("click",()=>{
        this.#sajatEsemenyKezelo("bal")
    })
    this.jobbGombElem.on("click",()=>{
        this.#sajatEsemenyKezelo("jobb")
    })
    }
    nagykepcsere(kep){
        this.nagyKepHelye.atrr("src",kep)
    }
    #sajatEsemenyKezelo(esemenyneve){
        console.log(esemenyneve)
        const ESEMENYEM= new CustomEvent
    }
    #htmlOszerak(){
        
        let txt="<button id='bal'>BAL</button>"
        txt=`
        "<div class="card">
        <div class="card-header">Header</div>
        <div class="card-body"><id="nagyKepHelye" img src="${this.#kep})" class="img-thumbnail"></div>
        <div class="card-footer">Footer</div>
      </div>"`
      txt="<button id='jobb'>JOBB</button>"
      this.szuloElem.html()
    }
   
}
export default NagyKepVivew