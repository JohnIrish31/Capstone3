import Banner from "../components/HomeBanner";

export default function Error (){

	const data = {
		title : "404 - NOT FOUND",
		content : "The page you are looking for cannot be found",
		destination : "/",
		label : "Home"
	}


	return(
		<Banner bannerProp={data} />
		);
}