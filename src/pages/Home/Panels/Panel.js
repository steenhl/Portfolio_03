import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

export const Panel = ({ children, sectionData, renderTechnologyList, renderIcon, renderSvgBackground }) => {
	return (
		<section className={sectionData.class + " panel panel-link panel-wrapper-level2"} id={sectionData.id}>
			{sectionData.svgBackGround && renderSvgBackground(sectionData.svgBackGround)}

			{sectionData.header && <h2 className="header-level1 panel--header"> {sectionData.header}</h2>}
			<div className="panel-wrapper-level3">
				{/* left side  */}
				{sectionData.svg && <div className="svg-figure">{sectionData.svg && renderIcon(sectionData.svg)}</div>}
				{/* right side  */}
				<div className="panel-wrapper-level4 explanation">
					{/* all pages header */}
					{sectionData.subheading && <h3 className="header-level2 explanation--header">{parse(sectionData.subheading)}</h3>}
					{/* Paragraf text */}
					{sectionData.p && <p>{parse(sectionData.p)}</p>}
					{/* {list of used tech} */}
					{sectionData.list && renderTechnologyList(sectionData)}
					{/* Link  */}
					{sectionData.pageLink && (
						<NavLink to={sectionData.pageLink} className="link-to btn btn-primary">
							{sectionData.linkText}
						</NavLink>
					)}
					{children}
				</div>
			</div>
		</section>
	);
};
