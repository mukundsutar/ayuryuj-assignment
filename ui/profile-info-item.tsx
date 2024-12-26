import React from "react";

import { Box } from "./box";
import { Text } from "./text";

interface ProfileInfoItemProps {
	label?: string;
	value?: string;
}

export default function ProfileInfoItem({
	label,
	value,
}: ProfileInfoItemProps) {
	return (
		<Box flexDirection="row" alignItems="center">
			<Text textAlignVertical="center" color="secondaryText">
				{label}:&nbsp;
				<Text
					fontSize={18}
					variant="medium"
					textBreakStrategy="balanced"
				>
					{value ? value : "-"}
				</Text>
			</Text>
		</Box>
	);
}
