/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, ScrollView } from "react-native";

import { Box } from "../../ui/box";
import { Button } from "../../ui/button";
import type { TTHEME } from "../../ui/config";
import { palette } from "../../ui/config";
import HealthCheckChard from "../../ui/health-check-card";
import ImageCard from "../../ui/image-card";
import { Text } from "../../ui/text";

export default function Home() {
	const imageCardArr = [
		{
			path: require("../../assets/images/person-phone.jpg"),
			title: "Online \nConsultation",
		},
		{
			path: require("../../assets/images/doctor-checkup.jpg"),
			title: "Full Body \nCheckup",
		},
		{
			path: require("../../assets/images/medicines.jpg"),
			title: "Order \nMedicines",
		},
		{
			path: require("../../assets/images/skin-care.jpg"),
			title: "Skincare",
		},
		{
			path: require("../../assets/images/x-ray.jpg"),
			title: "X-rays, MRIs \n& Scans",
		},
		{
			path: require("../../assets/images/lab-tests.jpg"),
			title: "Lab Tests",
		},
	];

	const healthCheckCard: {
		title: string;
		testCount: number;
		ogPrice: number;
		price: number;
		precentage: number;
		bgColor?: keyof TTHEME["colors"];
	}[] = [
		{
			title: "Ayushman Basic Health Check",
			testCount: 76,
			ogPrice: 2600,
			price: 999,
			precentage: 60,
			bgColor: "accentLight",
		},
		{
			title: "Ayushman Vital Health Check",
			testCount: 83,
			ogPrice: 4200,
			price: 1899,
			precentage: 60,
			bgColor: "cardYellow",
		},
	];

	return (
		<ScrollView style={{ backgroundColor: palette.secondaryBg }}>
			<Box
				flex={1}
				flexDirection="row"
				justifyContent="space-evenly"
				flexWrap="wrap"
				gap={4}
				p={4}
			>
				{imageCardArr.map((i, index) => (
					<ImageCard key={index} src={i.path} title={i.title} />
				))}

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Text variant="bold">Frequestly Booked Health Checks</Text>
					<Button borderRadius={32}>View All</Button>
				</Box>

				<Box flexDirection="row" width="100%" gap={4}>
					{healthCheckCard.map((i, index) => (
						<HealthCheckChard key={index} {...i} />
					))}
				</Box>

				{Array(3)
					.fill("")
					.map((_, index) => (
						<Box key={index} width="100%" position="relative">
							<Image
								source={{
									uri: `https://picsum.photos/seed/${index + 1}/1920/1080`,
								}}
								style={{
									width: "100%",
									height: 125,
									borderRadius: 16,
								}}
								resizeMode="cover"
							/>
							<Box
								position="absolute"
								bg="accent2"
								p={2}
								style={{
									transform: [
										{
											translateX: `${-50}%`,
										},
										{
											translateY: `${-50}%`,
										},
									],
								}}
								left="50%"
								top="50%"
							>
								<Text color="accent2Light">
									Place holder banner
								</Text>
							</Box>
						</Box>
					))}
			</Box>
		</ScrollView>
	);
}
