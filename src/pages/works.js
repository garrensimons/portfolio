import React from "react";
import theme from "theme";
import { Theme, Link, Structure, Button, Section, Box, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"works"} />
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
			<Structure align-self="auto" flex-wrap="nowrap" margin="-45px 0px 0px 0px">
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
							font="normal 400 18px/1.5 &quot;Inter&quot;, sans-serif"
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
							font="normal 400 18px/1.5 &quot;Inter&quot;, sans-serif"
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
							font="normal 400 18px/1.5 &quot;Inter&quot;, sans-serif"
						>
							Figure
						</Button>
					</Override>
					<Override slot="Cell 0th" text-align="center" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Sculptures" id="sculptures">
			<Box min-width="100px" min-height="100px" height="200px" />
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
							height="707px"
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
					<Override slot="Cell 0" width="500px" margin="0px 0px 0px -60px" />
					<Override slot="Cell 1" width="500px" />
					<Override slot="Cell 0th" margin="0px 0px 0px -px" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Armadillo">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							height="665px"
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
					<Override slot="Cell 0" margin="0px 0px 0px -25px" />
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
					<Override slot="Cell 0" margin="0px 0px 0px -20px" />
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
					<Override slot="Cell 0" margin="0px 0px 0px -20px" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Traditional" id="traditional" margin="250px 0 0 0">
			<Box min-width="100px" min-height="100px" height="200px" />
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="60px sans-serif" padding="0px 0px 0px 400px">
					Traditional
				</Text>
			</Box>
			<Structure cells-number-total="2" quarkly-title="No choice" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19:25:57.520Z"
							display="block"
							width="900px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=3200 3200w"
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
							"No Choice"{" "}
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
					<Override slot="Cell 0" width="900px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="&quot;Alien&quot;" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19:27:15.743Z"
							display="block"
							width="900px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=3200 3200w"
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
							"Alien"
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
					<Override slot="Cell 0" width="900px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="&quot;Eat The ____!&quot;" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19:30:19.012Z"
							display="block"
							width="900px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=3200 3200w"
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
							"Eat The ____!"{" "}
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
					<Override slot="Cell 0" width="900px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Verdaccio" margin="0px 0px 0px 10px">
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
			<Structure cells-number-total="2" quarkly-title="responsibility" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19:25:57.548Z"
							display="block"
							height="1000px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=3200 3200w"
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
							"Responsibility"{" "}
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
					<Override slot="Cell 0" height="1000px" />
					<Override slot="Cell 0th" height="750px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="still life" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19:25:57.486Z"
							display="block"
							height="1000px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=3200 3200w"
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
							"Still life"{" "}
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
					<Override slot="Cell 0" height="1000px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="dreamer" margin="0px 0px 0px 10px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19:25:57.526Z"
							display="block"
							height="1000px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=3200 3200w"
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
							"Dreamer"
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
					<Override slot="Cell 0" height="1000px" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Figure studies" id="figure" margin="250px 0 0 0">
			<Box min-width="100px" min-height="100px" height="200px" />
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="60px sans-serif" padding="0px 0px 0px 400px">
					Figure Studies
				</Text>
			</Box>
			<Structure cells-number-total="3" quarkly-title="stare">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19:25:57.489Z"
							display="block"
							width="500px"
							position="static"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19:25:57.486Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=3200 3200w"
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
							"Lethargy"{" "}
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
							"Dread"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" position="static" margin="0px 0px 0px -30px" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="sit">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19:39:57.493Z"
							display="block"
							width="500px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T19%3A39%3A57.493Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19:39:57.686Z"
							display="block"
							width="495px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T19%3A39%3A57.686Z&quality=85&w=3200 3200w"
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
							"Poised"{" "}
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
							"controlled"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -30px" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="lay">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19:39:57.533Z"
							display="block"
							width="495px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T19%3A39%3A57.533Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19:39:57.543Z"
							display="block"
							width="500px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T19%3A39%3A57.543Z&quality=85&w=3200 3200w"
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
							"Mid day nap"{" "}
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
							"Drifter"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -30px" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="stand">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19:39:57.506Z"
							display="block"
							width="500px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T19%3A39%3A57.506Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20:04:10.591Z"
							display="block"
							width="510px"
							margin="px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=3200 3200w"
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
							"Protector"{" "}
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
							"Lady-like"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 2" margin="0px 0px 0px -10px" />
					<Override slot="Cell 0" margin="0px 0px 0px -30px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="long standing">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19:25:57.471Z"
								display="block"
								width="620px"
								height="465px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								margin="0px 0px 0px 0px"
								border-color="#000000"
								color="#ffffff"
								font="28px sans-serif"
								white-space="nowrap"
								padding="x 0px 0px 0px"
							>
								"Role"
								<br />
								Size: 11 x 9 in
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px" width="620px" height="465px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20:01:54.067Z"
								display="block"
								width="610px"
								margin="px 0px 0px px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="x 0px 0px 0px"
						>
							"lookout"{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0th" margin="0px 0px 0px 0px" />
					<Override slot="Cell 0" margin="0px 0px 0px -50px" />
					<Override slot="Cell 1" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="long sitting">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20:01:53.994Z"
								display="block"
								width="620px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								margin="0px 0px 0px 0px"
								border-color="#000000"
								color="#ffffff"
								font="28px sans-serif"
								white-space="nowrap"
								padding="x 0px 0px 0px"
							>
								"Relaxed"
								<br />
								Size: 11 x 9 in
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20:01:53.958Z"
								display="block"
								width="610px"
								margin="px 0px 0px px"
								height="465px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="x 0px 0px 0px"
						>
							"Free"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0th" margin="0px 0px 0px 0px" />
					<Override slot="Cell 0" margin="0px 0px 0px -50px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="long sitting 2">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20:01:53.966Z"
								display="block"
								width="620px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								margin="0px 0px 0px 0px"
								border-color="#000000"
								color="#ffffff"
								font="28px sans-serif"
								white-space="nowrap"
								padding="x 0px 0px 0px"
							>
								"Nude Beach"
								<br />
								Size: 11 x 9 in
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20:01:53.945Z"
								display="block"
								width="620px"
								margin="px 0px 0px px"
								height="475px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="x 0px 0px 0px"
						>
							"lounge"
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0th" margin="0px 0px 0px 0px" />
					<Override slot="Cell 0" margin="0px 0px 0px -50px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="long sitting 3">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20:01:54.000Z"
								display="block"
								width="620px"
								height="443px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								margin="0px 0px 0px 0px"
								border-color="#000000"
								color="#ffffff"
								font="28px sans-serif"
								white-space="nowrap"
								padding="x 0px 0px 0px"
							>
								"Disagreement"{" "}
								<br />
								Size: 11 x 9 in
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px" height="443px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19:25:57.549Z"
								display="block"
								width="610px"
								margin="px 0px 0px px"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="28px sans-serif"
							white-space="nowrap"
							padding="x 0px 0px 0px"
						>
							"Intamate"{" "}
							<br />
							Size: 11 x 9 in
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0th" margin="0px 0px 0px 0px" />
					<Override slot="Cell 0" margin="0px 0px 0px -55px" />
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