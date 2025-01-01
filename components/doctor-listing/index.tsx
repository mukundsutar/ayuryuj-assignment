import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import { api } from "../../lib/axios-config";
import { specialization } from "../../lib/data";
import type { TDoctorListing } from "../../lib/types/users";
import { Box } from "../../ui/box";
import DoctorInfo from "../../ui/doctor-info";
import OfferCard from "../../ui/offer-card";
import SearchField from "../../ui/search";
import { Text } from "../../ui/text";

export default function DoctorListing() {
	const [text, setText] = useState<string>("");

	const { data, isFetched } = useQuery({
		queryKey: ["users"],
		queryFn: () => {
			return api.get<TDoctorListing[]>("/users");
		},
	});
	const apiData = data?.data;

	const usersData = apiData
		?.map((i, index) => {
			return {
				id: i.id,
				name: i.name,
				email: i.email,
				address: `${i.address.street}, ${i.address.city}`,
				phone: i.phone,
				specialization: specialization[index],
			};
		})
		.filter((i) => {
			if (!text) return true;

			if (!i?.name || !i?.address || !i?.phone || !i?.specialization)
				return false;

			const searchTerm = text.toLowerCase();
			return (
				i.name.toLowerCase().includes(searchTerm) ||
				i.address.toLowerCase().includes(searchTerm) ||
				i.phone.toLowerCase().includes(searchTerm) ||
				i.specialization.toLowerCase().includes(searchTerm)
			);
		});

	const renderItem = ({
		item,
	}: {
		item: {
			id: number;
			name: string;
			email: string;
			address: string;
			phone: string;
			specialization: string;
		};
	}) => {
		return <DoctorInfo {...item} />;
	};

	return (
		<Box flex={1} py={4} mb={42} bg="primaryBg">
			<Box flexDirection="row" mb={4} gap={2} px={4}>
				<SearchField
					value={text}
					setValue={setText}
					backgroundC="white"
					flex={1}
					placeholder="Search for Doctor"
					borderRadius="full"
					inputHeight={44}
				/>
			</Box>

			<Box bg="tertiaryBg" px={4} pt={4}>
				<Box flexDirection="row">
					<ScrollView horizontal>
						<Box flexDirection="row" gap={2} pb={2}>
							<OfferCard amount={250} />
							<OfferCard amount={100} />
							<OfferCard amount={300} />
						</Box>
					</ScrollView>
				</Box>

				<Box my={4} mt={8}>
					<Text variant="medium">Show earlier available doctors</Text>
				</Box>

				{usersData && usersData.length >= 1 ? (
					<FlatList data={usersData} renderItem={renderItem} />
				) : isFetched ? (
					<Box minHeight="100%">
						<Text>No matching Doctors Found</Text>
					</Box>
				) : (
					<Box minHeight="100%">
						<Text>Finding nearby Doctors...</Text>
					</Box>
				)}
			</Box>
		</Box>
	);
}
