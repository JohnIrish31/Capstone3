import Landing from "../components/Landing"
import Banner from "../components/HomeBanner"
import Deal from "../components/PromosAndDeals"
import BestProduct from "../components/BestProduct"
// import Highlights from "../components/Highlights"


export default function Home(){

	const data = {
	title: "FoodHub Philippines",
	content: "Leaving Marks on your Tastebuds",
	destination: "/products",
	label: "Buy Now"
	}

	return(
			<>
			<div className="p-5">
				<div className="py-5">
					<Landing/>
				</div>
				<Banner bannerProp={data} />
				<Deal/>
				<BestProduct/>
				{/*<Highlights/>*/}
			</div>
			</>
		)
}