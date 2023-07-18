"use client"
import React from "react";
import { CardWrapper, CategoryCard, Container, GridContainer, ImageWrapper, OutlineCard, OutlineCardT, OutlineWrapper, OutlineWrapperT, ReviewCard, ReviewLine, ReviewWrapper, SectionEight, SectionFive, SectionFour, SectionNine, SectionOne, SectionSeven, SectionSix, SectionThree, SectionTwo, SectionWrapper, SectionWrapperT, ServiceCard, SocialCard, SocialCardWrap, Step, StepLine, StepMap, StepMapWrapper, StepText, StepWrapper, TableWrapper, TagHeading, Td, Th, Tr, UserCard, UserImage } from "../styles/landing.style";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
 return (
  <Container>
    <SectionOne>
      <TagHeading>Unlock the Power of Community with BM DAO</TagHeading>
      <h1>Empowering Crypto and NFT Projects with Comprehensive Community Support and Strategic Promotion</h1>
      <p>We are decentralized autonomous organization that provides a range of services to help you build, grow and promote your crypto and NFT project. Whether you need Collab Managers, Chat Engagers, Moderators or Twitter Raiders, we have the expertise and experience to revolutionize your community engagement.</p>
      <Link href={"/register"} legacyBehavior>Join BM DAO</Link>
    </SectionOne>
    <SectionTwo>
      <h2>Services</h2>
      <GridContainer>
        <ServiceCard $imgSrc={"/bg-one.svg"} $bgPosition={"right"} $gridArea={"one"} >
          <div>
            <h4>Moderators</h4>
            <p>They maintain a safe and productive community resolving disputes, moderating discussions and fostering a positive atmosphere.</p>
          </div>
        </ServiceCard>
        <ServiceCard $imgSrc={"/bg-two.svg"} $gridArea={"two"}>
          <div>
            <h4>Collab Managers</h4>
            <p>They find and facilitate strategic partnerships for your project using their industry knowledge and connections.</p>
          </div>
        </ServiceCard>
        <ServiceCard $imgSrc={"/bg-three.svg"} $gridArea={"three"}>
          <div>
            <h4>Twitter Raiders</h4>
            <p>They use the power of social media to promote your project, create buzz, attract followers, and amplify your visibility</p>
          </div>
        </ServiceCard>
        <ServiceCard $imgSrc={"/bg-four.svg"} $gridArea={"four"}>
          <div>
            <h4>Chat Engagers</h4>
            <p>They participate in your project&apos;s community, spark conversations, share insights and initiate fun and engaging activities.</p>
          </div>
        </ServiceCard>
      </GridContainer>
    </SectionTwo>
    <SectionThree>
      <h2>BM TOKEN: THE CURRENCY OF BM DAO</h2>
      <p>BM Token (BMT) is the native cryptocurrency of BM DAO, a utility token that empowers collaboration, incentivizes participation, and unlocks rewards. With a fixed supply of 10 Billion BMT, BM Token provides a seamless and efficient medium of exchange for members.
        BM Token supports various use cases, such as:</p>
      <SectionWrapper>
        <OutlineWrapper>
          <OutlineCard>
            <h1>01</h1>
            <p>Payment Currency: Use BMT to pay for services within the BM DAO ecosystem.</p>
          </OutlineCard>
          <OutlineCard>
            <h1>02</h1>
            <p>Upgrade Levels: Use BMT to unlock higher rewards and exclusive opportunities.</p>
          </OutlineCard>
          <OutlineCard>
            <h1>03</h1>
            <p>Reward System: Earn BMT for completing tasks, participating in initiatives and achieving milestones. Redeem BMT cash in the BM DAO P2P Market</p>
          </OutlineCard>
          <OutlineCard>
            <h1>04</h1>
            <p>P2P Marketplace and Trading: Trade BM Tokens directly with other members.</p>
          </OutlineCard>
        </OutlineWrapper>
        <ImageWrapper>
          <Image src={"/side.svg"} alt="user_holding_card" objectFit="contain" objectPosition="center" layout="fill"/>
        </ImageWrapper>
      </SectionWrapper>
    </SectionThree>
    <SectionFour>
      <h2>What they say about us</h2>
      <ReviewWrapper>
        <ReviewCard>
          <ReviewLine>
            <Image src={"/quote.svg"} alt="user" width={33} height={20} />
            <div></div>
          </ReviewLine>
          <p>&quot;Our mission at BM DAO is to empower crypto and NFT projects with the tools, expertise and support they need to build vibrant communities, drive engagement.&quot;</p>
          <UserCard>
            <UserImage>
              <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
            </UserImage>
            <h3>Gemma Sandra</h3>
          </UserCard>
        </ReviewCard>
        <ReviewCard>
          <ReviewLine>
            <Image src={"/quote.svg"} alt="user" width={33} height={20} />
            <div></div>
          </ReviewLine>
          <p>&quot;Our mission at BM DAO is to empower crypto and NFT projects with the tools, expertise and support they need to build vibrant communities, drive engagement.&quot;</p>
          <UserCard>
            <UserImage>
              <Image src={"/user-2.png"} alt="user" objectFit="cover" objectPosition="center" layout="fill"/>
            </UserImage>
            <h3>Gemma Sandra</h3>
          </UserCard>
        </ReviewCard>
      </ReviewWrapper>
    </SectionFour>
    <SectionFive>
      <h2>BM TOKEN: THE CURRENCY OF BM DAO</h2>
      <p>BM Token (BMT) is the native cryptocurrency of BM DAO, a utility token that empowers collaboration, incentivizes participation, and unlocks rewards. With a fixed supply of 10 Billion BMT, BM Token provides a seamless and efficient medium of exchange for members.
        BM Token supports various use cases, such as:</p>
      <SectionWrapperT>
        <ImageWrapper>
          <Image src={"/side2.svg"} alt="user_holding_card" objectFit="contain" objectPosition="center" layout="fill"/>
        </ImageWrapper>
        <OutlineWrapperT>
          <OutlineCardT>
            <h1>01</h1>
            <p>Learn from our experts and mentors who have extensive experience and insights in the blockchain space.</p>
          </OutlineCardT>
          <OutlineCardT>
            <h1>02</h1>
            <p>Getting access to exclusive rewards, incentives, and opportunities as you progress through the academy</p>
          </OutlineCardT>
        </OutlineWrapperT>
      </SectionWrapperT>
    </SectionFive>
    <SectionSix>
      <h2>Join us and make Money as a</h2>
      <CardWrapper>
        <CategoryCard>
          <div className="icon">
            <Image src={"/group.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="down">
            <div>
              <h4>Collab Manager</h4>
              <p>Coordinate and manage collaborations with other members and the community.</p>
            </div>
            <button><span>Register</span> <Image src={"/arrow-right.svg"} alt="arrow_right" width={24} height={24}/></button>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="icon">
            <Image src={"/group.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="down">
            <div>
              <h4>Chat Engagers</h4>
              <p>Engage and interact with the community and promote project initiatives.</p>
            </div>
            <button><span>Register</span> <Image src={"/arrow-right.svg"} alt="arrow_right" width={24} height={24}/></button>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="icon">
            <Image src={"/group.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="down">
            <div>
              <h4>Moderatos</h4>
              <p>Maintain the quality of discussions in the community and ensure compliance with the platform's guidelines.</p>
            </div>
            <button><span>Register</span> <Image src={"/arrow-right.svg"} alt="arrow_right" width={24} height={24}/></button>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="icon">
            <Image src={"/group.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="down">
            <div>
              <h4>Twitter Raiders</h4>
              <p>Create and execute Twitter campaigns to promote projects, increase visibility, and drive engagement.</p>
            </div>
            <button><span>Register</span> <Image src={"/arrow-right.svg"} alt="arrow_right" width={24} height={24}/></button>
          </div>
        </CategoryCard>
      </CardWrapper>
    </SectionSix>
    <SectionSeven>
      <h2>How to start earning</h2>
      <StepWrapper>
        <StepMapWrapper>
          <StepLine></StepLine>
          <StepMap><span>1</span></StepMap>
          <StepMap><span>2</span></StepMap>
          <StepMap><span>3</span></StepMap>
          <StepMap><span>4</span></StepMap>
        </StepMapWrapper>
        <Step>
          <StepText>Create an Account</StepText>
          <StepText>Choose a Package and Level</StepText>
          <StepText>Pay Registration Fee</StepText>
          <StepText>Start Earning</StepText>
        </Step>
      </StepWrapper>
    </SectionSeven>
    <SectionEight>
      <h2>Packages</h2>
      <TableWrapper>
        <Tr>
          <Th>Package</Th>
          <Th>Collab Manager</Th>
          <Th>Chat Engager</Th>
          <Th>Twitter Raider</Th>
          <Th>Moderator</Th>
        </Tr>
        <Tr>
          <Th>Levels</Th>
          <Td>1-5</Td>
          <Td>1-5</Td>
          <Td>1-5</Td>
          <Td>1</Td>
        </Tr>
        <Tr>
          <Th>Registration Fee</Th>
          <Td>$10 - $200</Td>
          <Td>$10 - $200</Td>
          <Td>$10 - $200</Td>
          <Td>$100</Td>
        </Tr>
        <Tr>
          <Th>Welcome Bonus</Th>
          <Td>$1 - $20</Td>
          <Td>$1 - $20</Td>
          <Td>$1 - $20</Td>
          <Td>$10</Td>
        </Tr>
        <Tr>
          <Th>Daily Task Reward</Th>
          <Td>$0.5 - $10</Td>
          <Td>$0.5 - $10</Td>
          <Td>$0.5 - $10</Td>
          <Td>$5</Td>
        </Tr>
        <Tr>
          <Th>Validity Period</Th>
          <Td>60 days</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Th style={{ border: "none" }}></Th>
          <Td><button>Choose Package</button></Td>
          <Td><button>Choose Package</button></Td>
          <Td><button>Choose Package</button></Td>
          <Td><button>Choose Package</button></Td>
        </Tr>
      </TableWrapper>
    </SectionEight>
    <SectionNine>
      <h2>Join our Community</h2>
      <p>Get access to 24/7 support from our community managers, chatters, moderators, and twitter raiders, as well as ouir panel of experts and mentors.</p>
      <SocialCardWrap>
        <SocialCard>
          <div className="icon">
            <Image src={"/twitter.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="content">
            <h4>Twitter</h4>
            <p>Follow us on Twitter today</p>
          </div>
        </SocialCard>
        <SocialCard>
          <div className="icon">
            <Image src={"/discord.svg"} alt="user" height={36} width={36}/>
          </div>
          <div className="content">
            <h4>Discord</h4>
            <p>Join the Community and Ask questions</p>
          </div>
        </SocialCard>
      </SocialCardWrap>
    </SectionNine>
  </Container>
 )
}
export default LandingPage;
