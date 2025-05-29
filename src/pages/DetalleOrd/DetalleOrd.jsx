import "./DetalleOrd.scss";
import manzana from "../../assets/manzanas.png";
import leche from "../../assets/leche.png";
import papaya from "../../assets/papaya.png";
import sandia from "../../assets/sandia.png";
import pollo from "../../assets/pollocr.png";
import uvas from "../../assets/uvas.png";


function DetalleOrd() {

    let currentPage = 1;

        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        }

        function nextPage() {
            if (currentPage < 10) {
                currentPage++;
                updatePagination();
            }
        }

        function updatePagination() {
            const buttons = document.querySelectorAll('.pagination button[data-page]');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.dataset.page) === currentPage) {
                    btn.classList.add('active');
                }
            });
        }

        document.querySelectorAll('.pagination button[data-page]').forEach(btn => {
            btn.addEventListener('click', () => {
                currentPage = parseInt(btn.dataset.page);
                updatePagination();
            });
        });

        // Animación de entrada suave
        window.addEventListener('load', () => {
            const rows = document.querySelectorAll('.product-row');
            rows.forEach((row, index) => {
                row.style.opacity = '0';
                row.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    row.style.transition = 'all 0.4s ease';
                    row.style.opacity = '1';
                    row.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

    return (
        <>
        <div class="container">
        <h1 class="page-title">Detalles de Orden</h1>
        
        <div class="order-details-card">
            <div class="order-header">
                <div>
                    <h2 class="order-title">Orden <span class="order-id">#1234</span></h2>
                </div>
                <div class="order-summary">
                    <div class="order-status">
                        <span class="status-label">Estado:</span>
                        <span class="status-delivered">Entregado</span>
                    </div>
                    <div class="total-amount">
                        <span class="total-label">Monto total:</span>
                        S/400.00
                    </div>
                </div>
            </div>

            <div class="products-section">
                <h3 class="products-title">Productos ordenados</h3>
                
                <table class="products-table">
                    <thead class="cabecera">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={manzana} alt="Manzanas Rojas" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#0223</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Manzanas Rojas</td>
                            <td><span class="category-tag">Frutas y verduras</span></td>
                            <td class="quantity">10</td>
                            <td class="price">S/19.00</td>
                        </tr>
                        
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={leche} alt="Leche gloria" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#6425</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Leche gloria</td>
                            <td><span class="category-tag">Lacteos y huevos</span></td>
                            <td class="quantity">4</td>
                            <td class="price">S/19.00</td>
                        </tr>
                        
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={papaya} alt="Papaya" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#2344</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Papaya</td>
                            <td><span class="category-tag">Frutas y verduras</span></td>
                            <td class="quantity">4</td>
                            <td class="price">S/10.00</td>
                        </tr>
                        
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={sandia} alt="Sandía" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#4344</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Sandía</td>
                            <td><span class="category-tag">Frutas y verduras</span></td>
                            <td class="quantity">12</td>
                            <td class="price">S/19.00</td>
                        </tr>
                        
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={pollo} alt="Pollo entero fresco con menudencia" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#5454</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Pollo entero fresco con menudencia</td>
                            <td><span class="category-tag" id="carnesss">Carnes, aves y pescados</span></td>
                            <td class="quantity">1</td>
                            <td class="price">S/10.00</td>
                        </tr>
                        
                        <tr class="product-row">
                            <td>
                                <div class="product-info">
                                    <img src={uvas} alt="Uvas" class="product-image"/>
                                    <div class="product-details">
                                        <div class="product-id">#8123</div>
                                    </div>
                                </div>
                            </td>
                            <td class="product-name">Uvas</td>
                            <td><span class="category-tag">Frutas y verduras</span></td>
                            <td class="quantity">1</td>
                            <td class="price">S/10.00</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="pagination">
                <button onclick="previousPage()">←</button>
                <button class="active" data-page="1">1</button>
                <button data-page="2">2</button>
                <button data-page="3">3</button>
                <span class="dots">...</span>
                <button data-page="10">10</button>
                <button onclick="nextPage()">→</button>
            </div>
        </div>
        </div>
        </>
    );
}

export default DetalleOrd;