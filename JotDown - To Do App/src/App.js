import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeManager from './components/RecipeManager';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import HomePage from './components/HomePage';
import Firstpage from './components/FirstPage';
import NotesPage from './components/NotesPage';
import Feedback from './components/Feedback';
import BudgetPage from './components/BudgetPage';
import Login from './components/Login';
import Signup from './components/Signup';
import FeedbackEmail from './components/FeedbackEmail';
import ToDoList from './components/Todolist';
import Profile from './components/Profile';
import UserManagement from './components/UserManagement';
import FAQPage from './components/FAQPage';
import Meal from './components/MealPlanner';
import EventCalendar from './components/EventCalendar';
import { UserProvider } from "./context/UserContext.jsx";
import AdminProfile from './components/AdminProfile.jsx';
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/firstpage' element={<Firstpage />} />
          <Route path='/recipe' element={<RecipeManager />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path='/add-recipe' element={<AddRecipe />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/monthly-budget' element={<BudgetPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/feedback' element={<FeedbackEmail />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/usermanagement' element={<UserManagement />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/meal' element={<Meal />} />
          <Route path='/calendar' element={<EventCalendar />} />
          {/* <Route path='/adminprofile' element={<AdminProfile />}/> */}
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;