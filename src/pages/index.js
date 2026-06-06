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
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Components.GsPageHeader />
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