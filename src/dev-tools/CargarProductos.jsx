import { useEffect, useRef } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const productos = [

    {
        title: "iPhone 14 Pro",
        price: 1250,
        description: "iPhone 14 Pro con pantalla OLED de 6.1'', 256GB, triple cámara.",
        category: "smartphones",
        image: "/images/smartphones1.webp",
        destacado: true
    },
    {
        title: "Samsung Galaxy S23 Ultra",
        price: 1100,
        description: "Pantalla AMOLED 6.8'', cámara 200MP, 256GB de almacenamiento.",
        category: "smartphones",
        image: "/images/smartphones2.jpg",
        destacado: false
    },
    {
        title: "Xiaomi Redmi Note 12 Pro",
        price: 450,
        description: "Pantalla AMOLED 120Hz, cámara de 108MP, 256GB.",
        category: "smartphones",
        image: "/images/smartphones3.webp",
        destacado: false
    },
    {
        title: "Motorola Edge 40",
        price: 550,
        description: "Pantalla OLED curva, cámara 50MP con estabilización óptica.",
        category: "smartphones",
        image: "/images/smartphones4.jpg",
        destacado: false
    },
    {
        title: "Google Pixel 7",
        price: 799,
        description: "Pantalla 6.3'' OLED, chip Tensor G2, cámara avanzada.",
        category: "smartphones",
        image: "/images/smartphones5.jpg",
        destacado: false
    },
    {
        title: "OnePlus 11",
        price: 750,
        description: "Snapdragon 8 Gen 2, 16GB RAM, pantalla 120Hz.",
        category: "smartphones",
        image: "/images/smartphones6.jpg",
        destacado: false
    },
    {
        title: "Realme GT Neo 5",
        price: 600,
        description: "Carga rápida 240W, Snapdragon 8+, pantalla AMOLED.",
        category: "smartphones",
        image: "/images/smartphones7.avif",
        destacado: false
    },
    {
        title: "Nokia G60 5G",
        price: 300,
        description: "Pantalla 120Hz, cámara triple, Android One.",
        category: "smartphones",
        image: "/images/smartphones8.jpg",
        destacado: false
    },
    {
        title: "Sony Xperia 1 IV",
        price: 950,
        description: "Pantalla 4K HDR OLED, grabación 4K 120fps.",
        category: "smartphones",
        image: "/images/smartphones9.jpg",
        destacado: false
    },
    {
        title: "Huawei P60 Pro",
        price: 900,
        description: "Cámara con apertura variable, pantalla AMOLED curva.",
        category: "smartphones",
        image: "/images/smartphones10.jpg",
        destacado: false
    },
    // LAPTOPS
    {
        title: "MacBook Air M2",
        description: "Apple MacBook Air con chip M2, 8GB RAM, 256GB SSD",
        price: 1199,
        category: "laptops",
        image: "/images/laptops1.jpg",
        destacado: false
    },
    {
        title: "Dell XPS 13",
        description: "Dell XPS 13 9310, Intel i7, 16GB RAM, 512GB SSD",
        price: 1399,
        category: "laptops",
        image: "/images/laptops2.jpg",
        destacado: false
    },
    {
        title: "Lenovo Legion 5",
        description: "Lenovo Legion 5, AMD Ryzen 7, RTX 3050Ti, 16GB RAM, 512GB SSD",
        price: 1149,
        category: "laptops",
        image: "/images/laptops3.jpg",
        destacado: false
    },
    {
        title: "HP Spectre x360",
        description: "HP Spectre x360 2-in-1, Intel i7, 16GB RAM, 1TB SSD",
        price: 1299,
        category: "laptops",
        image: "/images/laptops4.jpg",
        destacado: false
    },
    {
        title: "ASUS ZenBook 14",
        description: "ASUS ZenBook 14, Intel i5, 8GB RAM, 512GB SSD",
        price: 849,
        category: "laptops",
        image: "/images/laptops5.jpg",
        destacado: false
    },
    {
        title: "Acer Aspire 5",
        description: "Acer Aspire 5, AMD Ryzen 5, 8GB RAM, 256GB SSD",
        price: 549,
        category: "laptops",
        image: "/images/laptops6.jpg",
        destacado: true
    },
    {
        title: "MSI GF63 Thin",
        description: "MSI GF63, Intel i5, GTX 1650, 8GB RAM, 512GB SSD",
        price: 749,
        category: "laptops",
        image: "/images/laptops7.jpg",
        destacado: false
    },
    {
        title: "Microsoft Surface Laptop 5",
        description: "Surface Laptop 5, Intel i5, 8GB RAM, 512GB SSD",
        price: 999,
        category: "laptops",
        image: "/images/laptops8.jpg",
        destacado: false
    },
    {
        title: "ASUS ROG Zephyrus G14",
        description: "ASUS ROG G14, Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD",
        price: 1599,
        category: "laptops",
        image: "/images/laptops9.avif",
        destacado: false
    },
    {
        title: "HP Pavilion 15",
        description: "HP Pavilion 15, Intel i5, 8GB RAM, 512GB SSD",
        price: 679,
        category: "laptops",
        image: "/images/laptops10.jpg",
        destacado: false
    },

    {
        title: "PlayStation 5",
        description: "Sony PlayStation 5 consola estándar con lector de discos",
        price: 649,
        category: "consolas",
        image: "/images/ps5.webp",
        destacado: true
    },
    {
        title: "Xbox Series X",
        description: "Microsoft Xbox Series X, 1TB SSD, 4K Gaming",
        price: 599,
        category: "consolas",
        image: "/images/xboxseries.png",
        destacado: true
    },
    {
        title: "Nintendo Switch OLED",
        description: "Nintendo Switch versión OLED, Joy-Con blancos",
        price: 349,
        category: "consolas",
        image: "/images/nintendo-switch-oled.webp",
        destacado: false
    },
    {
        title: "PlayStation 4 Slim",
        description: "Sony PlayStation 4 Slim, 1TB, edición estándar",
        price: 299,
        category: "consolas",
        image: "/images/ps4.webp",
        destacado: false
    },
    {
        title: "Xbox Series S",
        description: "Microsoft Xbox Series S, All Digital, 512GB SSD",
        price: 299,
        category: "consolas",
        image: "/images/x-box-series-s.webp",
        destacado: false
    },
    {
        title: "Nintendo Switch Lite",
        description: "Nintendo Switch Lite, portátil, color turquesa",
        price: 199,
        category: "consolas",
        image: "/images/switch-lite.webp",
        destacado: false
    },
    // videovideojuegos
    {
        title: "The Legend of Zelda: Tears of the Kingdom",
        description: "Nueva entrega de Zelda para Nintendo Switch",
        price: 69,
        category: "videojuegos",
        image: "/images/zelda.webp",
        destacado: false
    },
    {
        title: "God of War Ragnarök",
        description: "Kratos regresa en una épica aventura nórdica (PS5)",
        price: 59,
        category: "videojuegos",
        image: "/images/godofwar.jpg",
        destacado: true
    },
    {
        title: "Elden Ring",
        description: "Juego de rol y acción en mundo abierto (PS5, Xbox, PC)",
        price: 49,
        category: "videojuegos",
        image: "/images/elden-ring.jpg",
        destacado: false
    },
    {
        title: "Spider-Man: Miles Morales",
        description: "Aventura de superhéroes en Nueva York (PS5)",
        price: 39,
        category: "videojuegos",
        image: "/images/spider.webp",
        destacado: false
    },
    {
        title: "Call of Duty: Modern Warfare II",
        description: "Shooter en primera persona, acción intensa (PS5)",
        price: 69,
        category: "videojuegos",
        image: "/images/cod.webp",
        destacado: false
    },
    {
        title: "FIFA 25",
        description: "El simulador de fútbol más popular (PS5, Xbox)",
        price: 59,
        category: "videojuegos",
        image: "/images/fifa.webp",
        destacado: true
    },
    {
        title: "Mario Kart 8 Deluxe",
        description: "Divertidas carreras multijugador (Nintendo Switch)",
        price: 49,
        category: "videojuegos",
        image: "/images/mario.webp",
        destacado: false
    },
    {
        title: "Hogwarts Legacy",
        description: "Explorá el mundo mágico de Harry Potter (PS5, Xbox)",
        price: 59,
        category: "videojuegos",
        image: "/images/potter.jpg",
        destacado: false
    },
    {
        title: "Grand Theft Auto V",
        description: "Edición mejorada para consolas de nueva generación",
        price: 29,
        category: "videojuegos",
        image: "/images/gta5.jpg",
        destacado: false
    },
    {
        title: "Resident Evil 4 Remake",
        description: "Terror y acción con gráficos mejorados (PS5, Xbox)",
        price: 59,
        category: "videojuegos",
        image: "/images/resident.webp",
        destacado: false
    },
    
    {
        title: "Tira LED RGB Govee 5m",
        description: "Tira de luces LED con control remoto y sincronización con música.",
        price: 30,
        category: "iluminacion",
        image: "/images/led1.webp",
        destacado: false
    },
    {
        title: "Lámpara LED Razer Chroma",
        description: "Lámpara inteligente con iluminación RGB personalizable.",
        price: 70,
        category: "iluminacion",
        image: "/images/led2.webp",
        destacado: false
    },
    {
        title: "Ventilador RGB Corsair",
        description: "Ventilador de 120mm con 16 LEDs RGB direccionables.",
        price: 40,
        category: "iluminacion",
        image: "/images/led3.webp",
        destacado: true
    },
    {
        title: "Panel LED Nanoleaf Shapes",
        description: "Paneles LED modulares con efectos de iluminación personalizables.",
        price: 150,
        category: "iluminacion",
        image: "/images/led4.jpg",
        destacado: false
    },
    {
        title: "Lámpara de escritorio RGB Aukey",
        description: "Lámpara con luz ajustable y modo ambiente RGB.",
        price: 35,
        category: "iluminacion",
        image: "/images/led5.webp",
        destacado: false
    }
]

export function CargarProductos() {
    const cargadoRef = useRef(false);

    useEffect(() => {
        if (cargadoRef.current) return;
        
        const cargarProductosdb = async () => {
            const productosRef = collection(db, "productos");

            const snapshot = await getDocs(productosRef);
            const titulosExistentes = snapshot.docs.map(doc => doc.data().title);

            const nuevosProductos = productos.filter(
                prod => !titulosExistentes.includes(prod.title)
            );

            if (nuevosProductos.length === 0) {
                console.log("Productos ya cargados.");
                cargadoRef.current = true;
                return;
            }

            for (const prod of nuevosProductos) {
                await addDoc(productosRef, prod);
            }

            console.log(`Se cargaron ${nuevosProductos.length} productos nuevos.`);
            cargadoRef.current = true;
        };

        cargarProductosdb();
    }, []);

  return null;
}