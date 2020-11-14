function NewCartItem(props) {
    return (
        <div style={{marginBottom: '30px'}}>
            <div id="quantDel">
            <label className="quant">Quantity: {props.quant}</label>
            <button id="deleteBut" onClick={props.clickFunc} value={props.number}>-</button>
            <button id="addBut" onClick={props.clickFuncAdd} value={props.number}>+</button>
            </div>
        <div className="cartItemCont" id={props.key}>
            <h4 style={{color: "white"}}>{props.title}</h4>
            <img height="100x" width="100px" style={{color: "white", borderRadius: '15px'}} src={props.image} alt={props.altDesc}></img>
            <label style={{color: "white", marginBottom: '10px', marginTop: '15px'}}>{props.price}</label>
            <label style={{color: "white", height: "70px"}}>{props.desc}</label>
        </div>
        </div>
    )
}

export default NewCartItem;