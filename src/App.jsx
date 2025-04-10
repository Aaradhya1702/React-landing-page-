import './App.css'
import BookingPageSection from './BookingPageSection'
import FAQSection from './FAQSection'
import FeatureList from './FeatureList'
import GuideProfileSection from './GuideProfileSection'
import Header from './Header'
import ItinerarySection from './ItinerarySection'
import MyMap from './leaflet'
import NorwayGuideCard from './NorwayCard'
import ThingsToDoCarousel from './ThingsToDoCarousel'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
       <Header />
      <NorwayGuideCard />
      <FeatureList />
      <MyMap />
      <ThingsToDoCarousel />
      <ItinerarySection />
      <BookingPageSection />
      <GuideProfileSection/>
      <FAQSection />

    </div>
  )
}

export default App
