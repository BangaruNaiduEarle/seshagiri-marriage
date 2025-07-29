import React from 'react';
import { ExpandableTabs } from './ui/expandable-tabs';
import { 
  Heart, 
  Sparkles, 
  Sun, 
  PartyPopper, 
  Music, 
  BellRing as Ring, 
  MapPin, 
  ThumbsUp 
} from 'lucide-react';

const MobileNav = () => {
  const tabs = [
    { title: "Bride-to-be", icon: Heart },
    { title: "Haldi", icon: Sun },
    { title: "Paradie", icon: Sparkles },
    { type: "separator" },
    { title: "Kalagolu", icon: Music },
    { title: "Reception", icon: PartyPopper },
    { title: "Marriage", icon: Ring },
    { type: "separator" },
    { title: "Venue", icon: MapPin },
    { title: "Thank You", icon: ThumbsUp },
  ];

  const handleTabChange = (index) => {
    if (index !== null) {
      const sectionId = tabs[index].title.toLowerCase().replace(/ /g, '-');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:hidden">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-rose-500"
        className="border-rose-200 bg-white/90 backdrop-blur-sm"
        onChange={handleTabChange}
      />
    </div>
  );
};

export default MobileNav;