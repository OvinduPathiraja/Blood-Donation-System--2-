
import Location2 from './Location2';
import BloodCountChart from './BloodCountChart';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Location1 from './Location1';
import Donorpoints from './Donorpoints';
import Dashboards from './Dashboards';
import Navigation from './Navigation';
import Table from './Table';
import SignUp from './SignUp';
import Acceptedrequests from './Acceptedrequests';
import Pendingrequests from './Pendingrequests';
import FAQs from './FAQs';
import Search from './Search';


function App() {
  return (
    <Router>
      <Route exact path='/'>
      <Dashboards/>
      </Route>
      <Route path='/Location1'>
        <Location1/>
      </Route>
      <Route path='/Location2'>
        <Location2/>
      </Route>
      <Route path='/Donorpoints'>
        <Donorpoints/>
      </Route>
      <Route path='/Dashboards'>
        <Dashboards/>
      </Route>
      <Route path='/BloodBankChart'>
        <BloodCountChart/>
      </Route>
      <Route path='/HospitalChart'>
        <BloodCountChart/>
      </Route>
      <Route path='/Navigation'>
        <Navigation/>
      </Route>
      <Route path='/Table'>
        <Table/>
      </Route>
      <Route path='/SignUp'>
        <SignUp/>
      </Route>
      <Route path='/Acceptedrequests'>
        <Acceptedrequests/>
      </Route>
      <Route path='/Pendingrequests'>
        <Pendingrequests/>
      </Route>
      <Route path='/FAQs'>
        <FAQs/>
      </Route>
      <Route path='/Search'>
        <Search/>
      </Route>
      <Route path='/BloodBankSearch'>
        <Navigation user="hospital"/>
        <Table tableName="BLOOD BANK SEARCH"/>
      </Route>
      <Route path='/Donorsearch'>
      <Navigation user="bloodbank"/>
        <Table tableName="DONOR SEARCH"/>
      </Route>
      <div className='foot'>
      <footer></footer>
      </div>
    </Router>
  );
}

export default App;
