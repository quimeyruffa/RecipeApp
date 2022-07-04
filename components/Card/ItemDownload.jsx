import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import styles from "../../styles/style.recipe";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";

const ItemDownload = (props) => {
	const { data, handleShowDetails } = props;
	


	const leftSwipe = () => {
		return (
			<View style={{ backgroundColor: "red", width: 100 }}>
				<Text>Delete</Text>
			</View>
		);
	};




	return (
		<Swipeable renderLeftActions={leftSwipe} key={data.objeto[1].id}>
			<View
				style={[{ display: "flex", flexDirection: "row" }, styles.card__Recipe]}
			>
				{data.objeto[1].imagen &&
					<Image
						style={{ height: 65, width: 65, borderRadius: 60 }}
						source={{ uri: data.objeto[1].imagen }}
					/>
				}


				<View
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: 15,
						width: 150,
					}}
				>
					<Text style={{ fontSize: 17, marginBottom: 5 }}>{data.objeto[1].nombre}</Text>
					<Text style={{ color: "#FA4A0C" }}>
						{" "}
						{data.objeto[1].cantidadPersonas}{" "}
						{data.objeto[1].cantidadPersonas > 1 ? "personas" : "persona"}{" "}
					</Text>
				</View>
				<MaterialIcons name="more" size={24} color="black" onPress={()=>handleShowDetails(data)}/>
				
			</View>
		</Swipeable>
	);
};

export default ItemDownload;
