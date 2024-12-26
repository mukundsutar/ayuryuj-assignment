import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ScrollView } from "react-native";

import { api } from "../../lib/axios-config";
import { specialization } from "../../lib/data";
import type { TDoctorListing } from "../../lib/types/users";
import { Box } from "../../ui/box";
import { Button } from "../../ui/button";
import DoctorInfo from "../../ui/doctor-info";
import { Text } from "../../ui/text";
import TextField from "../../ui/text-input";

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

	return (
		<ScrollView style={{ flex: 1 }}>
			<Box p={4} pb={0}>
				<Box flexDirection="row" mb={4} gap={2}>
					<TextField
						value={text}
						setValue={setText}
						backgroundC="white"
						flex={1}
						placeholder="Search for Doctor"
					/>
					<Button>Search</Button>
				</Box>
				{usersData && usersData.length >= 1 ? (
					usersData?.map((i, index) => (
						<DoctorInfo
							key={index}
							{...i}
							specialization={i.specialization}
						/>
					))
				) : isFetched ? (
					<Text>No matching Doctors Found</Text>
				) : (
					<Text>Finding nearby Doctors...</Text>
				)}
			</Box>
		</ScrollView>
	);
}
