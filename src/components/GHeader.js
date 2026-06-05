import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Structure, Section } from "@quarkly/widgets";
import HelloIAmDude from "./HelloIAmDude";
const defaultProps = {
	"quarkly-title": "Header",
	"min-width": "8px",
	"min-height": "8px",
	"width": "1279.2591688368057px",
	"height": "147.82901443142362px",
	"background": "#ffffff",
	"margin": "0 0 0 0px",
	"inner-width": "default",
	"padding": "px px 24px px",
	"position": "fixed",
	"bottom": "2860.172985568576px",
	"left": "0.7408311631943434px",
	"right": "0px",
	"top": "0px"
};
const overrides = {
	"structure": {
		"kind": "Structure",
		"props": {
			"cells-number-total": "4"
		}
	},
	"structureOverride": {
		"kind": "Override",
		"props": {
			"slot": "Content"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "cell-0"
		}
	},
	"helloIAmDude": {
		"kind": "HelloIAmDude",
		"props": {
			"width": "25rem",
			"position": "static",
			"top": "334px",
			"bottom": "auto",
			"left": "330px",
			"right": "auto",
			"white-space": "nowrap",
			"font": "normal 400 50px/1.5 georgia"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "cell-1",
			"children": <Link
				href="#statement"
				color="#000000"
				font="30px --fontFamily-googleNotoSerifGeorgian"
				white-space="nowrap"
				text-decoration-line="initial"
				text-align="center"
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
				href="#statement"
				color="#000000"
				font="30px --fontFamily-googleNotoSerifGeorgian"
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
			"justify-content": "center"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "cell-3",
			"children": <Link
				href="#statement"
				color="#000000"
				font="30px --fontFamily-googleNotoSerifGeorgian"
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
			"justify-content": "center",
			"flex-direction": "row"
		}
	}
};

const GHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" justify-content="space-between" position="fixed" />
		<Structure {...override("structure")}>
			<Override {...override("structureOverride")}>
				<Override {...override("overrideOverride")}>
					<HelloIAmDude {...override("helloIAmDude")} />
				</Override>
				<Override {...override("overrideOverride1")} />
				<Override {...override("overrideOverride2")} />
				<Override {...override("overrideOverride3")} />
				<Override {...override("overrideOverride4")} />
				<Override {...override("overrideOverride5")} />
			</Override>
		</Structure>
		{children}
	</Section>;
};

Object.assign(GHeader, { ...Section,
	defaultProps,
	overrides
});
export default GHeader;