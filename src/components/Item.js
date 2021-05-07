const Item = (props) => {
    const text = props.text.split('/')
    return(
    <li>
        <img width="40" height="40" src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"></img>
        Name: 
        {"  " + text[0]}
        <br/>
        Description: 
        {"  " + text[1]}
    </li>)
}

export default Item;