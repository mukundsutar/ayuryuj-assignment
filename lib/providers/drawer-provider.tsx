import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";

interface DrawerContextProps {
	openDrawer: () => void;
	closeDrawer: () => void;
	isOpen: boolean;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDrawer = (): DrawerContextProps => {
	const context = useContext(DrawerContext);
	if (!context) {
		throw new Error("useDrawer must be used within a DrawerProvider");
	}
	return context;
};

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openDrawer = () => setIsOpen(true);
	const closeDrawer = () => setIsOpen(false);

	return (
		<DrawerContext.Provider value={{ openDrawer, closeDrawer, isOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};
