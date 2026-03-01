import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import { LogBox } from 'react-native';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import Countries from './src/Countries/Countries';
import { colors } from './src/theme';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ countries, addCountry }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries {...props} countries={countries} addCountry={addCountry} />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => { // Fixed the icons issue (it was REALLLLY bothering me)
              const icons = {
                CitiesNav: 'location',
                AddCity: 'add-circle',
                CountriesNav: 'globe',
                AddCountry: 'add-circle-outline',
              };
              return <Ionicons name={icons[route.name]} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'Cities' }}
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            options={{ title: 'Add City' }}
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            options={{ title: 'Countries' }}
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            options={{ title: 'Add Country' }}
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}