/* --- БАЗА --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0d0d0d;
    color: #ffffff;
    overflow-x: hidden;
}

/* --- МЕНЮ --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #fff;
}

.logo span {
    color: #e63946;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
}

.nav-links a {
    text-decoration: none;
    color: #aaa;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #e63946;
}

/* --- ГЛАВНЫЙ ЭКРАН --- */
.hero {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(13,13,13,1)), 
                url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop') center/cover;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 56px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.hero-content p {
    font-size: 20px;
    color: #ccc;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.btn-main {
    padding: 15px 40px;
    background-color: #e63946;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    border: none;
    cursor: pointer;
}

.btn-main:hover {
    background-color: #c1121f;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(230, 57, 70, 0.3);
}

/* --- КАТАЛОГ --- */
.catalog {
    padding: 80px 5%;
    max-width: 1400px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

/* --- КАРТОЧКА --- */
.car-card {
    background: #1a1a1a;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.car-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    border-color: #e63946;
}

.car-card img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform 0.5s;
}

.car-card:hover img {
    transform: scale(1.05);
}

.card-content {
    padding: 25px;
    text-align: center;
}

.card-content h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.price {
    font-size: 22px;
    font-weight: bold;
    color: #e63946;
    margin-bottom: 20px;
}

.car-card button {
    width: 100%;
    padding: 15px;
    background-color: #2a2a2a;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    text-transform: uppercase;
    font-weight: bold;
}

.car-card button:hover {
    background-color: #e63946;
}

/* --- МОДАЛЬНОЕ ОКНО --- */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #1a1a1a;
    padding: 40px;
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    border: 1px solid #333;
    position: relative;
    text-align: center;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 25px;
    color: #aaa;
    font-size: 30px;
    cursor: pointer;
    transition: color 0.3s;
}

.close-btn:hover {
    color: #e63946;
}

.modal-content img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
}
