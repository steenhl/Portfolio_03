import { useEffect } from "react";

const Page = (props) => {
	useEffect(() => {
		console.log(props.title);
		document.title = props.title || "";
	}, [props.title]);
	return props.children;
};

export default Page;
