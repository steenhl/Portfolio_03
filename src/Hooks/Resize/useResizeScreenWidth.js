import { useEffect } from "react";
import _ from "underscore";
export const useResizeScreenWidth = (props) => {
	// delayTime:number, maxWidth:number, setHasMaxWidth: setState:boolien
	const { delayTime, maxWidth, setHasMaxWidth } = props;
	useEffect(() => {
		window.matchMedia(`(max-width:  ${maxWidth}px)`).matches ? setHasMaxWidth(true) : setHasMaxWidth(false);
	}, [maxWidth, setHasMaxWidth]);

	useEffect(() => {
		const windowResize = () => {
			window.matchMedia(`(max-width:  ${maxWidth}px)`).matches ? setHasMaxWidth(true) : setHasMaxWidth(false);
		};

		if (delayTime !== undefined && maxWidth !== undefined) {
			let lazyLayout = _.debounce(windowResize, delayTime);
			window.addEventListener("resize", lazyLayout);

			// clean up function
			return () => {
				lazyLayout.cancel();
				window.removeEventListener("resize", lazyLayout);
			};
		}
	}, [delayTime, setHasMaxWidth, maxWidth]);
};
