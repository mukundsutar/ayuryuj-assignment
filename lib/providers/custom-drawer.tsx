import React from "react";
import { StyleSheet } from "react-native";
import { Drawer } from "react-native-drawer-layout";

import { DrawerContent } from "./drawer-content";
import { useDrawer } from "./drawer-provider";

export function CustomDrawer({ children }: { children: React.ReactNode }) {
	const { isOpen, openDrawer, closeDrawer } = useDrawer();

	return (
		<Drawer
			open={isOpen}
			onOpen={() => openDrawer()}
			onClose={() => closeDrawer()}
			drawerType="front"
			drawerPosition="left"
			renderDrawerContent={() => <DrawerContent />}
			drawerStyle={styles.drawer}
		>
			{children}
		</Drawer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	drawer: {
		backgroundColor: "#fff",
		width: "80%",
	},
});
