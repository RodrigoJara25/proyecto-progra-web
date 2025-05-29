import React, { useState, useEffect } from "react";
import "./ListaUs.scss";
import Usuario from "../../assets/Usuario.png";
import Chica from "../../assets/chica.png";
import Usuario2 from "../../assets/usuario2.png";

function ListaUs() {
    const [users, setUsers] = useState([
        { name: 'Juan Perez', date: '20/01/2025', status: 'active', avatar: 'JP' },
        { name: 'Maria Gonzales', date: '20/01/2025', status: 'inactive', avatar: 'MG' },
        { name: 'Marco Aurelio', date: '20/01/2025', status: 'active', avatar: 'MA' },
        { name: 'Ana Dias', date: '20/01/2025', status: 'active', avatar: 'AD' },
    ]);
    const [filteredUsers, setFilteredUsers] = useState([...users]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    // Buscar usuarios
    const searchUsers = () => {
        if (searchTerm === '') {
            setFilteredUsers([...users]);
        } else {
            const filtered = users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    // Cambiar estado de usuario
    const toggleUserStatus = (userName) => {
        const updatedUsers = users.map(user => 
            user.name === userName 
                ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } 
                : user
        );
        setUsers(updatedUsers);
        searchUsers(); // Refiltrar
    };

    // Ver detalles
    const viewDetails = (userName) => {
        alert(`Ver detalles de: ${userName}`);
    };

    // Paginación
    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < 10) setCurrentPage(currentPage + 1);
    };

    // Efecto para búsqueda
    useEffect(() => {
        searchUsers();
    }, [searchTerm, users]);

    return (
        <div className="container">
            <h1>Listado de usuarios</h1>
        
            <div className="search-section">
                <input 
                    type="text" 
                    className="user-search" 
                    placeholder="Buscar un usuario..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-user-btn">Buscar</button>
            </div>

            <div className="users-table">
                <div className="table-header">
                    <div>Nombre completo</div>
                    <div id="fechaR">Fecha de registro</div>
                    <div id="Estado">Estado</div>
                    <div>Acciones</div>
                </div>
                
                <div id="usersContainer">
                    {filteredUsers.map((user) => (
                        <div className="user-row" key={user.name}>
                            <div className="user-info-cell">
                                <div className="user-avatar">{user.avatar}</div>
                                <div className="user-name" id="nombre">{user.name}</div>
                            </div>
                            <div>{user.date}</div>
                            <div>
                                <span className={`status ${user.status}`}>
                                    {user.status === 'active' ? 'Activo' : 'Inactivo'}
                                </span>
                            </div>
                            <div className="actions">
                                <button 
                                    className="action-btn deactivate-btn" 
                                    onClick={() => toggleUserStatus(user.name)}
                                >
                                    {user.status === 'active' ? 'Desactivar' : 'Activar'}
                                </button>
                                <button 
                                    className="action-btn details-btn" 
                                    onClick={() => viewDetails(user.name)}
                                >
                                    Ver detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination">
                <button onClick={previousPage}>←</button>
                <button className={currentPage === 1 ? 'active' : ''} onClick={() => setCurrentPage(1)}>1</button>
                <button className={currentPage === 2 ? 'active' : ''} onClick={() => setCurrentPage(2)}>2</button>
                <button className={currentPage === 3 ? 'active' : ''} onClick={() => setCurrentPage(3)}>3</button>
                <span className="dots">...</span>
                <button className={currentPage === 10 ? 'active' : ''} onClick={() => setCurrentPage(10)}>10</button>
                <button onClick={nextPage}>→</button>
            </div>
        </div>
    );
}

export default ListaUs;