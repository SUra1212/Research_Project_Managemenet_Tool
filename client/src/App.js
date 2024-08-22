import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import CreateStudentGroup from './Components/Student/CreateStudentGroup';
import CreateSupReq from './Components/Student/CreateSupReq';
import UserHome from './Components/Admin/UsersHome';
import Login1 from './Components/Auth/Login1';
import Login2 from './Components/Auth/Login2';
import Login3 from './Components/Auth/Login3';
import Dashboard1 from './Components/Dashboard/Dashboard1';
import Dashboard2 from './Components/Dashboard/Dashboard2';
import Dashboard3 from './Components/Dashboard/Dashboard3';
import Register1 from './Components/Auth/Register1';
import Register2 from './Components/Auth/Register2';
import Register3 from './Components/Auth/Register3';
import LoginDashboard from './Components/Dashboard/LoginDashboard';
import UserEdit from './Components/Admin/UserEdit';
import AllocatePanelM from './Components/Admin/AllocatePanelM';
import CreateMS from './Components/Admin/CreateMS';
import SGPanel from './Components/Admin/SGPanel';
import StudentGH from './Components/Admin/StudentGH';
import StatusCheck from './Components/Student/StatusCheck';
import CreateRegisterRTopic from './Components/Student/CreateRegisterRTopic';
import CreateCoSupReq from './Components/Student/CreateCoSupReq';
import Home from './Components/Home/Home';
import AdminUploadView from './Components/Admin/AdminUploadView';
import AdminUpload from './Components/Admin/AdminUpload';
import StudentUpload from './Components/Student/StudentUpload';
import StudentUploadView from './Components/Student/StudentUploadView';
import AddTopicEvaluationDetails from './Components/PanelMember/AddTopicEvaluationDetails';
import EditPresentationMarks from './Components/PanelMember/EditPresenationMarks';
import EditTopicEvaluationDetails from './Components/PanelMember/EditTopicEvaluationDetails';
import PanelMembersToPanels from './Components/PanelMember/PanelMembersToPanels';
import PMarking from './Components/PanelMember/PMarking';
import PresentationMarking from './Components/PanelMember/PresentationMarking';
import ViewPresentationMarks from './Components/PanelMember/ViewPresentationMarks';
import ViewTopicEvaluation from './Components/PanelMember/ViewTopicEvaluation';
import CreatePresentationPanel from './Components/PanelMember/ViewPresentationPanel';
import CreateThesisEvaluation from './ThesisEvaluation/CreateThesisEvaluation';
import EditThesisEvaluation from './ThesisEvaluation/EditThesisEvaluation';
import SupervisorThesisEvaluation from './ThesisEvaluation/SupervisorThesisEvaluation';
import UserThesisEvaluation from './ThesisEvaluation/UserThesisMarks';
import CreateTopicAcceptance from './TopicAcceptance/CreateTopicAcceptance';
import EditTopicAcceptance from './TopicAcceptance/EditTopicAcceptance';
import SupervisorTopicAcceptance from './TopicAcceptance/SupervisorTopicAcceptance';
import UserTopicAcceptance from './TopicAcceptance/UserTopicAcceptance';

function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
         
          <Route path="/login1" component={Login1}></Route>
          <Route path="/login2" component={Login2}></Route>
          <Route path="/login3" component={Login3}></Route>
          <Route path="/register" component={Register} />
          <Route path="/register1" component={Register1} />
          <Route path="/register2" component={Register2} />
          <Route path="/register3" component={Register3} />
          <Route path="/login" component={Login} />
          <Route path="/SGH" component={StudentGH}></Route>
          <Route path="/UH" component={UserHome}></Route>
          <Route path="/loginDash" component={LoginDashboard}></Route>
          <Route path="/UE/:id" component={UserEdit}></Route>
          <Route path="/APM/:id" component={AllocatePanelM}></Route>
          <Route path="/CMS" component={CreateMS}></Route>
          <Route path="/SGP" component={SGPanel}></Route>
          <Route path="/AdminUpload" component={AdminUpload}></Route>
          <Route path="/AUV" component={AdminUploadView}></Route>
          <Route path="/StudentUpload" component={StudentUpload}></Route>
          <Route path="/SUV" component={StudentUploadView}></Route>


          <Route path ="/SC" component={StatusCheck}></Route>
          <Route path ="/CTR" component={CreateRegisterRTopic}></Route>
          <Route path="/RCS" component={CreateCoSupReq}></Route>
          <Route path="/CSG" component={CreateStudentGroup}></Route>
          <Route path="/CSR" component={CreateSupReq}></Route>
    

          <Route path="/spresnt" exact component={CreatePresentationPanel}></Route>
          <Route path="/presentationMarking/:id" component={PresentationMarking}></Route>
          <Route path="/evaluateTopics" component={AddTopicEvaluationDetails}></Route>
          <Route path="/presentationPanels" component={ PanelMembersToPanels}></Route>
          <Route path="/Pmarking" component={PMarking}></Route> 
          <Route path="/EP" component={ViewTopicEvaluation}></Route>
          <Route path="/updateTopicEvaluation/:id" component={EditTopicEvaluationDetails}></Route>
          <Route path="/updatePresentationMarks/:id" component={EditPresentationMarks}></Route>
          <Route path="/viewPresentationMarks" component={ViewPresentationMarks}></Route>
          
          <Route exact path="/addstatus" component={CreateTopicAcceptance} ></Route>
        <Route exact path="/supervisorstatus" component={SupervisorTopicAcceptance} ></Route>
        <Route exact path="/userstatus" component={UserTopicAcceptance} ></Route>
        <Route exact path="/editstatus/:id" component={EditTopicAcceptance} ></Route>
        <Route exact path="/addthesisevaluation" component={CreateThesisEvaluation} ></Route>
        <Route exact path="/supervisorthesisevaluation" component={SupervisorThesisEvaluation} ></Route>
        <Route exact path="/userthesisevaluation" component={UserThesisEvaluation} ></Route>
        <Route exact path="/editthesisevaluation/:id" component={EditThesisEvaluation} ></Route>

        
          <Switch>
            
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard1" component={Dashboard1} />
            <PrivateRoute exact path="/dashboard2" component={Dashboard2} />
            <PrivateRoute exact path="/dashboard3" component={Dashboard3} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
