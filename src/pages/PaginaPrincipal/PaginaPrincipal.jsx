import { useState } from 'react';
import './PaginaPrincipal.scss';

function PaginaPrincipal() {
    const ordenes = [
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

    const datospersonales = {
        nombre: 'Andrew Huancaya',
        correo: 'andrewhuancaya@gmail.com',
        fecha_registro: '31/01/2025'
    };

    const direnvio = {
        direccion: 'Av. La Molina 123',
        telefonocontacto: '991264864'
    };

    
    const [paginaActual,setPaginaActual] = useState(1);
    const ordenesPorPagina = 5;

    const indiceInicio = (paginaActual-1) * ordenesPorPagina;
    const indiceFin = indiceInicio + ordenesPorPagina;
    const ordenesPagina = ordenes.slice(indiceInicio,indiceFin);

    const totalPaginas = Math.ceil(ordenes.length/ordenesPorPagina);  

    const cambiarPagina = (nuevaPagina) => {
        if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
            setPaginaActual(nuevaPagina);
        }
    };

    return (
        <div className="pagina-principal">
            <h2 className="texto-bienvenida">Hola {datospersonales.nombre}!</h2>

            <div className="seccion-info-usuarios">
                <div className="seccion-izquierda">
                    <div className="info-card datos-personales">
                        <h3>Datos personales</h3>
                        <div className="info-contenido">
                            <p><span>Nombre:</span> {datospersonales.nombre}</p>
                            <p><span>Correo:</span> {datospersonales.correo}</p>
                            <p><span>Fecha de registro:</span>{datospersonales.fecha_registro}</p>
                        </div>
                    </div>

                    <div className="info-card direccion-envio">
                        <h3>Dirección de envío</h3>
                        <div className="info-contenido">
                            <p>{direnvio.direccion}</p>
                            <p>Telefono de contacto: {direnvio.telefonocontacto}</p>
                        </div>
                    </div>
                </div>

                <div className="seccion-derecha">
                    <div className="stats-container">
                        <div className="stat-card ordenes">
                            <span className="valor">{ordenes.length}</span>
                            <span className="texto">Órdenes</span>
                        </div>
                        <div className="stat-card monto">
                            <span className="valor">S/129</span>
                            <span className="texto">Monto ahorrado</span>
                        </div>
                    </div>

                    <div className="imagen-usuario">
                        <img src="/assets/image 37.png" alt="User"/>
                    </div>
                </div>
            </div>

            <div className="seccion-ordenes">
                <h3>Tus órdenes</h3>
                <div className="buscar-orden">
                    <input type="text" placeholder="Buscar una orden..." />
                    <button>Buscar</button>
                </div>
                <div className="tabla-ordenes">
                    <table>
                        <thead>
                            <tr>
                                <th>Orden</th>
                                <th>Usuario</th>
                                <th>Fecha de orden</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordenesPagina.map((orden) => (
                                <tr key={orden.id}>
                                    <td className="orden-id">{orden.id}</td>
                                    <td>{orden.usuario}</td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.total}</td>
                                    <td>
                                        <span>
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

                
                <div className="paginacion">
                    <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
                        Anterior
                    </button>

                    <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;
