export interface IDataSlide {
    id: string | number,
    url: string,
    alt: string,
    fruitUrl : string,
    fruitAlt: string,
}

export interface IDataDiscount {
    id: string | number,
    title : string,
    desc: string,
    url: string,
    alt: string,
    discountStyles: {
        background: string
    },
    pictureVariant: string
}

export interface IDataProduct {
    id: string | number,
    url: string,
    name: string,
    desc: string
    cost: string,
    stars: number,
    categories: boolean
}