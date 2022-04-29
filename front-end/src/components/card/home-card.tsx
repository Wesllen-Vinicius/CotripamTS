import styled from "styled-components"

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`

const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`

const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`

const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`

export default function CardHome() {
  return (
    <CardWrapper>
      <CardTextWrapper>
        <CardTextDate>days ago</CardTextDate>
        <CardTextTitle>Profile</CardTextTitle>
        <CardTextBody>
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
          temporibus omnis illum maxime quod deserunt eligendi dolor
        </CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        {/* <CardStats>
              <div>
                1<sup>m</sup>
              </div>
              <div>read</div>
            </CardStats> */}
        <CardStats>
          <LinkText href="#">website</LinkText>
        </CardStats>
        <CardStats>
          <LinkText href="#">github</LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  )
}
