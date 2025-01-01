import { useState } from "react";
import { ScrollView } from "react-native";

import { Box } from "../../ui/box";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import SymptomToggle from "./symptom-toggle";
import SymptomsSearch from "./symtoms-search";

export default function Symptoms() {
	const [value, setValue] = useState<string>("");
	const [arr, setArr] = useState<string[]>([]);

	const allSymptomsArr = [
		"Fever",
		"Dark Circles",
		"Acne",
		"Loose motion/Diarrhea",
		"Blocked Nose",
		"Heartburn",
		"Runny nose",
		"Cough",
		"Itching",
		"Hairfall",
		"Headache",
		"Abdominal pain",
		"Vomiting",
		"Spots on skin",
		"Constipation",
		"Obesity",
		"Throat pain",
		"Dry Skin",
		"Rashes",
		"Gas",
		"Sneezing",
		"Erectile Dysfunction",
	];

	const symptomsArr = allSymptomsArr.filter((i) => {
		if (value.length >= 3) {
			return i.includes(value);
		} else {
			return i;
		}
	});

	return (
		<Box flex={1} p={4} bg="white" gap={4}>
			<Text variant="medium" fontSize={24}>
				What is your concern?
			</Text>

			<Box>
				<SymptomsSearch
					value={value}
					setValue={setValue}
					inputHeight={50}
					placeholder="Search for symptoms, e.g. fever"
				/>
			</Box>
			<Box flexDirection="row" alignItems="center">
				<Box width="50%">
					<Text variant="medium" fontSize={18} color="accent2Light">
						Most Selected Issues
					</Text>
				</Box>
				<Box
					flex={1}
					borderBottomWidth={1.75}
					borderColor="accent2Light"
					maxHeight={0}
				/>
			</Box>

			<ScrollView>
				<Box
					flexDirection="row"
					flexWrap="wrap"
					columnGap={2}
					rowGap={4}
					justifyContent="space-evenly"
					alignItems="flex-start"
				>
					{symptomsArr.map((i, index) => (
						<SymptomToggle
							key={index}
							label={i}
							checkedArr={arr}
							setChecked={setArr}
						/>
					))}
				</Box>
			</ScrollView>

			<Button
				disabled={arr.length >= 1 ? false : true}
				height={60}
				borderRadius={16}
			>
				Choose Doctor
			</Button>
		</Box>
	);
}
