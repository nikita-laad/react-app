import { useState } from "react";
const TextForm = (props)=>{
    const [text, newText] = useState('');
    const handleOnChange = (event) =>{
        newText(event.target.value);
    }
    const changeToUpperCase = () =>{
        if(text.length>0){
            const changeUpperCase = text.toUpperCase();
            newText(changeUpperCase);
            props.showAlert('change to upper case', 'success')
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
        
    }
    const changeToLowerCase = () => {
        if(text.length>0){
            const changeLOwerCase = text.toLowerCase();
            newText(changeLOwerCase);
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
       
    }
    const changeAlterNative = () =>{
        if(text.length>0){
            const changeAlternativeText = text.toUpperCase().split("");
        for (var i = 0; i < changeAlternativeText.length; i += 2) {
            changeAlternativeText[i] = changeAlternativeText[i].toLowerCase();
          }
          newText(changeAlternativeText.join("")) ;
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
       
    }
    const changeInvers = () =>{
        if(text.length>0){
            const convertString = text => [...text].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
            newText(convertString) ;
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
       
    }
    const copyText = ()=>{
        if(text.length>0){
            navigator.clipboard.writeText(text)
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
       
    }
    const selectAllText = () => {
        if(text.length>0){
            var textGEt = document.getElementById("text");
            textGEt.select();
           
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
    }
    const removeExtraSpace = ()=>{
        if(text.length>0){
            const removeSpace= text.replace(/\s+/g, ' ').trim();
            newText(removeSpace)
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
    }
    const clearText = () =>{
        if(text.length>0){
            newText('')
        }else{
            props.showAlert('plase enter ant text', 'success')
        }
      
    }
    return(
        <div className={`${props.mode?'bg-dark':'bg-white'} pt-3`}>
            <div className="container">
              
                    <h1  className={`${props.mode?'text-white':'text-dark'} `}>Convert Text</h1>
                    <textarea className="form-control" id="text" rows="5" placeholder="Type here..." value={text} onChange={handleOnChange}></textarea>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-12 col-md-12 col-12 mb-3">
                                <button className="btn btn-primary " onClick={changeToUpperCase}>Convert to Upper Case</button>
                                <button className="btn btn-success mx-3" onClick={changeToLowerCase}>Convert to Lower Case</button>
                                <button className="btn btn-dark" onClick={changeAlterNative}>Conver to Alternative </button>
                                <button className="btn btn-warning mx-2 my-2" onClick={changeInvers}>Invers Text</button>
                                <button className="btn btn-dark mx-2" onClick={selectAllText}>Select All Text</button>
                                <button className="btn btn-info mx-2" onClick={copyText}>Copy Text</button>
                                <button className="btn btn-secondary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
                                <button className="btn btn-danger " onClick={clearText}>Clear</button>
                            
                            </div>
                            
                            <div className="col-12 col-md-12 col-12">
                                <p className="mb-0">{text.split(" ").filter((text)=>text.length!==0).length} Word and {text.length} Charaters</p>
                            </div>
                            <div className="col-12 col-md-12 col-12 ">
                                <p className="mb-0">{0.008 *text.split(" ").filter((text)=>text.length!==0).length} Min. For read this text</p>
                            </div>
                        </div>
                        <div>
                            <h3 className={`${props.mode?'text-white':'text-dark'} mb-0`} >{text.length>0?'preview':''}</h3>
                            <p className="mb-0">{text}</p>
                        </div>
                    
                    </div>
                
              
            </div> 
        </div>
    )
}
export default TextForm;