import React from "react";

import { Box, PressableBox } from "./box";
import { Text } from "./text";

interface DrawerListProps {
	label: string;
	data: { title: string; icon: React.ReactNode }[];
	size: number;
}

export default function DrawerList({ label, data, size }: DrawerListProps) {
	return (
		<Box gap={2} px={4}>
			<Text variant="bold" fontSize={20} textTransform="uppercase">
				{label}
			</Text>
			{data.map((item, index) => (
				<PressableBox
					key={index}
					flexDirection="row"
					alignItems="center"
					mb={4}
					gap={2}
				>
					<Box width={size}>{item.icon}</Box>
					<Text fontSize={20} color="secondaryText">
						{item.title}
					</Text>
				</PressableBox>
			))}
		</Box>
	);
}
