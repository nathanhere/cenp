import React, { useState } from 'react';
import SimpleSlide from './SimpleSlide';

function Base(){
	const [topics, ] = useState(["Adaptable" ,"Efficient & Practical" ,"Relentless Value-Add" ,"Multi-Domain Thinking & Problem Solving" ,"Ease of Communication" ,"Business Sense"]);

	const [images, ] = useState(['tiny/spaceShuttle.png',
					'tiny/simplicity.png',
					'tiny/light.png',
					'tiny/multiBrain.png',
					'tiny/communication.png',
					'tiny/target.png',
					'tiny/networkShip.png']);

	const [contents, ] = useState([<div>Right out the gate, what I bring is talent that goes beyond the ink on my resume—I bring results, whatever it takes. For example, at my company (ABC Gene Tests), when budgeted money for a web design company suddenly went missing, I adapted by implementing the whole thing, end-to-end, in the face of extreme resource constraints. This unlocked hundreds of thousands in sales revenue. Without the site, we had zero.<br/><br/>Being adaptable is needed in any role, but particularly in the web app dev area. As you might already know, the front-end web technology stack is a field that undergoes <font style={{fontWeight: "bold", textDecoration: "underline"}}>rapid</font> change. In the past 2.5 years, the two most popular JavaScript frameworks, Angular and React, completely transformed—Angular made breaking changes (bad for developers), and React made rapid, non-breaking, ease-of-use changes (good for developers). It’s very different than a more stable backend or desktop application design environment. The truth is that the right person or team for this sort of job isn’t necessarily signaled by what they already know; it’s signaled by their ability to quickly learn and adapt to the pipeline of the future, and to use that to do whatever it takes to get results. Measurable results.</div>,
	<div>The kind of results I bring prioritize simplicity, which equals maintainability. For instance, to get a sum of 10, there are some people who will add the number one, 10 times, and then there are people who will simply add 1 + 9. In the same way, I believe in keeping things simple and refraining from over-engineering. For example, at ABC Gene Tests, we were fully capable of implementing a very technical back end server messaging and database system, but we lacked resources for someone with strong security expertise. I opted for the KISS approach (Keep It Simple Stupid), and we bounded our automated systems to run entirely on Google Sheets and JavaScript, because the tradeoff was that we enjoyed <font style={{fontWeight: "bold", textDecoration: "underline"}}>world-class security for free.</font> No need to manage the security complexities of a public-facing system.<br/><br/><font style={{fontStyle: "italic"}}>"Everything should be as simple as it can be, but not simpler." —Roger Sessions (Paraphrasing Einstein)</font></div>,
	<div>And just because the clock hits 5PM, it doesn't mean that I stop work on a particular problem or system. I might take a step back to formulate a different approach, but if it's valuable for the business, then it's valuable to me. Value generation isn't bounded by a clock.</div>,
	<div>This kind of value generation is drawn from a deep well of multiple external domains that I've used to solve common, unusual, or technical business problems. These domains span the gamut of static visual design, animation, music, interactivity, analytics, programming, algorithms, hardware, sheet metal fabrication, client-facing engagement, and securities investments. Because of this, I can make sense of how new systems will fit into larger ecosystems, and solute more efficient ways of implementation and integration. (Click <a href="http://bit.ly/TTshowcase" target="blank">here</a> for a video of how we utilized this at Cisco Systems) <br/><br/>This interdisciplinary approach uniquely positions me to interface and engage with other teams, as well as a multitude of business units, in ways that synergize and maximize shared value. It helps me to ask the right questions, and correctly define the problem. Why is that important? Because in many cases, a well-defined problem is essentially a problem solved. Instead of what could have been a two-dimensional way of doing things, you now get a three and four-dimensional value add. Why perplex over how to drive to New York in 2D, when you can fly in 3D?</div>,
	<div>That being said, I am able to fly up and down world of technical abstraction with ease. This means that you, as a director, will be briefed on technical activity in ways that makes sense, and that can be easily communicated up the chain. You won't have to go fishing for key talking points for your next business report.</div>,
	<div>And with the business in mind, I simultaneously take the role of an both an implementer on a team as well as a "business owner," and aim to help design / implement maintainable solutions that can function and scale without being overdependent on highly specialized individuals. As I mentioned in our prior meetings, my goal isn’t to work myself into a parking spot; it’s to work myself out of a job and / or pass the baton, as needed. It's also to help you identify talent and attitudes who have the potential to do the same. 
	<br/><br/>
	It's this unique perspective that helps me keep the bottom line in mind. It's not uncommon for individuals working in tech groups to lose sight of the bigger picture — key business metrics, which are the levers to revenue and profitability goals. Being mindful of the bigger picture drives better outcomes, not just for me, but for teams, for managers, and for an organization at large — hopefully your orgnization.<br/><br/>That said, <font style={{fontWeight: "bold"}}>your</font> bottom line is that you need someone who can serve as trusted eyes and ears to help your team get where you need to go and take the next evolutionary step — someone with a pulse on the full stack dev space and who can listen, lead, and follow. These qualities, and all the ones listed above, are what I uniquely bring to the table. They have brought massive value to past endeavors, bring value to present endeavors, and will continue impacting countless future endeavors.</div>]);


	return (
	    <div id="base" className="container body-content">
	        <div className="container">
	            <div className="row justify-content-center text-white" style={{paddingTop:"70px"}} >
	                <center><h1>VALUE TO THE TABLE</h1></center>
	            </div>
	            <center>
	                <div id="header" className="row justify-content-center" style={{paddingTop:"10px"}} >
	                    <p>
	                    Listed below are the unique value adds that I bring to the table.
	                    <br />
	                    Best viewed from a desktop using Chrome.
	                    <br/>
	                    Thanks for visiting. Enjoy.
	                    <br />
	                    <br />
	                    [ CLICK THE BUTTONS BELOW ]
	                    <br/><br/>
	                    </p>
	                </div>
	            </center>
	            {renderTopicButtons(topics, contents, images)}
	        </div>
	        <div className="contact">
		        <div className="row justify-content-center" style={{paddingTop:"30px"}} >
		        	Media Highlights|<a href="http://bit.ly/TTshowcase" target="blank">Cisco Showcase</a>
		        </div>
		        <div className="row justify-content-center" style={{paddingTop:"0px"}} >
		        	GitHub|<a href="https://github.com/nathanhere" target="blank">@nathanhere</a>
		        </div>
		        <div className="row justify-content-center" style={{paddingTop:"0px"}} >
		        	Twitter|<a href="https://twitter.com/nathanhere" target="blank">@nathanhere</a>
		        </div>
		        <div className="row justify-content-center" style={{paddingTop:"0px"}} >
		        	LinkedIn|<a href="http://bit.ly/natelinkedin" target="blank">@nathanhere</a>
		        </div>
		        <div className="row justify-content-center" style={{paddingTop:"0px"}} >
		        	Email|<a href="mailto:nathan@nathanishere.com">nathan@nathanishere.com</a>
		        </div>
		        <div id='ship' className="row justify-content-center text-white" style={{paddingTop:"70px"}} >
		            <img alt="bigshipframe" className="footerimage" src="tiny/bigShipFrame.png" />
		        </div>
	        </div>
	    </div>
    )	
}

function renderTopicButtons(topics, contents, images) {
	return (topics.map((topic,i)=>{ return <SimpleSlide key={i} topicText={topic} content={contents[i]} image={images[i]} />}))
}


export default Base
