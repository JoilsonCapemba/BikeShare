import { View , Text , Image, TouchableOpacity} from "react-native";
import { styles } from "./style";


export function GetStarted(){
  return(
    <View style={styles.container}>
      <Image source={require('@assets/Logo.png')} />
      <Text style={styles.logoTitle}>BikeShare</Text>
      <Text style={styles.dicaGetstarted}>Aproveita o seu passeio com o BikeShare</Text>
      <TouchableOpacity style={styles.btnGetStarted}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}