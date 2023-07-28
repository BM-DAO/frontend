"use client";

import React, { ChangeEvent, useState } from "react";
import {
    Wrapper,
    LeftColumn,
    RightColumn,
    TaskSub,
    Details,
    BoldP,
    Instructions,
    StartButton,
    UploadContainer,
    UploadBox,
    FileInput,
    TextInput,
    Buttons,
    BorderedButton,
    ColoredButton,
    UploadedDocContainer,
    ScreenshotContainer,
} from "../../../../styles/task-details.styles";
import TaskBox from "../../../../components/taskbox/TaskBox";
import Image from "next/image";
import uploadIcon from "../../../../../public/upload-icon.svg";
import imageDocIcon from "../../../../../public/img-doc-icon.svg";
import closeIcon from "../../../../../public/close-icon.svg";

const TaskDetails: React.FC = () => {
    const [startTask, setStartTask] = useState<boolean>(false);
    const [uploadedProofs, setUploadedProofs] = useState<File[]>([]);
    const [uploadedUsermames, setUploadedUsermames] = useState<[]>([]);

    const handleDragOver: (event: Event) => void = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleDragLeave: (event: Event) => void = (event) => {
        event.preventDefault();
    };

    const handleDrop: (event: Event) => void = (event) => {
        event.preventDefault();
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setUploadedProofs([...uploadedProofs, file]);
        }
    };

    console.log(uploadedProofs);

    return (
        <Wrapper>
            <LeftColumn>
                <TaskBox heading={"Available Tasks"} tasksNub={1} />
                <TaskBox heading={"Pending Tasks"} tasksNub={5} />
                <TaskBox heading={"Completed Tasks"} tasksNub={50} />
            </LeftColumn>

            <RightColumn>
                <TaskSub>Moderators</TaskSub>
                <Details>
                    <div>
                        <p>Time Left to start Task:</p>
                        <BoldP>01:12:01</BoldP>
                    </div>

                    <div>
                        <p>Time Left to start Task:</p>
                        <BoldP>00:30:00</BoldP>
                    </div>

                    <div>
                        <p>Social Media:</p>
                        <BoldP>Telegram</BoldP>
                    </div>

                    <div>
                        <p>Community Link:</p>
                        <BoldP>www.BMDAO/telegram.com</BoldP>
                    </div>

                    <div>
                        <p>Task Reward:</p>
                        <BoldP>500 BMT</BoldP>
                    </div>
                </Details>

                {startTask || (
                    <Instructions>
                        <h4>Task Instruction</h4>
                        <p>
                            1. Join the Client’s Discord Community using the
                            provided invite link.
                        </p>
                        <p>
                            2. Engage in conversations and contribute at least
                            25 meaningful messages within the allocated time.
                        </p>
                        <p>
                            3. Ensure that your messages are relevant,
                            respectful, and add value to the community
                            discussions.
                        </p>
                        <p>
                            4. Be active and responsive during the task duration
                            to encourage interactions and build connections.
                        </p>
                        <p>
                            5. Take screenshots as proof of completing the
                            tasks.
                        </p>
                    </Instructions>
                )}

                {startTask || (
                    <StartButton onClick={() => setStartTask(true)}>
                        Start Task
                    </StartButton>
                )}

                {startTask && (
                    <UploadContainer
                        onDrop={() => handleDrop}
                        onDragLeave={() => handleDragLeave}
                        onDragOver={() => handleDragOver}
                    >
                        <div>
                            <h4>Upload Proof</h4>
                            <UploadBox>
                                <Image src={uploadIcon} alt="upload icon" />
                                <FileInput>
                                    <p>
                                        Drag & Drop or
                                        <label htmlFor="upload-file">
                                            {" "}
                                            Choose file{" "}
                                        </label>
                                        <input
                                            type="file"
                                            hidden
                                            id="upload-file"
                                            accept="image/*"
                                            onChange={(event) =>
                                                handleImageChange(event)
                                            }
                                        />
                                        to upload
                                    </p>
                                </FileInput>
                            </UploadBox>
                        </div>

                        <div>
                            <h4>Report Username</h4>
                            <TextInput>
                                <input type="text" placeholder="Add Username" />
                                <button>Add</button>
                            </TextInput>
                        </div>

                        <UploadedDocContainer>
                            <div>
                                <h4>Uploaded Proofs</h4>
                                <ScreenshotContainer>
                                    {uploadedProofs?.map((item) => (
                                        <div key={uploadedProofs.indexOf(item)}>
                                            <Image
                                                src={imageDocIcon}
                                                alt="Image document icon"
                                            />{" "}
                                            <p>
                                                Screenshot{" "}
                                                {uploadedProofs.indexOf(item) +
                                                    1}
                                            </p>
                                            <Image
                                                src={closeIcon}
                                                alt="Close"
                                            />
                                        </div>
                                    ))}
                                </ScreenshotContainer>
                            </div>

                            <div>
                                <h4>Username</h4>
                                <div>
                                    <p></p>
                                </div>
                            </div>
                        </UploadedDocContainer>

                        <Buttons>
                            <BorderedButton>Cancel</BorderedButton>
                            <ColoredButton>Upload</ColoredButton>
                        </Buttons>
                    </UploadContainer>
                )}
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;