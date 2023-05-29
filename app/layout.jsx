import "./globals.css";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
import Head from "next/head";
// import img from "./opengraph-image.png";

const poppins = Poppins({
	weight: ["400", "700"], //font weight options
	subsets: ["latin"],
});

export const metadata = {
	title: "Next",
	description: "A JavaScript framework",
	openGraph: {
		title: "Next",
		description: "A JavaScript framework",
		siteName: "Next.js",
		images: [
			{
				url: "./opengraph-image.png",
				width: 800,
				height: 600,
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
	img,
}) {
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
						content="<generated>"
					/>
					<meta
						property="og:image:type"
						content="<generated>"
					/>
					<meta
						property="og:image:width"
						content="<generated>"
					/>
					<meta
						property="og:image:height"
						content="<generated>"
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
