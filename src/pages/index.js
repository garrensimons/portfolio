import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
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
		<Components.RelativeHeader top={0} />
		<Section margin="10vw 0 0 0" />
		<Section padding="5vw 0 5vw 0">
			<Override slot="SectionContent" margin="0px 6vw 0px 6vw" />
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
				margin="0px 0px 0px 16vw"
				align-items="center"
				flex-direction="row"
			>
				<Text color="--light" font="normal 600 2.5vw/1.5 --fontFamily-googleInter" white-space="nowrap" text-align="left">
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
				margin="0px 0px 0px 29vw"
				align-items="center"
				flex-direction="row"
			>
				<Text color="--light" font="normal 600 1.7vw/1.5 --fontFamily-googleInter" white-space="nowrap" text-align="left">
					{"                     "}Contact:
					<br />
					Phone Number: (615) 934-1577
					<br />
					Email: Garrensimons@gmail.com
					<br />
					Instagram: Short._.Squid
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