export default function Home() {
  const tutorialStages = [
    {
      title: "Welcome to INU!",
      image: "https://via.placeholder.com/400x200.png?text=Welcome",
      description: "Discover how INU connects dog parents with trusted hosts.",
    },
    {
      title: "Create Your Profile",
      image: "https://via.placeholder.com/400x200.png?text=Profile",
      description: "Set up your profile to get the best matches for your dog.",
    },
    {
      title: "Book Your First Stay",
      image: "https://via.placeholder.com/400x200.png?text=Booking",
      description: "Find and book a perfect host for your furry friend.",
    },
  ];

  const handleTutorialComplete = () => {
    alert("Tutorial complete! You're ready to start.");
  };

  return (
      <div>
        <h1>INU Tutorial</h1>
        <Tutorial stages={tutorialStages} onComplete={handleTutorialComplete} />
      </div>
  );
}
