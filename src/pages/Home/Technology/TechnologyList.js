import { useRef, useEffect, useState } from "react";
import "./technology.scss";
import gsap from "gsap";
// import bootstrap from "bootstrap";
// import reactbootstrap from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import { PopoverToolTip } from "../../../Components/Popovers/Popovers.jsx";
// import { ToolTipSimple } from "../../../Components/Popovers/Popovers.jsx";
// import { ToolTipSimple02 } from "../../../Components/Popovers/Popovers.jsx";

export const TechnologyList = ({ Technology, play }) => {
	const ul = useRef(null);
	const [tl, setTl] = useState();
	//const [renderTooltip, setRenderTooltip] = useState();
	useEffect(() => {
		setTl(gsap.timeline({}));

		//var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		// console.log(Button);
		// console.log(Tooltip);
		// console.log(tooltipTriggerList);
		// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		// 	return Tooltip(tooltipTriggerEl);
		// });

		//const renderTooltip = (props) => <Tooltip {...props}>Tooltip for the register button</Tooltip>;
	}, []);
	useEffect(() => {
		//setRenderTooltip((props) => <Tooltip {...props}>Tooltip for the register button</Tooltip>);
	}, []);
	useEffect(() => {
		if (tl) {
			play ? tl.play() : tl.reverse();
		}
	}, [play, tl]);

	useEffect(() => {
		const curUl = ul.current;
		const li = [...curUl.querySelectorAll("li")];
		if (tl) {
			tl.fromTo(
				li,
				{
					xPercent: 30,
					opacity: 0,
				},
				{
					xPercent: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.5,
				}
			);

			return () => {
				tl.kill();
			};
		}
	}, [tl]);

	return (
		<section className="technology">
			<h2 className="header-level2">{Technology.header && Technology.header}</h2>
			<ul ref={ul} className="technology--ul">
				{Technology.items.map &&
					Technology.items.map((listItem, i) => {
						// toolTip has header
						if (listItem.toolTipHeader !== undefined && listItem.popup !== undefined) {
							return (
								<li key={listItem.id} className="technology--li">
									{listItem.text}
									<span className="tooltip-span">
										<PopoverToolTip headerText={listItem.toolTipHeader} bodyText={listItem.popup} buttonText="i" />
									</span>
								</li>
							);
						} else {
							return (
								<li key={listItem.id} className="technology--li">
									{listItem.text}
								</li>
							);
						}
					})}
			</ul>
		</section>
	);
};
