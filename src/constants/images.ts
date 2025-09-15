import unkownCreator from "@/assets/images/unknown_artist.png";
import unKouwnSound from "@/assets/images/unknown_track.png";
import { Image } from "react-native";
export const resolveUnknownCreatorIamgeUrl = Image.resolveAssetSource(unkownCreator).uri;
export const resolveUnknownIrackIamgeUrl = Image.resolveAssetSource(unKouwnSound).uri;