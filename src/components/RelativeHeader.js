import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Structure, Section } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Header",
	"min-width": "8px",
	"min-height": "60px",
	"width": "100vw",
	"height": "10vw",
	"background": "#ffffff",
	"margin": "0 0 0 0px",
	"padding": "px px 2.4vw px",
	"position": "fixed",
	"bottom": "auto",
	"left": "auto",
	"sm-top": "0px",
	"sm-right": "auto",
	"sm-bottom": "auto",
	"sm-left": "0px"
};
const overrides = {
	"structure": {
		"kind": "Structure",
		"props": {
			"cells-number-total": "4",
			"width": "100%",
			"padding": "1.2rem 0px 24px 0px"
		}
	},
	"structureOverride": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"sm-overflow": "visible",
			"width": "auto"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "cell-0",
			"children": <Link
				href="/index"
				color="#000000"
				font="5vw --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
				link-href="/artist-statement"
				width="auto"
			>
				Garren Simons
			</Link>
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "cell-1",
			"children": <Link
				href="/artist-statement"
				color="#000000"
				font="1.8vw --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
				link-href="/artist-statement"
			>
				Artist Statement
			</Link>
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "cell-2",
			"children": <Link
				href="/works"
				color="#000000"
				font="1.8vw --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
			>
				Works
			</Link>
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Cell 0th",
			"text-align": "left",
			"align-items": "center",
			"display": "flex",
			"flex-direction": "row",
			"justify-content": "space-between",
			"sm-width": "auto",
			"width": "auto",
			"margin": "0px 0px 0px 5vw"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "cell-3",
			"children": <Link
				href="/about"
				color="#000000"
				font="1.8vw --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
			>
				About
			</Link>
		}
	},
	"overrideOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Cell",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-end",
			"flex-direction": "row",
			"margin": "0px 0px 0px 5vw"
		}
	},
	"overrideOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Cell 0",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"flex-direction": "row",
			"margin": "0px 0px 0px 4vw"
		}
	},
	"overrideOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Cell 2",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"flex-direction": "row",
			"margin": "0px 0px 0px 2vw"
		}
	},
	"overrideOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Cell 3",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"flex-direction": "row",
			"margin": "0px 0px 0px 1vw"
		}
	},
	"overrideOverride9": {
		"kind": "Override",
		"props": {
			"slot": "Cell 1",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"flex-direction": "row",
			"margin": "0px 0px 0px 6vw",
			"padding": "0px 0px 0px 0px"
		}
	},
	"overrideOverride10": {
		"kind": "Override",
		"props": {
			"slot": "cell-4",
			"children": <Link
				href="/artist-statement"
				color="#000000"
				font="30px --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
			>
				Contact
			</Link>
		}
	}
};

const RelativeHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			align-items="flex-start"
			justify-content="space-between"
			position="fixed"
			width="100%"
		/>
		<Structure {...override("structure")}>
			<Override {...override("structureOverride")}>
				<Override {...override("overrideOverride")} />
				<Override {...override("overrideOverride1")} />
				<Override {...override("overrideOverride2")} />
				<Override {...override("overrideOverride3")} />
				<Override {...override("overrideOverride4")} />
				<Override {...override("overrideOverride5")} />
				<Override {...override("overrideOverride6")} />
				<Override {...override("overrideOverride7")} />
				<Override {...override("overrideOverride8")} />
				<Override {...override("overrideOverride9")} />
				<Override {...override("overrideOverride10")} />
			</Override>
		</Structure>
		{children}
	</Section>;
};

Object.assign(RelativeHeader, { ...Section,
	defaultProps,
	overrides
});
export default RelativeHeader;