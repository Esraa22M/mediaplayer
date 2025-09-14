import { Stack } from "expo-router";

export default function FavouritesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Favourites" }}
      />
    </Stack>
  );
}