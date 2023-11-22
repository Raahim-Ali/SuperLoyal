import "./App.css";
import User from "./User";
import Dashboard from "../src/Dashboard/Dashboard";
import Reward from "./Rewards/Reward";
import NewReward1 from "./Rewards/NewReward1";
import Subscription from "./Subscription/Subscription";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/newreward" element={<NewReward1 />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
