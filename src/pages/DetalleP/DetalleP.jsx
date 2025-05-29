import "./DetalleP.scss"
import palta from "../../assets/palta.png"
import uvas from "../../assets/uvas.png"
import pera from "../../assets/pera.png"
import manzana from "../../assets/manzanas.png"
import pitahaya from "../../assets/pithaya.png"
import sandia from "../../assets/sandia.png"

function DetalleP(){


    return (
        <>


        <div class="breadcrumb">
            <div class="breadcrumb-content">
                <a href="#">Supermercado</a> › <a href="#">Frutas</a>
            </div>
        </div>

        <main class="main-content">
            <div class="product-container">
                <div class="product-detail">
                    <div class="product-image">
                        <img src={palta} alt="Palta" id="product-image"/>
                    </div>
                    <div class="product-info">
                        <h1>Palta</h1>
                        <div class="product-weight">Presentación 0.6 kg</div>
                        <div class="product-description">
                            El aguacate es el fruto del árbol del mismo nombre de hoja perenne de la familia de las Lauráceas. Con forma de pera en general, la cáscara es de color verde a negro según cada
                        </div>
                        <div class="product-price">
                            <span class="price-current">S/ 8.90</span>
                            <span class="price-unit">x kg</span>
                        </div>
                        <button class="btn-add-cart" onclick="addToCart()">
                            🛒 AGREGAR
                        </button>
                    </div>
                </div>
            </div>

            <div class="similar-products">
                <h2>Productos similares</h2>
                <div class="products-carousel">
                    <div class="products-grid" id="products-grid">
                        <div class="product-card">
                            <img src={uvas} alt="Uvas"/>
                            <h4>Uvas</h4>
                            <div class="subtitle">Frescas y dulces</div>
                            <div class="price">S/ 5.50 x kg</div>
                            <button class="btn-add" onclick="addSimilarProduct(this)">AGREGAR</button>
                        </div>
                        <div class="product-card">
                            <img src={pera} alt="Pera"/>
                            <h4>Pera</h4>
                            <div class="subtitle">Jugosas y crujientes</div>
                            <div class="price">S/ 4.90 x kg</div>
                            <button class="btn-add" onclick="addSimilarProduct(this)">AGREGAR</button>
                        </div>
                        <div class="product-card">
                            <img src={manzana} alt="Manzana roja"/>
                            <h4>Manzana roja</h4>
                            <div class="subtitle">Dulces y crujientes</div>
                            <div class="price">S/ 6.70 x kg</div>
                            <button class="btn-add" onclick="addSimilarProduct(this)">AGREGAR</button>
                        </div>
                        <div class="product-card">
                            <img src={pitahaya} alt="Pitaya"/>
                            <h4>Pitaya</h4>
                            <div class="subtitle">Exótica y refrescante</div>
                            <div class="price">S/ 15.80 x kg</div>
                            <button class="btn-add" onclick="addSimilarProduct(this)">AGREGAR</button>
                        </div>
                        <div class="product-card">
                            <img src={sandia} alt="Sandía"/>
                            <h4>Sandía</h4>
                            <div class="subtitle">Jugosa y refrescante</div>
                            <div class="price">S/ 3.50 x kg</div>
                            <button class="btn-add" onclick="addSimilarProduct(this)">AGREGAR</button>
                        </div>
                    </div>
                    <button class="carousel-nav carousel-prev" onclick="moveCarousel(-1)">‹</button>
                    <button class="carousel-nav carousel-next" onclick="moveCarousel(1)">›</button>
                </div>
            </div>
        </main>
        </>
    );
}

export default DetalleP;