import { useState } from 'react';
import './PaginaPrincipal.scss';

function PaginaPrincipal() {

    const ordenesEjemplo = [
        { id: '#7231', usuario: 'Juan Perez', fecha: '20/01/2025', total: '$199.00', estado: 'Entregado' },
        { id: '#7232', usuario: 'María González', fecha: '20/01/2025', total: '$200.00', estado: 'Por entregar' },
        { id: '#7233', usuario: 'Marco Aurelio', fecha: '21/01/2025', total: '$199.00', estado: 'Entregado' },
        { id: '#7234', usuario: 'Ana Díaz', fecha: '24/01/2025', total: '$199.00', estado: 'Entregado' },
        { id: '#7235', usuario: 'Juan Perez', fecha: '20/01/2025', total: '$150.00', estado: 'Entregado' },
        { id: '#7236', usuario: 'Mario González', fecha: '20/01/2025', total: '$198.00', estado: 'Por entregar' },
        { id: '#7237', usuario: 'Mario Aurelio', fecha: '22/01/2025', total: '$199.00', estado: 'Entregado' },
        { id: '#7238', usuario: 'Ana Silva', fecha: '20/01/2025', total: '$160.00', estado: 'Entregado' },
        { id: '#7239', usuario: 'Juan Perez', fecha: '20/01/2025', total: '$199.00', estado: 'Entregado' },
        { id: '#7240', usuario: 'Martín González', fecha: '23/01/2025', total: '$197.00', estado: 'Por entregar' }
    ];

    
    const usuarioEjemplo = {
        nombre: 'Andrew',
        apellido: 'Huancaya',
        correo: 'andrewhuancaya@gmail.com',
        fecha_registro:'31/01/2025'
    };

   

    return (
        <div className="pagina-principal">
            

            <h2 className="welcome-text">Hola {usuarioEjemplo.nombre}!</h2>
            
            <div className="user-info-section">
                <div className="left-section">
                    <div className="info-card datos-personales">
                        <h3>Datos personales</h3>
                        <div className="info-content">
                            <p><span>Nombre:</span> {usuarioEjemplo.nombre}</p>
                            <p><span>Correo:</span> {usuarioEjemplo.correo}</p>
                            <p><span>Fecha de registro:</span>{usuarioEjemplo.fecha_registro}</p>
                        </div>
                    </div>

                    <div className="info-card direccion-envio">
                        <h3>Dirección de envío</h3>
                        <div className="info-content">
                            <p>Av. La molina 12334</p>
                            <p>Cálculo de contacto: 990892131</p>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="stats-container">
                        <div className="stat-card ordenes">
                            <span className="stat-value">12</span>
                            <span className="stat-label">Órdenes</span>
                        </div>
                        <div className="stat-card monto">
                            <span className="stat-value">S/129</span>
                            <span className="stat-label">Monto ahorrado</span>
                        </div>
                    </div>

                    <div className="user-image">
                        <img src="/assets/image 37.png" alt="User" />
                    </div>
                </div>
            </div>

            <div className="orders-section">
                <h3>Tus órdenes</h3>
                <div className="search-orders">
                    <input type="text" placeholder="Buscar una orden..." />
                    <button>Buscar</button>
                </div>
                <div className="orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th>#ORDEN</th>
                                <th>Usuario</th>
                                <th>Fecha de orden</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordenesEjemplo.map((orden, index) => (
                                <tr key={index}>
                                    <td className="orden-id">{orden.id}</td>
                                    <td>{orden.usuario}</td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.total}</td>
                                    <td>
                                        <span className={`estado ${orden.estado.toLowerCase().replace(' ', '-')}`}>
                                            {orden.estado}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="ver-detalles">Ver detalles</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            
            </div>
        </div>
    );
}

export default PaginaPrincipal;