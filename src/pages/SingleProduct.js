import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProduct } from "../context/productContext";
import { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../styles/Container";
import ProductImage from "../components/ProductImage";
import FormatPrice from "../helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";

const SINGLE_PRODUCT_URL = `https://api.pujakaitem.com/api/products`;
//const SINGLE_PRODUCT_URL = `https://fakestoreapi.com/products`;

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isLoading } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${SINGLE_PRODUCT_URL}/?id=${id}`);
  }, []);

  const {
    id: productId,
    company,
    description,
    name,
    price,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  return (
    <Wrapper>
      <Container className="container">
        <PageNavigation title={name} isLoading={isLoading} />
        <div className="grid grid-two-column">
          <div className="product_images">
            <ProductImage images={image} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <p>
              <Star stars={stars} reviews={reviews} />
            </p>
            <p className="product-data-price">
              R$:{" "}
              <del>
                <FormatPrice price={price + 400000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Oferta do Dia: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Entrega Grátis</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Devolução até 30 Dias</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Garantia de 2 Anos</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Estoque: <span>{stock > 0 ? "Em Estoque" : "Sem estoque"}</span>
              </p>
              <p>
                ID: <span>{productId}</span>
              </p>
              <p>
                Empresa: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 ? <AddToCart product={singleProduct} /> : ""}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    .product-data-warranty {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #ccc;
      padding-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          font-size: 2rem;
          color: #000;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p {
        font-size: 1.4rem;
        span {
          font-weight: bold;
        }
      }
    }
    .product-data-price {
      font-size: 2rem;
      color: #000;
      del {
        color: #999;
      }
    }
    .product-data-real-price {
      color: #ff0000;
    }
  }
`;

export default SingleProduct;
