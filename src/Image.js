import React from 'react';

function Image(props){
	return <img src={props.src} onClick={props.onClick} onMouseOut={props.onMouseOut} onMouseOver={props.onMouseOver} style={props.style} />
}

export default Image