import React, {useState, useEffect} from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {
    
    //estado para atualizar o nome do aluno na lista de presença:
    const [studentName, setStudentName] = useState('');
    
    // estado para armazenar os estudantes da lista de presença
    const [studentsList, setStudentsList] = useState([]);

    // estado que atualiza o user
    const [user, setUser] = useState({
        name: '',
        avatar: '',
    });

    const handleAddStudent = () => {
    
        // cria um novo estudante
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        };

        // atualiza a listagem de estudantes
        setStudentsList(prevState => [...prevState, newStudent]);
    }

    useEffect(() => {
        async function fecthData() {
            const response = await fetch("https://api.github.com/users/Jessica-Garcia");
            const data = await response.json();
            
            setUser({
                name: data.name,
                avatar: data.avatar_url,
            })
        }

        fecthData();

    }, []);

    return(
        <div className='container'>
            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Foto de perfil"/>
                </div>
            </header>
            <input 
                type="text" 
                placeholder="Digite o nome..."
                onChange={e => setStudentName(e.target.value)}
            />
            <button type="button" onClick={handleAddStudent}>
                Adicionar
            </button>
        
            {/* para cada item da lista, renderize um Card*/}
            {
                studentsList.map(student => (
                    <Card 
                        key={student.time}
                        name={student.name} 
                        time={student.time}
                    />)
                )
                
            }
        </div>
    );
}
