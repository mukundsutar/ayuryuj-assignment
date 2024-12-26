import React from "react";

import { Box } from "./box";
import ProfileInfoItem from "./profile-info-item";
import { Text } from "./text";

interface ProfileInfoListProps {
	label: string;
	data: {
		label: string;
		value?: string;
	}[];
}

export default function ProfileInfoList({ label, data }: ProfileInfoListProps) {
	return (
		<Box flexDirection="column">
			<Text
				fontSize={22}
				variant="bold"
				textTransform="uppercase"
				color="accent2"
			>
				{label}
			</Text>
			<Box flexDirection="column">
				{data.map((i, index) => (
					<ProfileInfoItem
						key={index}
						label={i.label}
						value={i.value}
					/>
				))}
			</Box>
		</Box>
	);
}
