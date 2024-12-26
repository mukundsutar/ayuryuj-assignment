import React from "react";
import { Image } from "react-native";

import { Box } from "./box";
import { Text } from "./text";

interface AvatarProps {
	seed: number;
	title?: string;
}

export default function Avatar({ seed, title }: AvatarProps) {
	return (
		<Box
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width={70}
			gap={4}
			mr={4}
			ml={seed == 1 ? 4 : 0}
		>
			<Image
				source={{
					uri: `https://avatar.iran.liara.run/public/${seed}`,
				}}
				style={{ width: 70, height: 70 }}
			/>
			<Text
				color="white"
				mx="auto"
				textAlign="center"
				ellipsizeMode="tail"
				numberOfLines={1}
			>
				{title}
			</Text>
		</Box>
	);
}
