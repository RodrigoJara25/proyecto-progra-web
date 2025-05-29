import "./Inicio.scss"
import banner from "../../assets/banner.png"
import platano from "../../assets/platano.png"
import pollocr from "../../assets/pollo.png"
import zanahorias from "../../assets/zanahoria.png"
import azucar from "../../assets/azucar.png"
import avena from "../../assets/avena.png"
import cafe from "../../assets/cafe.png"
import carnes from "../../assets/carnes.png"
import arroz from "../../assets/abarrotes.png"
import cloro from "../../assets/limpieza.png"

function Inicio() {
    return(
        <>

        <div class="banner">
            <img src={banner} alt="aaaaaa" id="bannerimg"/>
        </div>

        <main class="main-content">
        <section>
            <h2 class="section-title">Explora las categorías</h2>
            <div class="categories-grid">
                <a href="#" class="category-item">
                    <div class="category-icon"><img src={platano} alt="platanos" width="80px"/></div>
                    <div class="category-name">Frutas y verduras</div>
                </a>
                <a href="#" class="category-item">
                    <div class="category-icon"><img src={carnes} alt="platanos" width="80px"/></div>
                    <div class="category-name">Carnes, aves y pescado</div>
                </a>
                <a href="#" class="category-item">
                    <div class="category-icon"><img src={arroz} alt="platanos" width="80px"/></div>
                    <div class="category-name">Abarrotes</div>
                </a>
                <a href="#" class="category-item">
                    <div class="category-icon"><img src={cloro} alt="platanos" width="80px"/></div>
                    <div class="category-name">Limpieza</div>
                </a>
            </div>
        </section>

        <section>
            <h2 class="section-title">Lo más vendido</h2>
            <div class="products-grid">
                <a href="#" class="product-card">
                    <img src={pollocr} alt="Pollo Fresco"/>
                    <div class="product-title">Pollo Entero Fresco con presentación</div>
                    <div class="product-price">$2.48 $3</div>
                    <button class="btn-agregar">AGREGAR</button>
                </a>
                <a href="#" class="product-card">
                    <img src={zanahorias} alt="Zanahorias"/>
                    <div class="product-title">Zanahorias Orgánicas especiales</div>
                    <div class="product-price">$1.99 $2.53</div>
                    <button class="btn-agregar">AGREGAR</button>
                </a>
                <a href="#" class="product-card">
                    <img src={azucar} alt="Azucar"/>
                    <div class="product-title">Azucar moreno BELL'S</div>
                    <div class="product-price">$1.19 $1.59</div>
                    <button class="btn-agregar">AGREGAR</button>
                </a>
                <a href="#" class="product-card">
                    <img src={avena} alt="Avena"/>
                    <div class="product-title">Avena QUAKER tradicional</div>
                    <div class="product-price">$0.99 $1.29</div>
                    <button class="btn-agregar">AGREGAR</button>
                </a>
                <a href="#" class="product-card">
                    <img src={cafe} alt="Café"/>
                    <div class="product-title">Café Instantáneo ALTOMAYO</div>
                    <div class="product-price">$6.99 $8.50</div>
                    <button class="btn-agregar">AGREGAR</button>
                </a>
            </div>
        </section>
        </main>
        </>
    );

}

export default Inicio;