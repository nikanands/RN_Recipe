import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

class RecipeArticle extends React.Component {
  render() {
    const params = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={{uri: `${params.recipe.image}`}}
            style={styles.image}
          />
          <View>
            <Text style={styles.header}>Recipe Ingredients</Text>
            {params.recipe.ingredientLines.map((ingredient, i) => (
              <Text key={i} style={styles.ingredients}>
                {ingredient}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.header}>Recipe Nutrients</Text>
            {params.recipe.digest.map((nutrient, i) => (
              <Text key={i} style={styles.ingredients}>
                {nutrient.label} : {nutrient.total} {nutrient.unit}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 10,
    color: '#000',
  },
  ingredients: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#001',
  }
});

export default RecipeArticle;

