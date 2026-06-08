import React from "react";
import theme from "theme";
import { Theme, Link, Structure, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"artist-statement"} />
		<Helmet>
			<title>
				Garren Simons — Artist.
			</title>
			<meta name={"description"} content={"I am an artist look at me go"} />
			<meta property={"og:title"} content={"Garren Simons — Artist."} />
			<meta property={"og:description"} content={"I am an artist look at me go"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpg?v=2026-06-08T17:07:27.457Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Section
			quarkly-title="Header"
			min-width="8px"
			min-height="8px"
			width="1279.2591688368057px"
			height="147.82901443142362px"
			background="#ffffff"
			margin="0 0 0 0px"
			inner-width="default"
			padding="px px 24px px"
			position="fixed"
			bottom="2860.172985568576px"
			left="0.7408311631943434px"
			right="0px"
			top="0px"
		>
			<Override slot="SectionContent" align-items="center" justify-content="space-between" position="fixed" />
			<Structure cells-number-total="4">
				<Override slot="Content">
					<Override slot="cell-0">
						<Link
							href="/index"
							color="#000000"
							font="50px --fontFamily-googleNotoSerifGeorgian"
							white-space="nowrap"
							text-decoration-line="initial"
							text-align="center"
							link-href="/artist-statement"
						>
							Garren Simons
						</Link>
					</Override>
					<Override slot="cell-1">
						<Link
							href="/artist-statement"
							color="#000000"
							font="30px --fontFamily-googleNotoSerifGeorgian"
							white-space="nowrap"
							text-decoration-line="initial"
							text-align="center"
							link-href="/artist-statement"
						>
							Artist Statement
						</Link>
					</Override>
					<Override slot="cell-2">
						<Link
							href="/works"
							color="#000000"
							font="30px --fontFamily-googleNotoSerifGeorgian"
							white-space="nowrap"
							text-decoration-line="initial"
							text-align="center"
						>
							Works
						</Link>
					</Override>
					<Override
						slot="Cell 0th"
						text-align="left"
						align-items="center"
						display="flex"
						flex-direction="row"
						justify-content="space-between"
					/>
					<Override slot="cell-3">
						<Link
							href="/about"
							color="#000000"
							font="30px --fontFamily-googleNotoSerifGeorgian"
							white-space="nowrap"
							text-decoration-line="initial"
							text-align="center"
						>
							About
						</Link>
					</Override>
					<Override
						slot="Cell"
						display="flex"
						align-items="center"
						justify-content="flex-end"
						flex-direction="row"
					/>
					<Override
						slot="Cell 0"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
					/>
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="row"
						margin="0px 0px 0px 35px"
					/>
					<Override
						slot="Cell 3"
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="row"
					/>
					<Override
						slot="Cell 1"
						display="flex"
						align-items="center"
						justify-content="flex-end"
						flex-direction="row"
						margin="0px 0px 0px 90px"
						padding="0px 0px 0px 0px"
					/>
					<Override slot="cell-4">
						<Link
							href="/artist-statement"
							color="#000000"
							font="30px --fontFamily-googleNotoSerifGeorgian"
							white-space="nowrap"
							text-decoration-line="initial"
							text-align="center"
						>
							Contact
						</Link>
					</Override>
				</Override>
			</Structure>
		</Section>
		<Section margin="150px 0 0 0">
			<Text margin="0px 0px 0px 0px" color="#ffffff" font="25px sans-serif">
				My work uses traditional and sculptural techniques to show the daily struggle of women and queer people. I am a young queer woman, who grew up in a conservative household with my single father. Self expression was difficult during these times, and often made me feel as if I had to hide such a big part of my self. Coming out of that situation I find myself wanting to explore and express my queerness, my struggles, and my views of the world and its injustice. I want to show the rest of the world the struggles I see my friends, family, and neighbors go through as well. I've been heavily inspired by the style of chiaroscuro, creating a deep contrast of light and dark illuminating the figure.
				<br />
				<br />
				(I've written up to here)
				<br />
				<br />
				{"  "}I enjoy doing research of past queer and feminist figures, often taking inspiration from their stories, and reimagining them in present time. I like taking technique inspiration from classic impressionists, Claude Monet, Edgar Degass, and such. Making art like this is very personal to me and makes me passionate about having others seeing it and putting themselves in others shoes. I've always wanted to be able to show the stories, because sometimes telling is just not enough.{" \n\n"}
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});