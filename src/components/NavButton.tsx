import '../index.css';
import '../App.css';


export default function NavButton(
{navigate, label, location
}:{
navigate: (param: string) => any, label: string, location: string,
})

{


    return (
        <button
            className='Button'
            onClick={() => navigate(location)}
        >
            {label}
        </button>
    );
    
}