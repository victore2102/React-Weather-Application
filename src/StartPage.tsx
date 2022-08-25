import { useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';
import NavButton from './components/NavButton';


export default function StartPage() {

    const navigate = useNavigate();

    return (
        <div className="Start">
        <header>
            <h3>Welcome To My Project</h3>
            <h2 className='title'>React Weather Application</h2>
        </header>
        <NavButton 
        navigate={navigate}
        label={"Click To Begin"}
        location={"/search"}
        />
        <footer>
            <h3>Created By:</h3>
            <h2>Victor Ekpenyong</h2>
            <h4>2022</h4>
        </footer>
        </div>
    );
}
