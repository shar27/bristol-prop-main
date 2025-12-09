import React from "react";
import styled from "styled-components";

export default function StepOne({ formData, handleChange, handleNext }) {
  const sizes = [
  {
  id: "small",
  title: "Quarter Van",
  cubicMetres: "¼ Van Load",
  description: "Equivalent to 4 washing machines or ~15 bags.",
  price: "£150",
  items: ["4 washing machines", "15 dustbin bags, or", "4 domestic wheelie bins"],
  furniture: ["sofa", "chair", "tv"]
},{
  id: "medium",
  title: "Half Van",
  cubicMetres: "½ Van Load",
  description: "Equivalent to 1 medium skip or ~25 bags.",
  price: "£200",
  items: ["1 medium skip", "10 washing machines", "25 dustbin bags, or", "10 domestic wheelie bins"],
  furniture: ["sofa", "chair", "tv", "table", "cabinet"]
},
    {
  id: "large",
  title: "Three-Quarter Van",
  cubicMetres: "¾ Van Load",
  description: "Equivalent to 1 large skip or ~40+ bags.",
  price: "£300",
  items: ["1 large skip", "20+ washing machines", "40+ dustbin bags, or", "20+ domestic wheelie bins"],
  furniture: ["sofa", "chair", "tv", "table", "cabinet", "bed", "wardrobe", "desk"]
},
     {
  id: "xlarge",
  title: "Full Van",
  cubicMetres: "Full Van Load",
  description: "Equivalent to 2 builders skips or ~75 bags.",
  price: "£400",
  items: ["2 builders skips", "30 washing machines", "75 dustbin bags,or", "30 domestic wheelie bins"],
  furniture: ["sofa", "armchair", "table", "cabinet", "wardrobe", "shelving unit", "chair", "blue chair", "folding chairs", "stool", "tv", "pushchair", "heater", "chest", "small red table"]
},
     {
  id: "xxlarge",
  title: "Van + Extra Load",
  cubicMetres: "Full Van + Extra",
  description: "Equivalent to 2 large skips or 100+ bags.",
  price: "£600",
  items: ["2 large skips", "40 washing machines", "100 dustbin bags,or", "40 domestic wheelie bins"],
  furniture: ["sofa", "armchair", "table", "side table", "cabinet", "wardrobe", "shelving unit", "chest", "chair", "green chair", "folding chairs", "blue chair", "stool", "tv", "lamp", "heater", "pushchair", "small red table"]
},
//     {
//   id: "test",
//   title: "Van + Extra Load",
//   cubicMetres: "Full Van + Extra",
//   description: "Equivalent to 2 large skips or 100+ bags.",
//   price: "£1",
//   items: ["2 large skips", "40 washing machines", "100 dustbin bags,or", "40 domestic wheelie bins"],
//   furniture: ["sofa", "armchair", "table", "side table", "cabinet", "wardrobe", "shelving unit", "chest", "chair", "green chair", "folding chairs", "blue chair", "stool", "tv", "lamp", "heater", "pushchair", "small red table"]
// },
  ];

  const handleSizeSelect = (sizeId) => {
    handleChange("size", sizeId);
  };

  const canProceed = formData.size !== "";
  const selectedSize = sizes.find(s => s.id === formData.size);

  return (
    <Container>
      <Title className="font30 extraBold">Size of collection</Title>
      <Subtitle className="font15">Select the size that best fits your needs</Subtitle>

      {/* Visual Furniture Comparison */}
      {selectedSize && (
        <VisualScene>
          <SceneHeader>
            <SceneTitle className="font24 extraBold">{selectedSize.cubicMetres} Cubic Metres</SceneTitle>
            <PriceTag className="font20 semiBold">{selectedSize.price}</PriceTag>
            <LabourInfo className="font14">{selectedSize.id === 'test_price' ? 'Test payment only' : `including ${selectedSize.id === 'small' ? '10' : selectedSize.id === 'medium' ? '15' : '30'} mins labour allowance`}</LabourInfo>
          </SceneHeader>
          
          <FurnitureScene>
            <ItemsList>
              <ListTitle className="font16 semiBold">Should be similar in size to about:</ListTitle>
              {selectedSize.items.map((item, i) => (
                <ListItem key={i} className="font14">• {item}</ListItem>
              ))}
            </ItemsList>

            <FurnitureDisplay>
            {/* Sofa */}
{selectedSize.furniture.includes("sofa") && <Sofa>🛋️</Sofa>}

{/* Armchair */}
{selectedSize.furniture.includes("armchair") && <FurnitureItem>🛋️</FurnitureItem>}

{/* Chair types */}
{selectedSize.furniture.some(f => ["chair","blue chair","green chair"].includes(f)) && (
  <Chair>🪑</Chair>
)}

{/* Folding chairs */}
{selectedSize.furniture.includes("folding chairs") && <FurnitureItem>🪑</FurnitureItem>}

{/* TV */}
{selectedSize.furniture.includes("tv") && <TV>📺</TV>}

{/* Table */}
{selectedSize.furniture.some(f => ["table","small red table","side table"].includes(f)) && (
  <Table>🛋️</Table>
)}

{/* Cabinet */}
{selectedSize.furniture.includes("cabinet") && <Cabinet>🗄️</Cabinet>}

{/* Wardrobe */}
{selectedSize.furniture.includes("wardrobe") && <Wardrobe>👔</Wardrobe>}

{/* Shelving unit */}
{selectedSize.furniture.includes("shelving unit") && <FurnitureItem>📚</FurnitureItem>}

{/* Stool */}
{selectedSize.furniture.includes("stool") && <FurnitureItem>🪑</FurnitureItem>}

{/* Chest */}
{selectedSize.furniture.includes("chest") && <FurnitureItem>🧳</FurnitureItem>}

{/* Pushchair */}
{selectedSize.furniture.includes("pushchair") && <FurnitureItem>🛒</FurnitureItem>}

{/* Heater */}
{selectedSize.furniture.includes("heater") && <FurnitureItem>🔥</FurnitureItem>}

{/* Lamp */}
{selectedSize.furniture.includes("lamp") && <FurnitureItem>💡</FurnitureItem>}

            </FurnitureDisplay>
          </FurnitureScene>

          <ContactPrompt className="font14">
            Sound about right? Then <ContactLink href="tel:01172990185">contact us</ContactLink>
          </ContactPrompt>
        </VisualScene>
      )}

      <SizesGrid>
        {sizes.map((size) => (
          <SizeCard
            key={size.id}
            selected={formData.size === size.id}
            onClick={() => handleSizeSelect(size.id)}
          >
            <SizeIcon>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="8"
                  width="16"
                  height="12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </SizeIcon>
            <SizeTitle className="font20 extraBold">{size.title}</SizeTitle>
            <SizeDescription className="font14">{size.description}</SizeDescription>
            <SizePrice className="font18 semiBold">{size.price}</SizePrice>
            <RadioCircle selected={formData.size === size.id}>
              {formData.size === size.id && <RadioDot />}
            </RadioCircle>
          </SizeCard>
        ))}
      </SizesGrid>

      <ButtonWrapper>
        <NextButton
          className="font15 extraBold"
          onClick={handleNext}
          disabled={!canProceed}
        >
          NEXT STEP
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #0b093b;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #707070;
  margin-bottom: 30px;
`;

const VisualScene = styled.div`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0E0E0 70%, #C0C0C0 100%);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  border: 2px solid #003366;
  min-height: 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 300px;
  }
`;

const SceneHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SceneTitle = styled.h2`
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`;

const PriceTag = styled.div`
  background-color: #003366;
  color: white;
  padding: 10px 30px;
  display: inline-block;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const LabourInfo = styled.div`
  background-color: #7FFF00;
  color: #003366;
  padding: 8px 20px;
  display: inline-block;
  border-radius: 6px;
  font-weight: 600;
`;

const FurnitureScene = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ItemsList = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ListTitle = styled.div`
  color: #003366;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  color: #333;
  margin: 5px 0;
`;

const FurnitureDisplay = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  background: rgba(192, 192, 192, 0.3);
  border-radius: 8px;
  min-height: 200px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const FurnitureItem = styled.div`
  font-size: 60px;
  animation: fadeIn 0.5s ease-in;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Sofa = styled(FurnitureItem)``;
const Chair = styled(FurnitureItem)``;
const TV = styled(FurnitureItem)``;
const Table = styled(FurnitureItem)``;
const Cabinet = styled(FurnitureItem)``;
const Bed = styled(FurnitureItem)``;
const Wardrobe = styled(FurnitureItem)``;
const Desk = styled(FurnitureItem)``;

const ContactPrompt = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 6px;
`;

const ContactLink = styled.a`
  color: #003366;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    color: #0055aa;
  }
`;

const SizesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SizeCard = styled.div`
  position: relative;
  border: 2px solid ${(props) => (props.selected ? "#003366" : "#e0e0e0")};
  border-radius: 8px;
  padding: 30px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => (props.selected ? "#f0f8ff" : "white")};

  &:hover {
    border-color: #003366;
    box-shadow: 0 4px 12px rgba(0, 51, 102, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const SizeIcon = styled.div`
  color: #003366;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const SizeTitle = styled.h3`
  text-align: center;
  color: #0b093b;
  margin-bottom: 10px;
`;

const SizeDescription = styled.p`
  text-align: center;
  color: #707070;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const SizePrice = styled.p`
  text-align: center;
  color: #003366;
  margin-bottom: 15px;
`;

const RadioCircle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.selected ? "#003366" : "#d0d0d0")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const RadioDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #003366;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const NextButton = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #002244;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
  }
`;