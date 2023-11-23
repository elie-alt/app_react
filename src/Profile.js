const user = {
    name: "Jeanne DUPONT",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  };
  
  export default function Profile() {
    return (
      <div>
        {user.name}
        <img src={user.imageUrl} alt="jeanne" />
      </div>
    );
  }