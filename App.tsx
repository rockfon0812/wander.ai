import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Explore from './pages/Explore';
import ItineraryPlanner from './pages/ItineraryPlanner';
import SavedTrips from './pages/SavedTrips';
import { AppRoute, FullItinerary, LocationData } from './types';

function App() {
  const [savedTrips, setSavedTrips] = useState<FullItinerary[]>([]);
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    console.log("WanderAI App Mounted - Version: v1.1.0");
  }, []);

  // Load saved trips from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wanderai_trips');
    if (saved) {
      try {
        setSavedTrips(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved trips", e);
      }
    }
  }, []);

  // Save trips to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('wanderai_trips', JSON.stringify(savedTrips));
  }, [savedTrips]);

  const handleSaveTrip = (trip: FullItinerary) => {
    setSavedTrips(prev => [trip, ...prev]);
  };

  const handleDeleteTrip = (id: string) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      setSavedTrips(prev => prev.filter(t => t.id !== id));
    }
  };

  const requestLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location", error);
          alert("Could not get your location. Please check permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={AppRoute.EXPLORE} element={<Explore location={location} onRequestLocation={requestLocation} />} />
          <Route path={AppRoute.PLAN} element={<ItineraryPlanner onSave={handleSaveTrip} />} />
          <Route path={AppRoute.SAVED} element={<SavedTrips trips={savedTrips} onDelete={handleDeleteTrip} />} />
          <Route path="*" element={<Navigate to={AppRoute.EXPLORE} replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;