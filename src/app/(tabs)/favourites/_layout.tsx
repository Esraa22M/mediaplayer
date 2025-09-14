import { Stack } from "expo-router";
import { StackScreenWithSearchBar } from "@/constants/layout";
export default function FavouritesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Favourites" ,...StackScreenWithSearchBar }}
      />
    </Stack>
  );
}