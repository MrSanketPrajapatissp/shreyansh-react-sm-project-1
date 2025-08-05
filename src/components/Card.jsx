function Card({ values, index,handleFriends }) {
  const { name, profession, image, friends} = values;

  return (
    <div   className="w-52 bg-white rounded-md overflow-hidden">
     
      <div className="w-full h-35 bg-blue-500">
        <img src={image} className="w-full h-full object-left-top"></img>
      </div>
      <div className=" p-2">
        <h1 className="text-2xl ">{name}</h1>
        <p className="text-xs">{profession}</p>
        <button
          onClick={() => handleFriends(index)}
         
          className={`mt-2 ${friends ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} text-white px-3 py-1 rounded `}
        >
          {friends=== true ? "friends": "Add Friend"}
        </button>
      </div>

    </div>
  );
}

export default Card;
