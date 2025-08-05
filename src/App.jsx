import React from "react";
import Card from "./components/Card";
function App() {
  const data = [
    {
      name: "John",
      profession: "Developer",
      image:
        "https://media.istockphoto.com/id/1629252119/photo/teenage-boy-messaging-over-smart-phone-on-white-background.jpg?s=612x612&w=0&k=20&c=S-oC20Nr1jmtpV-vWPHUD2VNA9PUBNqEMpjIW-FcrgY=",
      friends: false,
    },
    {
      name: "Tripti",
      profession: "Designer",
      image:
        "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "Ananya",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
      friends: true,
    },
    {
      name: "Golu",
      profession: "Coder",
      image:
        "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95fGVufDB8fDB8fHww",
      friends: false,
    },
  ];

  const [realData, setRealData] = React.useState(data);
  // state jaha banti vahi useye modify kiya ja sakta hai

  const handleFriends = (changingIndex) => {
    setRealData((prevdata) =>{
      return prevdata.map((item,index) => {
        if(changingIndex === index){
          return {
            ...item,
            friends: !item.friends
          }
        }
        return item;
      })
    })
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center  gap-4">
        {realData.map((item, index) => (
          <div>
            <Card
              key={index}
              index={index}
              handleFriends={handleFriends}
              values={item}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
