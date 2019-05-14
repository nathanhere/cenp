import React from 'react';
import Paper from '@material-ui/core/Paper';

function Card(props){
	const background = props.image;
	return (

	<Paper id="test" elevation={4} className={props.paperclass}>

		<div className="container body-content">
			<div className="container">
				<div className="row justify-content-center" style={ {paddingTop:"10px"} }>
					<h1>{props.topicText}</h1>
				</div>
						<div className="row justify-content-start" style={ {paddingTop:"10px"} }>
							<div className="col" style={ {paddingTop:"10px"} }>
								<div className="row justify-content-start" style={ {paddingTop:"10px"} }>
							<p className="text-black-80">
							{props.content}
							</p>
						</div>
					</div>
					<div className="col" style={ {paddingTop:"10px"} }>
						<img alt={props.image} style={ {maxHeight:"517px", maxWidth:"517px", boxShadow: "10px 10px 5px grey", border:"1px solid #666666"} } src={background} />
					</div>
				</div>
						<div className="row justify-content-center" style={ {paddingTop:"15px"} }>
					<button className="btn btn-primary"  style={ {marginBottom:"50px" }} onClick={()=>{props.setIsOpen(false)}}>DONE</button>
				</div>
			</div>
		</div>


	</Paper>)
}


export default Card