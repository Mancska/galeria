import Model from "../modell/model.js"
import NagyKepVivew from "../view/NagyKepView.js"

class Controller{
    constructor(){
        const MODEL =new Model
        const NAGYKEPVIEW = new NagyKepVivew( MODEL.getAktKep(),$(".nagykep"))
        console.log("fsf")
        $(window).on("jobb",()=>{
            MODEL.jobb()
            let aktkep=MODEL.getAktKep()
            NAGYKEPVIEW.nagykepcsere(aktkep)

        })
    }
}
export default Controller