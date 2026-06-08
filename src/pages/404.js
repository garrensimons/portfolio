import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
		<Section padding="40px 0 40px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
			/>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="30%"
				display="flex"
				empty-min-width="64px"
				empty-border-color="LightGray"
				align-items="center"
				lg-width="50%"
				sm-width="70%"
				empty-border-style="solid"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					Garren Simons
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="70%"
				align-items="center"
				lg-width="50%"
				sm-width="30%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Button Text" md-color="--light" md-font="500 20px/1.3 --fontFamily-serifTimes" md-text-transform="uppercase" />
					<Override slot="Button Icon" md-color="--light" />
					<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
					<Box
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
						md-padding="20px 0px 20px 0px"
					>
						<Link color="--lightD1" font="--base" href="#" text-decoration-line="initial">
							Facebook
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
						>
							LinkedIn
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
						>
							Twitter
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Image
				align-self="auto"
				order="0"
				display="block"
				height="600px"
				margin="px 0px 80px 0px"
				object-position="50% 75%"
				width="100%"
				src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18:37:03.598Z"
				flex="0 1 auto"
				object-fit="cover"
				padding="px 0px 0px 0px"
				srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7953.jpeg?v=2026-06-03T18%3A37%3A03.598Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Text
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
				sm-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				font="--headline1"
				md-text-align="center"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				md-margin="0px 0px 0px 0px"
			>
				Sorry, but the page you requested cannot be found. Error #404.{"\n\n"}
			</Text>
		</Section>
		<Section sm-padding="74px 0 74px 0" quarkly-title="Footer" padding="90px 0 90px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" md-align-items="center" />
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				md-justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
					Garren Simons
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-width="100%"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					+1 (615) 934-1577
					<br />
					Garrensimons@gmail.com
				</Text>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-min-height="64px"
				empty-border-width="1px"
				md-width="100%"
				empty-min-width="64px"
				md-align-items="center"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					Instagram: short._.squid
					<br />
					Tiktok: Short._.squid
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