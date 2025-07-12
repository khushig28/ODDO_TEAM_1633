import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState({ name: "", points: 0 });
  const [stats, setStats] = useState({ users: 0, products: 0 });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);

    const fetchStats = async () => {
      const res = await axios.get("http://localhost:5000/api/dashboard-stats");
      setStats(res.data);
      console.log(res.data);

    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <Navbar user={user} points={user.points} />

      <div className="carousel">
        <img src="https://via.placeholder.com/1200x300?text=Welcome+to+ClothesExchange" alt="carousel" />
      </div>

      <div className="stats">
        <div className="stat-box">Users: {stats.users}</div>
        <div className="stat-box">Products: {stats.products}</div>
      </div>

      <div className="reviews">
        <h3>What our users say</h3>
        <div className="review">"Amazing way to exchange clothes and save money!"</div>
        <div className="review">"Eco-friendly and easy to use!"</div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
