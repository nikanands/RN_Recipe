import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';


class Recipe extends React.Component {
  state = {
    hits: [],
    isLoading: true,
    searchQuery: 'chicken',
    isVisible: false,
    value: '',
  };

  componentDidMount = () => {
    const APP_ID = 'd4327de0';
    const APP_KEY = '8607a4e0b0917f604c8e069bfb7f5c09';
    const APP_URL = `https://api.edamam.com/search?q=${
      this.state.searchQuery
    }&app_id=${APP_ID}&app_key=${APP_KEY}`;
    fetch(APP_URL)
      .then(res => res.json())
      .then(data =>
        this.setState({
          hits: data.hits,
          isLoading: false,
        }),
      )
      .catch(err => console.log(err));
  };

  componentDidUpdate = () => {
    console.log(this.state.value)
    console.log(this.state.searchQuery)
  }

  onChangeText = text => {
    this.setState({
      value: text,
      searchQuery: this.state.value,
    });
  };

  onSearch = () => {
    const APP_ID = 'd4327de0';
    const APP_KEY = '8607a4e0b0917f604c8e069bfb7f5c09';
    const APP_URL = `https://api.edamam.com/search?q=${
      this.state.searchQuery
    }&app_id=${APP_ID}&app_key=${APP_KEY}`;
    fetch(APP_URL)
      .then(res => res.json())
      .then(data =>
        this.setState({
          hits: data.hits,
          isLoading: false,
        }),
      )
      .catch(err => console.log(err));
  };

  render() {
    return this.state.isLoading === true ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput 
            placeholder="Search your recipe"
            placeholderTextColor="#053305"
            style={styles.textInput}
            autoFocus={false}
            onChangeText={text => this.onChangeText(text)}
          />
          <TouchableOpacity onPress={this.onSearch}>
            <Ionicons
              name="ios-search"
              size={30}
              color="#053305"
              style={styles.search}
            />
          </TouchableOpacity>
        </View>
        {this.state.hits.map((recipe, i) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={i}
            onPress={() =>
              this.props.navigation.navigate('RecipeArticle', {
                ...recipe,
              })
            }
            style={styles.card}>
            <View style={styles.recipe}>
              <Image
                source={{uri: `${recipe.recipe.image}`}}
                style={styles.image}
              />
                <Text style={styles.recipeName}>{recipe.recipe.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    shadowColor: '#bbb',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    height: 300,
    marginBottom: 10,
  },
  recipe: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    height: 250,
    marginBottom: 10,
    borderRadius: 5,
  },
  recipeName: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  searchContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    flexDirection: 'row',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 25,
    paddingLeft: 40,
  },
  textInput: {
    width: '90%',
    height: 30,
    fontSize: 18,
  },
});

export default Recipe;
