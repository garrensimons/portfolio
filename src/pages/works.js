import React from "react";
import theme from "theme";
import { Theme, Link, Structure, Button, Section, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"works"} />
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
			<Structure align-self="auto" flex-wrap="nowrap" margin="20px 0px 0px 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Button
							type="link"
							href="#sculptures"
							background="#749b3a"
							color="#000000"
							text-decoration-line="initial"
							border-radius="80px"
							box-shadow="5px 4px 2px 1px #0d5e35"
							font="normal 400 28px/1.5 &quot;Inter&quot;, sans-serif"
						>
							Sculptures
						</Button>
					</Override>
					<Override slot="cell-1">
						<Button
							type="link"
							href="#traditional"
							background="#749b3a"
							color="#000000"
							text-decoration-line="initial"
							border-radius="80px"
							box-shadow="5px 4px 2px 1px #0d5e35"
							font="normal 400 28px/1.5 &quot;Inter&quot;, sans-serif"
						>
							Traditional
						</Button>
					</Override>
					<Override slot="cell-2">
						<Button
							type="link"
							href="#figure"
							background="#749b3a"
							color="#000000"
							text-decoration-line="initial"
							border-radius="80px"
							box-shadow="5px 4px 2px 1px #0d5e35"
							font="normal 400 28px/1.5 &quot;Inter&quot;, sans-serif"
						>
							Figure
						</Button>
					</Override>
					<Override slot="Cell 0th" text-align="center" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Sculptures" id="sculptures" margin="250px 0 0 0">
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="60px sans-serif" padding="0px 0px 0px 400px">
					Sculptures
				</Text>
			</Box>
			<Structure cells-number-total="3" quarkly-title="Us bust">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="300px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Armadillo">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							width="500px"
							height="656.333px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18:37:03.570Z"
							display="block"
							width="500px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Icon head">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18:37:03.564Z"
							display="block"
							width="500px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18:37:03.579Z"
							display="block"
							width="500px"
							height="685.698px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="300px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Cup">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18:37:03.563Z"
							display="block"
							width="500px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18:37:03.570Z"
							display="block"
							width="500px"
							height="347.75px"
							padding="0px px 0px px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="100px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Traditional" id="traditional">
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="60px sans-serif" padding="0px 0px 0px 400px">
					Traditional
				</Text>
			</Box>
			<Structure cells-number-total="2" quarkly-title="No choice" margin="0px 0px 0px 250px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="300px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="300px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="&quot;Alien&quot;" margin="0px 0px 0px 250px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							width="500px"
							height="656.333px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="&quot;Eat The ____!&quot;" margin="0px 0px 0px 250px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							width="500px"
							height="656.333px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Verdaccio" margin="0px 0px 0px 250px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							width="500px"
							height="656.333px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="250px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Figure studies" id="figure">
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="60px sans-serif" padding="0px 0px 0px 400px">
					Figure Studies
				</Text>
			</Box>
			<Structure cells-number-total="3" quarkly-title="Us bust">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="200px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="100px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Us bust">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="200px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="100px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Us bust">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="200px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="100px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Us bust">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="500px"
							height="707.948px"
							transform="scaleX(1)"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="200px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="100px 0px 0px 0px"
						>
							"Untittled{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
				</Override>
			</Structure>
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