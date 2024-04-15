import { View , Text , Image, TouchableOpacity, TextInput} from "react-native";
import { styles } from "./style";
import { HeaderPage } from "@components/HeaderPage/Index";



export function StationsBike(){
  return(
    <View style={styles.container}>
      <View >
        <Image source={require('@assets/Logo.png')} style={styles.imgLog}/>
        <Text style={styles.logoTitle}>BikeShare</Text>
      </View>

      <TouchableOpacity>
        <Image source={require('@assets/XMLID_101_.png')} style={styles.menuIcon}/>
      </TouchableOpacity>
    </View>
  )
}