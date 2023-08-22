import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Container } from '../components/Container/Container';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import AddPetPage from '../pages/AddPetPage';
import { NewsPage } from '../pages/Nwes';
import UserPage from '../pages/UserPage';
import NoticesPage from '../pages/NoticesPage';

function App() {

 

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/add-pet' element={<AddPetPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/notices" element={<NoticesPage />} />
        </Route>
      </Routes>
    </Container>
  );
}
export default App;
