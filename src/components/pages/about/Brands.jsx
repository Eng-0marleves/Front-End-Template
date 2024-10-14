import React from "react";
import Slider from "react-slick";
import imagesData from "../../../data/imagesData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/slider.css";

function Responsive() {
	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

	return (
		<div className="slider-container">
			<Slider {...settings}>
				{imagesData.map((image) => (
					<div key={image.id} className="image-slide">
						<img src={image.src} alt={image.alt} className="w-full h-auto" />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Responsive;
