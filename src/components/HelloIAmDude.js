import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"color": "--dark",
	"margin": "0px 0px 0px 0px",
	"font": "normal 400 40px/1.5 georgia",
	"flex": "0 1 auto",
	"children": "Garren Simons"
};
const overrides = {};

const HelloIAmDude = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelloIAmDude, { ...Text,
	defaultProps,
	overrides
});
export default HelloIAmDude;