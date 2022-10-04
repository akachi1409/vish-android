import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import TopNavBar from '../../components/TopNavBar';
import Colors from '../../theme/Colors';
function Contact() {
    const authHeader = { Authorization: `JWT ${localStorage.getItem("token")}` };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar title="Contact US" />
      <View style={styles.container}>
        <View style={styles.contentView}>
          <Text style={styles.questionTitle}>Frequently Asked Questions</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentView: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  questionTitle: {
    fontWeight: '400',
    marginBottom: 3,
    fontSize: 20,
  },
});
export default Contact;
