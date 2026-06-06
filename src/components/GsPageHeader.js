import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Structure, Section } from "@quarkly/widgets";
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
			"slot": "cell-0",
			"children": <Link
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
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "cell-1",
			"children": <Link
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
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "cell-2",
			"children": <Link
				href="/artist-statement"
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
			"justify-content": "space-between"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "cell-3",
			"children": <Link
				href="/artist-statement"
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
			"justify-content": "flex-end",
			"flex-direction": "row"
		}
	},
	"overrideOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Cell 0",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"flex-direction": "row"
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
			"margin": "0px 0px 0px 35px"
		}
	},
	"overrideOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Cell 3",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"flex-direction": "row"
		}
	},
	"overrideOverride9": {
		"kind": "Override",
		"props": {
			"slot": "Cell 1",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-end",
			"flex-direction": "row",
			"margin": "0px 0px 0px 90px",
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

const GsPageHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" justify-content="space-between" position="fixed" />
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

Object.assign(GsPageHeader, { ...Section,
	defaultProps,
	overrides
});
export default GsPageHeader;