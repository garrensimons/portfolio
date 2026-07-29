import React from "react";
import theme from "theme";
import { Theme, Link, Button, Structure, Text, Box, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
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
		<Components.RelativeHeader />
		<Structure
			align-self="auto"
			flex-wrap="nowrap"
			margin="13vw 0px 0px 0px"
			position="fixed"
			quarkly-title="Nav"
			sm-position="fixed"
			padding="0 0px 24px 0px"
		>
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
						font="normal 400 1.5vw/1.5 &quot;Inter&quot;, sans-serif"
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
						font="normal 400 1.5vw/1.5 &quot;Inter&quot;, sans-serif"
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
						font="normal 400 1.5vw/1.5 &quot;Inter&quot;, sans-serif"
					>
						Figure
					</Button>
				</Override>
				<Override slot="Cell 0th" text-align="center" />
			</Override>
		</Structure>
		<Section quarkly-title="Sculptures" id="sculptures" justify-content="flex-start">
			<Override slot="SectionContent" />
			<Box min-width="100px" min-height="15vw" margin="15vw 0px 0px 0px">
				<Text color="#ffffff" font="6vw sans-serif" text-align="center" margin="5vw 0px 16px 0px">
					Sculptures
				</Text>
			</Box>
			<Structure cells-number-total="3" quarkly-title="Us bust" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px auto 0px .1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18:37:03.597Z"
							display="block"
							width="34vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7924.jpeg?v=2026-06-03T18%3A37%3A03.597Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18:37:03.595Z"
							display="block"
							margin="0px 0px 0px px"
							height="54vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7927.jpeg?v=2026-06-03T18%3A37%3A03.595Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							margin="4vw 0px 4vw 0px"
						>
							"Us"
							<br />
							Size:{" "}
							<br />
							8" x 7" x 13 1/2"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 1" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="ARMADILLO 2" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px auto 0px .1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18:37:03.591Z"
							display="block"
							height="50vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7950.jpeg?v=2026-06-03T18%3A37%3A03.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18:37:03.570Z"
							display="block"
							margin="0px 0px 0px px"
							height="50vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7948.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							margin="4vw 0px 4vw 0px"
						>
							"Armadillo"
							<br />
							Size:{" "}
							<br />
							5" x 6" x 6"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 1" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Icon Head 2" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px auto 0px .1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18:37:03.564Z"
							display="block"
							height="50vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7932.jpeg?v=2026-06-03T18%3A37%3A03.564Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18:37:03.579Z"
							display="block"
							margin="0px 0px 0px px"
							height="50vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7934.jpeg?v=2026-06-03T18%3A37%3A03.579Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							margin="4vw 0px 4vw 0px"
						>
							"Icon"
							<br />
							Size:{" "}
							<br />
							8" x 7 1/2" x 11"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 1" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="Cup" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18:37:03.563Z"
							display="block"
							width="37vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7941.jpeg?v=2026-06-03T18%3A37%3A03.563Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18:37:03.570Z"
							display="block"
							width="36vw"
							padding="0px px 0px px"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7943.jpeg?v=2026-06-03T18%3A37%3A03.570Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="10vw 0px 10vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
						>
							"Stable"{" "}
							<br />
							Size:
							<br />
							10" x 4 1/2" x 6"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -6vw" />
					<Override slot="Cell 0th" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Traditional" id="traditional" margin="10vw 0 0 0">
			<Box min-width="100px" min-height="15vw" margin="15vw 0px 0px 0px">
				<Text color="#ffffff" font="6vw sans-serif" text-align="center" margin="5vw 0px 16px 0px">
					Traditional
				</Text>
			</Box>
			<Structure cells-number-total="2" quarkly-title="No choice" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" sm-margin="0px 18.625px 0px 0.1vw" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19:25:57.520Z"
							display="block"
							width="70vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7645%20%281%29.jpeg?v=2026-06-10T19%3A25%3A57.520Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							margin="20vw 0px 20vw 0px"
							sm-margin="20vw 0px 20vw 0px"
						>
							"No Choice"{" "}
							<br />
							Size: 8" x 11 1/4"
							<br />
							(artwork)
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
					<Override slot="Cell 0" sm-width="70vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Alien" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" sm-margin="0px 18.625px 0px 0.1vw" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19:27:15.743Z"
							display="block"
							width="70vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7979.jpeg?v=2026-06-10T19%3A27%3A15.743Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							margin="20vw 0px 20vw 0px"
							sm-margin="20vw 0px 20vw 0px"
						>
							"Alien"{" "}
							<br />
							Size: 24" x 17 1/2"
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
					<Override slot="Cell 0" sm-width="70vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="&quot;Eat The ____!&quot;" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19:30:19.012Z"
							display="block"
							width="70vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7993.jpeg?v=2026-06-10T19%3A30%3A19.012Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="20vw 0px 20vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
						>
							"Eat The ____!"{" "}
							<br />
							Size: 11 1/4" x 8 1/2"
							<br />
							(artwork)
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
					<Override slot="Cell 0" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Verdaccio" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19:52:07.353Z"
							display="block"
							height="70vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/Verdaccio%202.png?v=2026-06-13T19%3A52%3A07.353Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="20vw 0px 20vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw  sans-serif"
							white-space="nowrap"
						>
							"Verdaccio"{" "}
							<br />
							Size: 12" x 12"
							<br />
							(circular)
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
			<Structure cells-number-total="2" quarkly-title="responsibility" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" sm-height="77vw" height="77vw" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19:25:57.548Z"
							display="block"
							height="77vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7642%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.548Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="30vw 0px 30vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw  sans-serif"
							white-space="nowrap"
						>
							"Responsibility"{" "}
							<br />
							Size: 5" x 8" (artwork)
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
					<Override slot="Cell 0" height="77vw" />
					<Override slot="Cell 0th" height="750px" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="still life" margin="0px 0px 0px 1vw" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19:25:57.486Z"
							display="block"
							height="78.5vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7650.jpeg?v=2026-06-10T19%3A25%3A57.486Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="30vw 0px 30vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw  sans-serif"
							white-space="nowrap"
						>
							"Still life"{" "}
							<br />
							Size: 18" x 24"
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
					<Override slot="Cell 0" height="79vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="dreamer" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19:25:57.526Z"
							display="block"
							height="77vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7647%20%282%29.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="30vw 0px 30vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw  sans-serif"
							white-space="nowrap"
						>
							"Dreamer"
							<br />
							Size: 22" x 30"
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
					<Override slot="Cell 0" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="seafood boil" padding="1vw 0px 1vw 0px">
				<Override slot="Content" margin="0px 57.6042px 0px 0.1vw">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19:25:57.526Z"
							display="block"
							height="70vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7991.jpeg?v=2026-06-10T19%3A25%3A57.526Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Text
							margin="30vw 0px 30vw 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw  sans-serif"
							white-space="nowrap"
						>
							"Seafood boil"
							<br />
							Size: 18" x 22"
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
					<Override slot="Cell 0" />
				</Override>
			</Structure>
		</Section>
		<Section quarkly-title="Figure studies" id="figure" margin="15vw 0 0 0">
			<Box min-width="100px" min-height="15vw" margin="15vw 0px 0px 0px">
				<Text color="#ffffff" font="6vw sans-serif" text-align="center" margin="5vw 0px 16px 0px">
					Figure Studies
				</Text>
			</Box>
			<Structure cells-number-total="3" quarkly-title="stare &quot;2&quot;" padding="0 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19:25:57.489Z"
							display="block"
							width="39vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7989.jpeg?v=2026-06-10T19%3A25%3A57.489Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7988.jpeg?v=2026-06-10T19:25:57.486Z"
							display="block"
							width="39vw"
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
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="15vw 0px 0px 0px"
						>
							"Lethargy"{" "}
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="10vw 0px 0px 0px"
						>
							"Dread"
							<br />
							Size:
							<br />
							18" x 23 1/2"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -7vw" sm-margin="0px 0px 0px -7vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 2" sm-margin="0px 0px 0px -2.5vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="sit &quot;2&quot;" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20:01:53.954Z"
							display="block"
							width="39vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7981.jpeg?v=2026-06-10T20%3A01%3A53.954Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20:01:53.984Z"
							display="block"
							width="39vw"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7982.jpeg?v=2026-06-10T20%3A01%3A53.984Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="15vw 0px 0px 0px"
						>
							"Poised"{" "}
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="10vw 0px 0px 0px"
						>
							"Controlled"
							<br />
							Size: 18" x 24"{" "}
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -7vw" sm-margin="0px 0px 0px -7vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 2" sm-margin="0px 0px 0px -2.5vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="lay &quot;2&quot;" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20:01:53.970Z"
							display="block"
							width="39vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7983.jpeg?v=2026-06-10T20%3A01%3A53.970Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20:01:53.964Z"
							display="block"
							width="39vw"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7984.jpeg?v=2026-06-10T20%3A01%3A53.964Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="15vw 0px 0px 0px"
						>
							"Mid day nap"{" "}
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="10vw 0px 0px 0px"
						>
							"Drifter"
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -7vw" sm-margin="0px 0px 0px -7vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 2" sm-margin="0px 0px 0px -2.5vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="3" quarkly-title="stand &quot;2&quot;" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20:01:53.969Z"
							display="block"
							width="39vw"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7987.jpeg?v=2026-06-10T20%3A01%3A53.969Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20:04:10.591Z"
							display="block"
							width="39vw"
							margin="0px 0px 0px px"
							srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8002.jpeg?v=2026-06-10T20%3A04%3A10.591Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Override>
					<Override slot="cell-2">
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="15vw 0px 0px 0px"
						>
							"Stable"{" "}
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							border-color="#000000"
							color="#ffffff"
							font="2.5vw sans-serif"
							white-space="nowrap"
							padding="10vw 0px 0px 0px"
						>
							"In thought"
							<br />
							Size: 18" x 24"
							<br />
							Date: 2026
						</Text>
					</Override>
					<Override slot="Cell 0" margin="0px 0px 0px -7vw" sm-margin="0px 0px 0px -7vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -1.5vw" />
					<Override slot="Cell 2" sm-margin="0px 0px 0px -2.5vw" />
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Long standing" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19:25:57.471Z"
								display="block"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7990.jpeg?v=2026-06-10T19%3A25%3A57.471Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Society"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20:01:54.067Z"
								display="block"
								margin="0px 0px 0px px"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7998.jpeg?v=2026-06-10T20%3A01%3A54.067Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Lookout"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0" margin="0px 0px 0px -7.5vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -2vw" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Long sitting" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20:01:53.994Z"
								display="block"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7996.jpeg?v=2026-06-10T20%3A01%3A53.994Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Relaxed"
								<br />
								Size: 24" x 18"
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
								margin="0px 0px 0px px"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_8003.jpeg?v=2026-06-10T20%3A01%3A53.958Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Free"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0" margin="0px 0px 0px -7.5vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -2vw" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Long sitting &quot;2&quot;" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20:01:53.966Z"
								display="block"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7997.jpeg?v=2026-06-10T20%3A01%3A53.966Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Nude Beach"
								<br />
								Size: 24" x 18"
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
								margin="0px 0px 0px px"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7999.jpeg?v=2026-06-10T20%3A01%3A53.945Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Lounge"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0" margin="0px 0px 0px -7.5vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -2vw" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
				</Override>
			</Structure>
			<Structure cells-number-total="2" quarkly-title="Long sitting &quot;3&quot;" padding="1vw 0px 1vw 0px">
				<Override slot="Content">
					<Override slot="cell-0">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20:01:54.000Z"
								display="block"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7994.jpeg?v=2026-06-10T20%3A01%3A54.000Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Disagreement"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-1">
						<Box min-width="100px" min-height="100px">
							<Image
								src="https://uploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19:25:57.549Z"
								display="block"
								margin="0px 0px 0px px"
								width="47.5vw"
								srcSet="https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/69891a2bd788530023e4412f/images/IMG_7985.jpeg?v=2026-06-10T19%3A25%3A57.549Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								border-color="#000000"
								color="#ffffff"
								font="2.5vw sans-serif"
								white-space="nowrap"
								margin="4vw 0px 4vw 0px"
							>
								"Intamate"
								<br />
								Size: 24" x 18"
								<br />
								Date: 2026
							</Text>
						</Box>
					</Override>
					<Override slot="cell-2" />
					<Override slot="Cell 0" margin="0px 0px 0px -7.5vw" />
					<Override slot="Cell 1" sm-margin="0px 0px 0px -2vw" />
					<Override slot="Cell 0th" justify-self="start" />
					<Override
						slot="Cell 2"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						flex-direction="row"
						align-self="center"
					/>
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