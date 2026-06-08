import React from "react";
import theme from "theme";
import { Theme, Link, Structure, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
							link-href="/artist-statement"
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
		<Section
			padding="140px 0 140px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/69891a2bd788530023e4412f/images/website%20aceholder.jpg?v=2026-06-05T19:36:52.051Z) 50% 55%/cover"
			color="--light"
			font="--base"
			height="1000px"
			margin="0 0 0 0"
		>
			<Override slot="SectionContent" sm-align-items="center" />
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				width="40%"
				empty-min-height="64px"
				empty-border-width="1px"
				justify-content="center"
				sm-width="100%"
				sm-justify-content="flex-start"
				sm-padding="0px 0px 16px 0px"
				margin="0px 0px 0px 270px"
			>
				<Text
					color="--light"
					margin="0px px 0px 0px"
					font="normal 600 25px/1.5 --fontFamily-googleInter"
					white-space="nowrap"
					padding="0px 0px 0px 0px"
					text-align="left"
				>
					Contemporary artist based in Murfreesboro, Tn
				</Text>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				width="35%"
				sm-justify-content="flex-start"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				sm-width="100%"
				sm-padding="0px 0px 16px 0px"
				justify-content="space-between"
				margin="0px 0px 0px 350px"
				align-items="center"
				flex-direction="row"
			>
				<Text
					color="--lightD1"
					margin="px px 0px px"
					md-font="500 20px/1.3 --fontFamily-googleInter"
					sm-width="100%"
					font="--headline4"
					order="1"
					padding="0px 0px 0px 0px"
					white-space="nowrap"
				>
					{"                   "}Contact:
					<br />
					Phone Number: (615) 934-1577
					<br />
					Email: Garrensimons@gmail.com
					<br />
					Instagram: short._.squid
				</Text>
			</Box>
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