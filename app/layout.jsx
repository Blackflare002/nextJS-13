import "./globals.css";
import Header from "./components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "700"], //font weight options
	subsets: ["latin"],
});

export const metadata = {
	title: "Hell",
	description: "Honestly not all that bad",
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
