import { useQuery } from "@tanstack/react-query";
import { ScrollView, View } from "react-native";

import DoctorInfo from "../../components/doctor-info";
import { api } from "../../lib/axios-config";
import type { TDoctorListing } from "../../lib/types/users";

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
    <View className="flex-1 p-4 pb-0">
      <ScrollView>
        {usersData?.map((i, index) => <DoctorInfo key={index} {...i} />)}
      </ScrollView>
    </View>
  );
}
