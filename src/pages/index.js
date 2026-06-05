import React from "react";
import theme from "theme";
import { Theme, Link, Structure, Section, Text, Box, Hr, Span, Image } from "@quarkly/widgets";
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
						<Components.HelloIAmDude
							width="25rem"
							position="static"
							top="334px"
							bottom="auto"
							left="330px"
							right="auto"
							white-space="nowrap"
							font="normal 400 50px/1.5 georgia"
						/>
					</Override>
					<Override slot="cell-1">
						<Link
							href="#statement"
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
							href="#statement"
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
						justify-content="center"
					/>
					<Override slot="cell-3">
						<Link
							href="#statement"
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
						justify-content="center"
						flex-direction="row"
					/>
				</Override>
			</Structure>
		</Section>
		<Section
			padding="140px 0 140px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z) 50% 55%/cover"
			color="--light"
			font="--base"
			height="1000px"
			margin="150px 0 0 0"
		>
			<Override slot="SectionContent" sm-align-items="center" />
			<Box display="flex" margin="-16px -16px -16px -16px" flex-wrap="wrap" width="100%">
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex" font="--lead">
						<Text margin="0px">
							About me
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							My name is Mary Cornell, born and raised in France.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							I've been working as a professional photographer and videographer for more than 12 years.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
				width="800px"
				order="-1"
				align-self="flex-end"
			>
				<Box
					display="flex"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="20%"
					empty-min-height="64px"
					empty-border-width="1px"
					justify-content="center"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
				>
					<Text color="--light" margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter">
						Hello!
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="60%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
				>
					<Text
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
						font="--headline4"
						order="1"
						padding="0px 0px 0px 150px"
					>
						"Untitled"
						<br />
						Medium: Ceramic{" "}
						<br />
						Size: 11 x 7
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							{" "}
						</Span>
						in
						<br />
						Date: 2026
					</Text>
				</Box>
			</Box>
			<Image
				src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
				display="block"
				width="425.54555555555555px"
				height="604.271px"
				position="static"
				bottom="auto"
				left="406px"
				right="auto"
				top="677px"
				srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Image
				src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
				display="block"
				width="380px"
				height="600px"
				align-self="flex-start"
				position="static"
				bottom="auto"
				left="17px"
				right="auto"
				top="680px"
				srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box min-width="100px" min-height="100px" height="900px">
				<Text
					margin="450px 0px 0px 840px"
					width="300px"
					height="200px"
					position="relative"
					color="#ffffff"
					font="26px sans-serif"
					padding="0px 0px 0px 00px"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						"The Iconic"
						<br />
						Medium: Ceramic
						<br />
						Size
						<br />
						Date 2026
					</Span>
				</Text>
			</Box>
			<Image
				src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18:37:03.575Z"
				display="block"
				width="380px"
				height="600px"
				position="static"
				bottom="auto"
				left="18px"
				right="auto"
				top="1337px"
				srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7937.jpeg?v=2026-06-03T18%3A37%3A03.575Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Image
				src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18:37:03.566Z"
				display="block"
				width="400px"
				height="600px"
				position="static"
				bottom="1071px"
				left="386px"
				right="auto"
				top="auto"
				srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7936.jpeg?v=2026-06-03T18%3A37%3A03.566Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					empty-min-height="64px"
					display="flex"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					display="flex"
					justify-content="center"
					sm-width="100%"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					width="20%"
					sm-justify-content="flex-start"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Details{"\n\n"}
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					width="60%"
				>
					<Text
						font="--headline4"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
					>
						I also publish my work on Twitter where you can find my most recent posts.{"\n"}
						<br />
						<br />
						I enjoy researching and writing stories about the beauty world and its connection with culture. Specifically, I like writing about bizarre moments in the fashion world, new and ambitious designers, and some of the more unpopular aspects of makeup.{"\n"}
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				flex-wrap="wrap"
				sm-margin="32px 0px 0px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				margin="86px 0px 0px 0px"
				sm-flex-direction="column"
			>
				<Box
					display="flex"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					justify-content="center"
					empty-border-style="solid"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						About{"\n\n"}
					</Text>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-height="64px"
					empty-border-style="solid"
					width="60%"
					sm-width="100%"
					empty-min-width="64px"
				>
					<Text font="--headline4" color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter">
						I run a blog on beauty and fashion called Piper N9NE.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0">
			<Box
				justify-content="flex-end"
				sm-flex-wrap="wrap"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					empty-min-width="64px"
					empty-border-style="solid"
					padding="16px 16px 16px 16px"
					lg-width="33.333%"
					sm-width="100%"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					width="25%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/69891a2bd788530023e4412f/images/images.jpg?v=2026-02-08T23:51:06.276Z) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Couture Trends to Try Now
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					padding="16px 16px 16px 16px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="25%"
					lg-width="33.333%"
					sm-width="100%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1549298222-1c31e8915347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						W Magazine
					</Text>
					<Text color="--lightD2" as="p" margin="20px 0 5px 0">
						A Visual Diary of Couture Week
					</Text>
				</Box>
				<Box
					width="25%"
					lg-width="33.333%"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					padding="16px 16px 16px 16px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Box background="url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" height="0" margin="0 0 20px 0" padding-bottom="100%" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Refinery
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						How Archive Fashion Came to Dominate TikTok
					</Text>
				</Box>
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