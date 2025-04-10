import {
    MapPin,
    MessageCircle,
    Map,
    Download,
    Repeat,
  } from "lucide-react"; // using lucide icons
  
  export default function FeatureList() {
    const features = [
      { icon: <MapPin size={20} />, text: "161 things to do" },
      { icon: <Map size={20} />, text: "Interactive Map" },
      { icon: <Repeat size={20} />, text: "1 itinerary" },
      { icon: <MessageCircle size={20} />, text: "Priority in chat" },
      { icon: <Download size={20} />, text: "Offline usage in app" },
      { icon: <Repeat size={20} />, text: "Itinerary Builder access" },
    ];
  
    return (
      <div className="border-t border-b my-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-slate-700 font-medium">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-indigo-900">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  