import { useEffect, useState } from 'react';

const useOnScreen = (ref) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	return isVisible;
};

export default useOnScreen;
