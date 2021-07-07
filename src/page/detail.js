import React, { Component } from "react";
import { Text, View, ScrollView,Image } from "react-native";
import { styles } from "../style/styles";

class detail extends Component {
  render() {
    const { route: { params: { item } = {} } = {} } = this.props;
    return (
      <View style={styles.cbody}>
        <ScrollView>
        <View>
          {item && (
            <Image style={styles.detailimg} source={{ uri: item.urlToImage }} />
          )}
        </View>
        <View>{item && <Text style={styles.textdetay}>{item.title}</Text>}</View>
        <View>{item && <Text style={styles.textdetay2}>{item.content}</Text>}</View>
        </ScrollView>
      </View>
    );
  }
}

export default detail;
