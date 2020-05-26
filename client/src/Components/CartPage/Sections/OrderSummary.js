import React from "react";

export default function OrderSummary({
  quantityOfGroups,
  quantityPrizes,
  groupSum,
  promo,
}) {
  return (
    <>
      <div style={{ justifyContent: "center" }} className="singleProduct">
        <div className="sizes">
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Rodzaj </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">Gumki:</div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">Troczki:</div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">Haft:</div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Ilość </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[0]} szt
              </div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[1]} szt
              </div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[2]} szt
              </div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Cena </div>
            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[0] === promo[0][0] ? (
                  quantityPrizes[0]
                ) : (
                  <>
                    <s style={{ color: "red", fontSize: "12px" }}>
                      {promo[0][0]}
                    </s>{" "}
                    {quantityPrizes[0]}{" "}
                  </>
                )}{" "}
                zł/szt
              </div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[1] === promo[1][0] ? (
                  quantityPrizes[1]
                ) : (
                  <>
                    <s style={{ color: "red", fontSize: "12px" }}>
                      {promo[1][0]}
                    </s>{" "}
                    {quantityPrizes[1]}{" "}
                  </>
                )}{" "}
                zł/szt
              </div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[2] === promo[2][0]
                  ? quantityPrizes[2]
                  : (quantityOfGroups,
                    (
                      <>
                        <s style={{ color: "red", fontSize: "12px" }}>
                          {promo[2][0]}
                        </s>{" "}
                        {quantityPrizes[2]}{" "}
                      </>
                    ))}{" "}
                zł/szt
              </div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Suma </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[0]} zł</div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[1]} zł</div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[2]} zł</div>
            )}
          </div>
        </div>
        <div
          style={{ flexBasis: "100%", justifyContent: "center" }}
          className="sizes"
        >
          <div className="singleProduct--suma__des">Łącznie:</div>
          <div className="singleProduct--suma__des">
            {(groupSum[0] + groupSum[1] + groupSum[2]).toFixed(2)} PLN +
            przesyłka
          </div>
        </div>
      </div>
    </>
  );
}
