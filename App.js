import { View, Text } from "react-native";
import AuthNavigation from "./AuthNavigation";
import SignedInStack from "./navigation";
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return <AuthNavigation />
}
