import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeEXpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GLobalProvider } from './context/GlobalState';

function App() {
  return (
    
    <GLobalProvider>
   
      <Header/>
    
      <div className="container">
            <Balance/>
            <IncomeEXpenses/>
            <TransactionList/>
            <AddTransaction/>  
      </div>
  </GLobalProvider>
  );
}

export default App;
