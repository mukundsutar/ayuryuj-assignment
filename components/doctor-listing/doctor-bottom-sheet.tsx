import type { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useMemo, useRef } from "react";
import Animated from "react-native-reanimated";

import { api } from "../../lib/axios-config";
import type { TDoctorListing } from "../../lib/types/users";
import { Box, PressableBox } from "../../ui/box";
import DoctorInfo from "../../ui/doctor-info";

export default function Doctor() {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const router = useRouter();
	const params = useLocalSearchParams<{ id: string }>();

	const { data } = useQuery({
		queryKey: [`users-${params.id}`, params.id],
		queryFn: ({ queryKey }) => {
			return api.get<TDoctorListing>(`/users/${queryKey[1]}`);
		},
	});
	const apiData = data?.data;

	function CustomBackdrop({ style }: BottomSheetBackdropProps) {
		const containerStyle = useMemo(
			() => [
				style,
				{
					backgroundColor: "#00000066",
					opacity: 0.8,
				},
			],
			[style]
		);

		return (
			<Animated.View style={containerStyle}>
				<PressableBox
					flex={1}
					onPress={() => {
						router.back();
					}}
				></PressableBox>
			</Animated.View>
		);
	}

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={0}
			snapPoints={["35%"]}
			enablePanDownToClose
			onClose={() => {
				router.back();
			}}
			backdropComponent={CustomBackdrop}
		>
			<BottomSheetView>
				{apiData ? (
					<Box height="100%">
						<DoctorInfo
							id={Number(apiData?.id)}
							name={apiData?.name}
							email={apiData?.email}
							address={`${apiData?.address.street}, ${apiData?.address.city}`}
							phone={apiData?.phone}
						/>
					</Box>
				) : null}
			</BottomSheetView>
		</BottomSheet>
	);
}
