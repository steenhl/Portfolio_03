import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import parse from "html-react-parser";

// <PopoverToolTip headerText={} bodyText={} buttonText={} />
export const PopoverToolTip = (props) => {
	const { headerText, bodyText, buttonText } = props;
	//console.log(props.children);

	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3">{parse(headerText)}</Popover.Header>
			<Popover.Body>{parse(bodyText)}</Popover.Body>
		</Popover>
	);

	return (
		<OverlayTrigger trigger="click" placement="auto" overlay={popover} rootClose>
			<div>
				{props.children}
				<Button variant="secondary" className="px-2 py-0">
					{buttonText}
				</Button>
			</div>
		</OverlayTrigger>
	);
};
// <ToolTip bodyText={,,,} />
export const ToolTipSimple = ({ bodyText }) => {
	return (
		<OverlayTrigger placement="auto" overlay={(props) => <Tooltip {...props}>{bodyText}</Tooltip>}>
			<Button type="button" className="btn btn-secondary px-2 py-0">
				i
			</Button>
		</OverlayTrigger>
	);
};

// <ToolTipSimple02 headerText={} bodyText={} buttonText={}
export const ToolTipSimple02 = ({ headerText, bodyText, buttonText }) => {
	// const popover = (
	// 	<Popover id="popover-basic">
	// 		<Popover.Header as="h3">{headerText}</Popover.Header>
	// 		<Popover.Body>{bodyText}</Popover.Body>
	// 	</Popover>
	// );

	return (
		<OverlayTrigger
			placement="auto"
			overlay={(props) => (
				<Tooltip {...props}>
					<Popover id="popover-basic">
						<Popover.Header as="h3">{headerText}</Popover.Header>
						<Popover.Body>{bodyText}</Popover.Body>
					</Popover>
				</Tooltip>
			)}
		>
			<Button type="button" className="btn btn-secondary px-2 py-0">
				i
			</Button>
		</OverlayTrigger>
	);
};
