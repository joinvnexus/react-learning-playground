// src/App.js
import FriendCard from './FriendCard' ;

function Friend() {
  return (
    <div style={{ background: "#f5f5f5", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Kalpurush", color: "#8e24aa" }}>
        আমার বন্ধুদের লিস্ট (Props দিয়ে)
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        
        <FriendCard
          name="Projoy Naidu" 
          age={19} 
          city="Sylhet" 
          isStudent={true}
          photo="https://i.ibb.co/6s2ZJ7k/boy1.jpg"
        />

        <FriendCard 
          name="আলিফ আহমেদ" 
          age={22} 
          city="ঢাকা" 
          isStudent={false}
          photo="https://i.ibb.co/3d3Y5nK/boy2.jpg"
        />

        <FriendCard 
          name="রিয়া আক্তার" 
          age={17} 
          city="চট্টগ্রাম" 
          isStudent={true}
        />

        <FriendCard 
          name="তানভীর হোসেন" 
          age={25} 
          city="রাজশাহী" 
          isStudent={false}
        />

      </div>
    </div>
  );
}

export default Friend;