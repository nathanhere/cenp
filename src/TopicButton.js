import React from 'react';

function TopicButton(props){
    return (
        <button className="btn btn-primary" onClick={()=>{props.handleClick();}}>{props.topicText}</button>
    )
}

export default TopicButton


