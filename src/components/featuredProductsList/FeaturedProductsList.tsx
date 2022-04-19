import { FC } from "react";
import { useAppSelector } from "../../hooks/typedSelectors";
import { useGetProductsQuery } from "../../api/apiSlice";
import { IDataProduct } from "../../interfaces/interfaces";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "../../styles/link.sass"


const FeaturedProductsList: FC = () => {
    
    const {activeBtn} = useAppSelector(state => state.filters);
    const {searchValue} = useAppSelector(state => state.filters);

    const {
        data: products = [],
        isError,
        isLoading,
    } = useGetProductsQuery();

    const creatingListProducts = (products: IDataProduct[]) => {

        const filteredProducts = 
                products.filter(({name, category}) => 
                            (name.indexOf(searchValue) > -1 || searchValue === '') && 
                            (category === activeBtn || activeBtn === "All"));

        return filteredProducts.map(({id, url, name, cost, stars}) => (
            <CSSTransition
                key={id}
                timeout={500}
                classNames="item">
                <div className="featured-products__item">
                    <div className="featured-products__wrapper-img">
                        <img src={url} alt={name} className="featured-products__img" />
                    </div> 
                    <div className="featured-products__wrapper-desc">
                        <div className="featured-products__title-item">{name}</div>
                        <div className="featured-products__cost">{cost}</div> 
                        <div className="featured-products__stars">
                            <svg className={1 <= stars ? "active-star" : ''} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M11.2877 7.72369L11.2877 7.72367L11.2834 7.72777C10.9879 8.01418 10.8528 8.42748 10.9199 8.83221L10.9198 8.83222L10.9211 8.83937L11.5293 12.2051C11.5293 12.2052 11.5293 12.2053 11.5293 12.2054C11.5457 12.2971 11.5071 12.3903 11.4294 12.444L11.4293 12.4439L11.4184 12.4518C11.3409 12.5085 11.2363 12.5162 11.1493 12.4695L11.1493 12.4695L11.1442 12.4669L8.11565 10.8873C7.94052 10.7945 7.74844 10.7459 7.55504 10.7403L7.5479 10.7401H7.54076H7.35535H7.31832L7.2817 10.7456C7.16365 10.7632 7.04563 10.8009 6.93522 10.8606L3.91241 12.4443C3.85856 12.4706 3.79882 12.4803 3.74027 12.4723C3.60665 12.4434 3.51758 12.3151 3.53809 12.179L4.14603 8.81826L4.14609 8.81827L4.14739 8.81034C4.21409 8.4045 4.07957 7.99165 3.78655 7.70316L3.78656 7.70315L3.78375 7.70043L1.31341 5.30602C1.31338 5.30599 1.31336 5.30597 1.31334 5.30595C1.24582 5.24039 1.22314 5.14323 1.25348 5.05596L1.25482 5.05205C1.28681 4.9575 1.36768 4.88907 1.46496 4.87293L4.85258 4.38149C5.27688 4.33377 5.64813 4.07408 5.839 3.69233L5.83903 3.69234L5.84118 3.68791L7.33597 0.623282C7.34418 0.608151 7.353 0.595478 7.36175 0.585123L7.3955 0.558876L7.43008 0.531975L7.4423 0.51846L7.44551 0.517283L7.45464 0.513933L7.46363 0.510231L7.48847 0.5H7.6451C7.72636 0.51432 7.79583 0.564938 7.83386 0.636964L9.3487 3.68847C9.34896 3.68899 9.34921 3.68951 9.34947 3.69003C9.53166 4.06109 9.88416 4.31744 10.29 4.37961L10.29 4.37963L10.2939 4.3802L13.6942 4.87348L13.6953 4.87363C13.7954 4.88794 13.8798 4.95643 13.9147 5.05142C13.9417 5.13972 13.9164 5.23607 13.848 5.30025L13.8465 5.30175L11.2877 7.72369Z" stroke="#FF9900"/>
                            </svg>
                            <svg className={2 <= stars ? "active-star" : ''} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2877 7.72369L11.2877 7.72367L11.2834 7.72777C10.9879 8.01418 10.8528 8.42748 10.9199 8.83221L10.9198 8.83222L10.9211 8.83937L11.5293 12.2051C11.5293 12.2052 11.5293 12.2053 11.5293 12.2054C11.5457 12.2971 11.5071 12.3903 11.4294 12.444L11.4293 12.4439L11.4184 12.4518C11.3409 12.5085 11.2363 12.5162 11.1493 12.4695L11.1493 12.4695L11.1442 12.4669L8.11565 10.8873C7.94052 10.7945 7.74844 10.7459 7.55504 10.7403L7.5479 10.7401H7.54076H7.35535H7.31832L7.2817 10.7456C7.16365 10.7632 7.04563 10.8009 6.93522 10.8606L3.91241 12.4443C3.85856 12.4706 3.79882 12.4803 3.74027 12.4723C3.60665 12.4434 3.51758 12.3151 3.53809 12.179L4.14603 8.81826L4.14609 8.81827L4.14739 8.81034C4.21409 8.4045 4.07957 7.99165 3.78655 7.70316L3.78656 7.70315L3.78375 7.70043L1.31341 5.30602C1.31338 5.30599 1.31336 5.30597 1.31334 5.30595C1.24582 5.24039 1.22314 5.14323 1.25348 5.05596L1.25482 5.05205C1.28681 4.9575 1.36768 4.88907 1.46496 4.87293L4.85258 4.38149C5.27688 4.33377 5.64813 4.07408 5.839 3.69233L5.83903 3.69234L5.84118 3.68791L7.33597 0.623282C7.34418 0.608151 7.353 0.595478 7.36175 0.585123L7.3955 0.558876L7.43008 0.531975L7.4423 0.51846L7.44551 0.517283L7.45464 0.513933L7.46363 0.510231L7.48847 0.5H7.6451C7.72636 0.51432 7.79583 0.564938 7.83386 0.636964L9.3487 3.68847C9.34896 3.68899 9.34921 3.68951 9.34947 3.69003C9.53166 4.06109 9.88416 4.31744 10.29 4.37961L10.29 4.37963L10.2939 4.3802L13.6942 4.87348L13.6953 4.87363C13.7954 4.88794 13.8798 4.95643 13.9147 5.05142C13.9417 5.13972 13.9164 5.23607 13.848 5.30025L13.8465 5.30175L11.2877 7.72369Z" stroke="#FF9900"/>
                            </svg>
                            <svg className={3 <= stars ? "active-star" : ''} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2877 7.72369L11.2877 7.72367L11.2834 7.72777C10.9879 8.01418 10.8528 8.42748 10.9199 8.83221L10.9198 8.83222L10.9211 8.83937L11.5293 12.2051C11.5293 12.2052 11.5293 12.2053 11.5293 12.2054C11.5457 12.2971 11.5071 12.3903 11.4294 12.444L11.4293 12.4439L11.4184 12.4518C11.3409 12.5085 11.2363 12.5162 11.1493 12.4695L11.1493 12.4695L11.1442 12.4669L8.11565 10.8873C7.94052 10.7945 7.74844 10.7459 7.55504 10.7403L7.5479 10.7401H7.54076H7.35535H7.31832L7.2817 10.7456C7.16365 10.7632 7.04563 10.8009 6.93522 10.8606L3.91241 12.4443C3.85856 12.4706 3.79882 12.4803 3.74027 12.4723C3.60665 12.4434 3.51758 12.3151 3.53809 12.179L4.14603 8.81826L4.14609 8.81827L4.14739 8.81034C4.21409 8.4045 4.07957 7.99165 3.78655 7.70316L3.78656 7.70315L3.78375 7.70043L1.31341 5.30602C1.31338 5.30599 1.31336 5.30597 1.31334 5.30595C1.24582 5.24039 1.22314 5.14323 1.25348 5.05596L1.25482 5.05205C1.28681 4.9575 1.36768 4.88907 1.46496 4.87293L4.85258 4.38149C5.27688 4.33377 5.64813 4.07408 5.839 3.69233L5.83903 3.69234L5.84118 3.68791L7.33597 0.623282C7.34418 0.608151 7.353 0.595478 7.36175 0.585123L7.3955 0.558876L7.43008 0.531975L7.4423 0.51846L7.44551 0.517283L7.45464 0.513933L7.46363 0.510231L7.48847 0.5H7.6451C7.72636 0.51432 7.79583 0.564938 7.83386 0.636964L9.3487 3.68847C9.34896 3.68899 9.34921 3.68951 9.34947 3.69003C9.53166 4.06109 9.88416 4.31744 10.29 4.37961L10.29 4.37963L10.2939 4.3802L13.6942 4.87348L13.6953 4.87363C13.7954 4.88794 13.8798 4.95643 13.9147 5.05142C13.9417 5.13972 13.9164 5.23607 13.848 5.30025L13.8465 5.30175L11.2877 7.72369Z" stroke="#FF9900"/>
                            </svg>
                            <svg className={4 <= stars ? "active-star" : ''} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2877 7.72369L11.2877 7.72367L11.2834 7.72777C10.9879 8.01418 10.8528 8.42748 10.9199 8.83221L10.9198 8.83222L10.9211 8.83937L11.5293 12.2051C11.5293 12.2052 11.5293 12.2053 11.5293 12.2054C11.5457 12.2971 11.5071 12.3903 11.4294 12.444L11.4293 12.4439L11.4184 12.4518C11.3409 12.5085 11.2363 12.5162 11.1493 12.4695L11.1493 12.4695L11.1442 12.4669L8.11565 10.8873C7.94052 10.7945 7.74844 10.7459 7.55504 10.7403L7.5479 10.7401H7.54076H7.35535H7.31832L7.2817 10.7456C7.16365 10.7632 7.04563 10.8009 6.93522 10.8606L3.91241 12.4443C3.85856 12.4706 3.79882 12.4803 3.74027 12.4723C3.60665 12.4434 3.51758 12.3151 3.53809 12.179L4.14603 8.81826L4.14609 8.81827L4.14739 8.81034C4.21409 8.4045 4.07957 7.99165 3.78655 7.70316L3.78656 7.70315L3.78375 7.70043L1.31341 5.30602C1.31338 5.30599 1.31336 5.30597 1.31334 5.30595C1.24582 5.24039 1.22314 5.14323 1.25348 5.05596L1.25482 5.05205C1.28681 4.9575 1.36768 4.88907 1.46496 4.87293L4.85258 4.38149C5.27688 4.33377 5.64813 4.07408 5.839 3.69233L5.83903 3.69234L5.84118 3.68791L7.33597 0.623282C7.34418 0.608151 7.353 0.595478 7.36175 0.585123L7.3955 0.558876L7.43008 0.531975L7.4423 0.51846L7.44551 0.517283L7.45464 0.513933L7.46363 0.510231L7.48847 0.5H7.6451C7.72636 0.51432 7.79583 0.564938 7.83386 0.636964L9.3487 3.68847C9.34896 3.68899 9.34921 3.68951 9.34947 3.69003C9.53166 4.06109 9.88416 4.31744 10.29 4.37961L10.29 4.37963L10.2939 4.3802L13.6942 4.87348L13.6953 4.87363C13.7954 4.88794 13.8798 4.95643 13.9147 5.05142C13.9417 5.13972 13.9164 5.23607 13.848 5.30025L13.8465 5.30175L11.2877 7.72369Z" stroke="#FF9900"/>
                            </svg>
                            <svg className={5 <= stars ? "active-star" : ''} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2877 7.72369L11.2877 7.72367L11.2834 7.72777C10.9879 8.01418 10.8528 8.42748 10.9199 8.83221L10.9198 8.83222L10.9211 8.83937L11.5293 12.2051C11.5293 12.2052 11.5293 12.2053 11.5293 12.2054C11.5457 12.2971 11.5071 12.3903 11.4294 12.444L11.4293 12.4439L11.4184 12.4518C11.3409 12.5085 11.2363 12.5162 11.1493 12.4695L11.1493 12.4695L11.1442 12.4669L8.11565 10.8873C7.94052 10.7945 7.74844 10.7459 7.55504 10.7403L7.5479 10.7401H7.54076H7.35535H7.31832L7.2817 10.7456C7.16365 10.7632 7.04563 10.8009 6.93522 10.8606L3.91241 12.4443C3.85856 12.4706 3.79882 12.4803 3.74027 12.4723C3.60665 12.4434 3.51758 12.3151 3.53809 12.179L4.14603 8.81826L4.14609 8.81827L4.14739 8.81034C4.21409 8.4045 4.07957 7.99165 3.78655 7.70316L3.78656 7.70315L3.78375 7.70043L1.31341 5.30602C1.31338 5.30599 1.31336 5.30597 1.31334 5.30595C1.24582 5.24039 1.22314 5.14323 1.25348 5.05596L1.25482 5.05205C1.28681 4.9575 1.36768 4.88907 1.46496 4.87293L4.85258 4.38149C5.27688 4.33377 5.64813 4.07408 5.839 3.69233L5.83903 3.69234L5.84118 3.68791L7.33597 0.623282C7.34418 0.608151 7.353 0.595478 7.36175 0.585123L7.3955 0.558876L7.43008 0.531975L7.4423 0.51846L7.44551 0.517283L7.45464 0.513933L7.46363 0.510231L7.48847 0.5H7.6451C7.72636 0.51432 7.79583 0.564938 7.83386 0.636964L9.3487 3.68847C9.34896 3.68899 9.34921 3.68951 9.34947 3.69003C9.53166 4.06109 9.88416 4.31744 10.29 4.37961L10.29 4.37963L10.2939 4.3802L13.6942 4.87348L13.6953 4.87363C13.7954 4.88794 13.8798 4.95643 13.9147 5.05142C13.9417 5.13972 13.9164 5.23607 13.848 5.30025L13.8465 5.30175L11.2877 7.72369Z" stroke="#FF9900"/>
                            </svg>
                        </div>
                        <a className="link link_small" href="/" ><div>shop now</div></a>    
                    </div>
                </div>
            </CSSTransition>
        ))
    }

    const listProducts = creatingListProducts(products);

    return (
        <>
            {isLoading ? <Spinner/> : isError ? <ErrorMessage/> : null}
            <TransitionGroup className="featured-products__list-products">
                {listProducts}
            </TransitionGroup>

        </>
    )
}

export default FeaturedProductsList;