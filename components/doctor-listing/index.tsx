import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native";

import { api } from "../../lib/axios-config";
import type { TDoctorListing } from "../../lib/types/users";
import { Box } from "../../ui/box";
import DoctorInfo from "../../ui/doctor-info";

export default function DoctorListing() {
	const { data } = useQuery({
		queryKey: ["users"],
		queryFn: () => {
			return api.get<TDoctorListing[]>("/users");
		},
	});
	const apiData = data?.data;

	const usersData = apiData?.map((i) => {
		return {
			name: i.name,
			email: i.email,
			address: `${i.address.street}, ${i.address.city}`,
			phone: i.phone,
		};
	});

	return (
		<ScrollView style={{ flex: 1 }}>
			<Box p={4} pb={0}>
				{usersData?.map((i, index) => (
					<DoctorInfo key={index} {...i} />
				))}
			</Box>
		</ScrollView>
	);
}
