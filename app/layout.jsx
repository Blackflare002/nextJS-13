import "./globals.css";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
// import img from "../public/next.png";

const poppins = Poppins({
	weight: ["400", "700"], //font weight options
	subsets: ["latin"],
});

export const metadata = {
	title: "Next",
	description: "A JavaScript framework",
	openGraph: {
		images: {
			url: "../public/next.png",
			width: 800,
			height: 600,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className="container">
					{children}
				</main>
			</body>
		</html>
	);
}
