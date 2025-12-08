import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SquarePayment({ amount, onPaymentSuccess, onPaymentCancel, isProcessing }) {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeSquare = async () => {
      try {
        if (!window.Square) {
          const script = document.createElement("script");
          script.src = "https://web.squarecdn.com/v1/square.js";
          script.async = true;
          script.onload = async () => {
            await initCard();
          };
          document.body.appendChild(script);
        } else {
          await initCard();
        }
      } catch (err) {
        console.error("Error initializing Square:", err);
        setError("Failed to load payment form. Please refresh and try again.");
        setIsLoading(false);
      }
    };

    const initCard = async () => {
      try {
        const appId = process.env.REACT_APP_SQUARE_APPLICATION_ID;
        const locationId = process.env.REACT_APP_SQUARE_LOCATION_ID;


        if (!appId || !locationId) {
          throw new Error('Square credentials missing. Check .env file in project root.');
        }

        const payments = window.Square.payments(appId, locationId);
        const cardInstance = await payments.card();
        await cardInstance.attach("#card-container");
        setCard(cardInstance);
        setIsLoading(false);
      } catch (err) {
        console.error("Error initializing card:", err);
        setError(`Failed: ${err.message}`);
        setIsLoading(false);
      }
    };

    initializeSquare();

    return () => {
      if (card) {
        card.destroy();
      }
    };
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!card) {
      setError("Payment form not ready. Please try again.");
      return;
    }

    setError(null);

    try {
      const result = await card.tokenize();

      if (result.status === "OK") {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/process-payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceId: result.token,
            amount: Math.round(amount * 100),
          }),
        });

        const data = await response.json();

        if (response.ok) {
          onPaymentSuccess(data);
        } else {
          setError(data.error || "Payment failed. Please try again.");
        }
      } else {
        const errors = result.errors.map((err) => err.message).join(", ");
        setError(errors);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("An error occurred while processing your payment. Please try again.");
    }
  };

  return (
    <Container>
      <PaymentCard>
        {isLoading && (
          <LoadingMessage className="font15">
            Loading payment form...
          </LoadingMessage>
        )}

        {error && (
          <ErrorMessage className="font14">
            {error}
          </ErrorMessage>
        )}

        <form id="payment-form" onSubmit={handlePayment}>
          <CardContainer id="card-container" />

          <InfoText className="font13">
            💳 Your payment information is secure and encrypted
          </InfoText>

          <ButtonGroup>
            <CancelButton
              type="button"
              className="font15 extraBold"
              onClick={onPaymentCancel}
              disabled={isProcessing}
            >
              CANCEL
            </CancelButton>
            <PayButton
              type="submit"
              className="font15 extraBold"
              disabled={isLoading || isProcessing}
            >
              {isProcessing ? "PROCESSING..." : `PAY £${amount.toFixed(2)}`}
            </PayButton>
          </ButtonGroup>
        </form>

        <SecurityBadges>
          <SecurityBadge className="font12">
            🔒 Secure SSL Encryption
          </SecurityBadge>
          <SecurityBadge className="font12">
            ✓ PCI DSS Compliant
          </SecurityBadge>
        </SecurityBadges>
      </PaymentCard>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const PaymentCard = styled.div`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #707070;
  padding: 20px;
`;

const ErrorMessage = styled.div`
  background-color: #fee;
  border: 1px solid #fcc;
  color: #c33;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  margin-bottom: 20px;
  min-height: 100px;
`;

const InfoText = styled.p`
  text-align: center;
  color: #707070;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background-color: transparent;
  color: #003366;
  border: 2px solid #003366;
  padding: 15px 30px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #003366;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PayButton = styled.button`
  flex: 1;
  background-color: #003366;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #002244;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SecurityBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SecurityBadge = styled.div`
  color: #49cb86;
  text-align: center;
`;