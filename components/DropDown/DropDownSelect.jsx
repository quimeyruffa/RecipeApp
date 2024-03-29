import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet } from 'react-native'

const DropDownSelect = (props) => {

	return (
	<SelectDropdown
	buttonStyle={styles.container}
	buttonTextStyle={{color:'white'}}
	// renderDropdownIcon={true}
		data={props.data}
		defaultButtonText={props.defaultText}
		onSelect={(selectedItem, index) => {
			{props.setTipo ? 
				props.setTipo(selectedItem)
				:
				props.setUnidad(index + 1)
			}
		}}
		buttonTextAfterSelection={(selectedItem, index) => {
			// text represented after item is selected\\\\\
			// if data array is an array of objects then return selectedItem.property to render after item is selected
			return selectedItem
		}}
		rowTextForSelection={(item, index) => {
			// text represented for each item in dropdown
			// if data array is an array of objects then return item.property to represent item in dropdown
			return item
		}}
/>
)
}

export default DropDownSelect;

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#FA4A0C',
		width:120,
		height:30,
		borderRadius:20,
		color:'white'
	}
})