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