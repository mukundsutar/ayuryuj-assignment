import Fontisto from "@expo/vector-icons/Fontisto";
import React, { useState } from "react";

import { Box, PressableBox } from "../../ui/box";
import { Text } from "../../ui/text";

interface SymptomToggleProps {
	label: string;
	checkedArr: string[];
	setChecked: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SymptomToggle({
	label = "Fever",
	checkedArr,
	setChecked,
}: SymptomToggleProps) {
	const [toggle, setToggle] = useState<boolean>(false);

	function handleCheckedArr() {
		if (!toggle && !checkedArr.includes(label)) {
			setChecked((prev) => [...prev, label]);
		} else {
			const tempArr = checkedArr.filter((i) => {
				return i !== label;
			});

			setChecked(tempArr);
		}
	}

	return (
		<PressableBox
			flexDirection="row"
			gap={4}
			bg={toggle ? "accentLight" : "secondaryBg"}
			p={2}
			alignItems="center"
			width="47%"
			borderRadius={10}
			onPress={() => {
				setToggle(!toggle);
				handleCheckedArr();
			}}
		>
			<Box p={2} bg="white" borderRadius={10} elevation={3}>
				<Fontisto name="thermometer-alt" size={24} color="black" />
			</Box>
			<Box>
				<Text variant="medium">{label}</Text>
			</Box>
		</PressableBox>
	);
}
