import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Color configuration
        tabBarActiveTintColor: '#32FC9D', // Vibrant green active tab
        tabBarInactiveTintColor: '#94A3B8', // Muted slate gray inactive tab
        
        // Header styling
        headerStyle: {
          backgroundColor: '#0B131E', // Dark background matching theme
        },
        headerTitleStyle: {
          color: '#F8FAFC', // Crisp white header text
          fontWeight: '600',
        },
        headerTintColor: '#32FC9D', // Header back button & icons
        headerShadowVisible: false,

        // Tab bar styling
        tabBarStyle: {
          backgroundColor: '#152232', // Slightly lighter dark surface for footer
          borderTopColor: '#2A3C53', // Subtle separator border
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'qr-code' : 'qr-code-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'time' : 'time-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="teacher"
        options={{
          title: 'Teacher',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'clipboard' : 'clipboard-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}