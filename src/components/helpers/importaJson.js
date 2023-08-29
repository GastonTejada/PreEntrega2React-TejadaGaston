import data from "../data/peliculas.json";

export const importaJson = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);                        
        }, 500)
    })
}


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.rank === parseInt(id));

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}
