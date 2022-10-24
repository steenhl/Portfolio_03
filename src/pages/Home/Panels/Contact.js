import { NavLink } from "react-router-dom";

export const Contact = ({ children, sectionData, renderTechnologyList, renderIcon, renderSvgBackground }) => {
	return (
		<section className={sectionData.class + " panel panel-link panel-wrapper-level2"} id={sectionData.id}>
			{sectionData.svgBackGround && renderSvgBackground(sectionData.svgBackGround)}

			{sectionData.header && <h2 className="header-level1"> {sectionData.header}</h2>}
			<div className="panel-wrapper-level3">
				{/* left side  */}
				{sectionData.svg && <div className="svg-figure">{sectionData.svg && renderIcon(sectionData.svg)}</div>}
				{/* right side  */}
				<div className="panel-wrapper-level4 explanation">
					{/* all pages header */}
					{sectionData.subheading && <h3 className="header-level2">{sectionData.subheading}</h3>}
					{/* Paragraf text */}
					{sectionData.p && <p>{sectionData.p}</p>}
					{/* {list of used tech} */}
					{sectionData.list && renderTechnologyList(sectionData)}
					{/* Link  */}
					{sectionData.pageLink && <NavLink to={sectionData.pageLink}> {sectionData.linkText}</NavLink>}
					{/* only on contact page  */}
					{sectionData.eMail && (
						<div className="link-to">
							Email:
							<a className="btn btn-primary" href={sectionData.eMail}>
								{sectionData.eMailAdress}
							</a>
						</div>
					)}
					{children}
				</div>
			</div>
		</section>
	);
};
