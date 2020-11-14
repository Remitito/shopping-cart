function NewItem(props) {
    return (
        <div style={{marginBottom: '30px'}}>
                <button onClick={props.clickFunc} value={props.choice} id="addCart">Add to Cart</button>
        <div className="itemCont" id={props.key}>
            <h4 style={{color: "white"}}>{props.title}</h4>
            <img height="200x" width="200px" style={{color: "white", borderRadius: '15px'}} src={props.image} alt={props.altDesc}></img>
            <label style={{color: "white", marginBottom: '10px', marginTop: '15px'}}>{props.price}</label>
            <label style={{color: "white", height: "70px"}}>{props.desc}</label>
        </div>
        </div>
    )
}

export default NewItem;