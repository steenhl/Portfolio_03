import { NavLink } from "react-router-dom";

export const Contact = ({ children, sectionData, renderTechnologyList, renderIcon, renderSvgBackground }) => {
	return (
		<section className={sectionData.class + " panel panel-link panel-wrapper-level2"} id={sectionData.id}>
			{sectionData.svgBackGround && renderSvgBackground(sectionData.svgBackGround)}

			{sectionData.header && <h2 className="header-level1 panel--header"> {sectionData.header}</h2>}
			<div className="panel-wrapper-level3">
				{/* left side  */}
				<figure className="portrait">
					<img src={require("../../../img/steen/potræt.jpg")} alt="steen hjalmar larsen" />
				</figure>
				{/* right side  */}
				<div className="panel-wrapper-level4 explanation">
					{/* Header */}
					{sectionData.subheading && <h3 className="header-level2 explanation--header">{sectionData.subheading}</h3>}
					{/* {list of used tech} */}
					{sectionData.list && renderTechnologyList(sectionData)}
					{/* Link  */}
					{sectionData.pageLink && <NavLink to={sectionData.pageLink}> {sectionData.linkText}</NavLink>}
					{/* only on contact page  */}
					{sectionData.eMail && (
						<div className="link-to">
							<h3>Kontakt</h3>
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
