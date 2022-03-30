import ShoppingPage from "./components/ShoppingPage";
import LoginPage from "./components/LoginPage";

function App() {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <ShoppingPage />;
  } else {
    return <LoginPage />;
  }
}

export default App;
