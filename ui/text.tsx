import { createText } from "@shopify/restyle";
import React from "react";

import type { TTHEME } from "./config";

export const TextPrimitive = createText<TTHEME>();

export type TextProps = React.ComponentProps<typeof TextPrimitive>;

export function Text({ allowFontScaling = false, ...props }: TextProps) {
	return <TextPrimitive allowFontScaling={allowFontScaling} {...props} />;
}
