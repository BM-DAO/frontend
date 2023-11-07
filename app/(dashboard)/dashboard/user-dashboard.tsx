"use client"
import HeadingCard from '@/app/components/heading-card'
import { ArrowDownIcon, CopyIcon, DocumentIcon } from '@/app/components/svg-icons'
import { ActivityCard, ActivityWrapper, BalanceCard, BottomWrapper, Card, CardWrapper, Container, CopyContainer, StatsCard, StatsContainer, StreakBox, StreakCard, TaskCard } from '@/app/styles/dashboard.style'
import { getUser, useSelector } from '@/lib/redux'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const UserDashboard = () => {
  const user = useSelector(getUser);
  const handleLinkCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Referral Link copied to clipboard", {
        position: toast.POSITION.TOP_RIGHT
    });
}
  return (
    <Container>
      <HeadingCard heading={`Hello, ${user.name ?? ""} 👋`} sub={"Perform daily tasks and track your records!"} notShow={true}/>
      <CardWrapper>
        <BalanceCard>
          <div className="top">
            <div>
              <p>Wallet Balance</p>
              <h1>${Number(user?.wallet?.balance?.totalBalance ?? "0").toFixed(2)}</h1>
            </div>
            <button>
              <span>BMT</span>
              <ArrowDownIcon />
            </button>
          </div>
          <p>BMT Value: {(Number(user?.wallet?.balance?.totalBalance ?? "0") * 1000).toFixed(2)}</p>
        </BalanceCard>
        <TaskCard>
          <div className='top'>
            <h2>Tasks</h2>
            <div>
              <span></span>
              <p>20 new available tasks</p>
            </div>
          </div>
          <div className="bottom">
            <StatsCard>
              <div>
                <DocumentIcon />
                <p>Completed</p>
              </div>
              <h2>232</h2>
            </StatsCard>
            <div className='divider'></div>
            <StatsCard>
              <div>
                <DocumentIcon />
                <p>In Progress</p>
              </div>
              <h2>20</h2>
            </StatsCard>
          </div>
        </TaskCard>
        <StreakCard>
          <div className="left">
            <h2>Task Streak</h2>
            <div className="field">
              <StreakBox $isCompleted={true} />
              <p>Completed</p>
            </div>
            <div className="field">
              <StreakBox $isCompleted={false} />
              <p>Not Completed</p>
            </div>
          </div>
          <div className="right">
            <div>
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={true} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={false} />
              <StreakBox $isCompleted={true} />
            </div>
          </div>
        </StreakCard>
      </CardWrapper>
      <BottomWrapper>
        <Card>
          <h2>Recent Activities</h2>
          <ActivityWrapper>
            <ActivityCard>
              <div className="left">
                <div className="icon">
                  <DocumentIcon />
                </div>
                <div>
                  <h3>Twitter Raiding</h3>
                  <p>Task</p>
                </div>
              </div>
              <div className="right">
                <p>26 June, 2023</p>
                <p>20 BMT</p>
              </div>
            </ActivityCard>
            <ActivityCard>
              <div className="left">
                <div className="icon">
                  <DocumentIcon />
                </div>
                <div>
                  <h3>Twitter Raiding</h3>
                  <p>Task</p>
                </div>
              </div>
              <div className="right">
                <p>26 June, 2023</p>
                <p>20 BMT</p>
              </div>
            </ActivityCard>
            <ActivityCard>
              <div className="left">
                <div className="icon">
                  <DocumentIcon />
                </div>
                <div>
                  <h3>Twitter Raiding</h3>
                  <p>Task</p>
                </div>
              </div>
              <div className="right">
                <p>26 June, 2023</p>
                <p>20 BMT</p>
              </div>
            </ActivityCard>
            <ActivityCard>
              <div className="left">
                <div className="icon">
                  <DocumentIcon />
                </div>
                <div>
                  <h3>Twitter Raiding</h3>
                  <p>Task</p>
                </div>
              </div>
              <div className="right">
                <p>26 June, 2023</p>
                <p>20 BMT</p>
              </div>
            </ActivityCard>
            <ActivityCard>
              <div className="left">
                <div className="icon">
                  <DocumentIcon />
                </div>
                <div>
                  <h3>Twitter Raiding</h3>
                  <p>Task</p>
                </div>
              </div>
              <div className="right">
                <p>26 June, 2023</p>
                <p>20 BMT</p>
              </div>
            </ActivityCard>
          </ActivityWrapper>
        </Card>
        <Card>
          <h2>Referrals</h2>
          <CopyContainer>
            <p className='label'>Share your referral link</p>
            <div>
              <p>{window?.location?.host}/register?code={user.referal?.myReferalCode ?? ""}</p>
              <button onClick={() => handleLinkCopy(`${window?.location?.host}/register?code=${user.referal?.myReferalCode}` ?? "")}>
                  <CopyIcon />
                  <span>Copy</span>
              </button>
            </div>
          </CopyContainer>
          <StatsContainer>
            <h2>Your Rewards</h2>
            <div>
              <p>Total Referral</p>
              <p>32</p>
            </div>
            <div>
              <p>Direct Referral</p>
              <p>32</p>
            </div>
            <div>
              <p>Indirect Referral</p>
              <p>32</p>
            </div>
            <div>
              <p>Total Earnings</p>
              <p>$75 (380 BMT)</p>
            </div>
          </StatsContainer>
        </Card>
      </BottomWrapper>
    </Container>
  )
}

export default UserDashboard;
