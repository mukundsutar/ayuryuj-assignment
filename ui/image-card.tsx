import React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image } from "react-native";

import { Box } from "./box";
import { Text } from "./text";

interface ImageCardProps {
	src: ImageSourcePropType;
	title?: string;
}

export default function ImageCard({ src, title }: ImageCardProps) {
	return (
		<Box position="relative" width="30%">
			<Image
				source={src}
				style={{
					width: 125,
					height: 125,
					borderRadius: 16,
				}}
				resizeMode="cover"
				alt="here"
			/>

			{title ? (
				<Box
					position="absolute"
					bg="accentLight"
					p={0.5}
					borderRadius={2.5}
					top={4}
					left="50%"
					style={{
						transform: [{ translateX: `${-50}%` }],
					}}
				>
					<Text numberOfLines={2} textAlign="center">
						{title}
					</Text>
				</Box>
			) : null}
		</Box>
	);
}
