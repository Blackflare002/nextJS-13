import "./globals.css";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
import Head from "next/head";
// import img from "../public/next.png";

const poppins = Poppins({
	weight: ["400", "700"], //font weight options
	subsets: ["latin"],
});

// export const metadata = {
// 	title: "Next",
// 	description: "A JavaScript framework",
// 	openGraph: {
// 		images: {
// 			url: "../public/next.png",
// 			width: 800,
// 			height: 600,
// 		},
// 	},
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Head>
					<meta property="title" content="Next" />
					<meta
						property="og:title"
						content="Next"
					/>
					<meta
						property="description"
						content="A JavaScript framework"
					/>
					<meta
						property="og:description"
						content="A JavaScript framework"
					/>
					<meta
						property="og:url"
						content="https://next-js-13-blue.vercel.app/"
					/>
					<meta
						property="og:site_name"
						content="Next"
					/>
					<meta
						property="og:locale"
						content="en_US"
					/>
					<meta
						property="og:image"
						content="../public/next.png"
					/>
					<meta
						property="og:image:width"
						content="800"
					/>
					<meta
						property="og:image:height"
						content="600"
					/>
					<meta
						property="og:type"
						content="website"
					/>
				</Head>
				<Header />
				<main className="container">
					{children}
				</main>
			</body>
		</html>
	);
}
