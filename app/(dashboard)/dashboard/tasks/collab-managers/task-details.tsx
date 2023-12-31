"use client";

import React, { ChangeEvent, DragEvent, useState } from "react";
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
    TemplateHeading,
    TemplateBox,
    Copy,
    TaskWrapper,
} from "../../../../styles/task-details.styles";
import TaskBox from "../../../../components/taskbox/TaskBox";
import { CopyIcon } from "@/app/components/svg-icons";
import Image from "next/image";
import uploadIcon from "../../../../../public/upload-icon.svg";
import imageDocIcon from "../../../../../public/img-doc-icon.svg";
import closeIcon from "../../../../../public/close-icon.svg";
import linkIcon from "../../../../../public/link-icon.svg";

const TaskDetails: React.FC = () => {
    const [startTask, setStartTask] = useState<boolean>(false);
    const [uploadedProofs, setUploadedProofs] = useState<File[]>([]);
    const [url, setUrl] = useState<string>("");
    const [uploadedUrl, setUploadedUrl] = useState<string[]>([]);

    const addUrl = () => {
        if (url === "") {
            return;
        }
        setUploadedUrl([...uploadedUrl, url]);

        setUrl("");
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        console.log("Dropped");
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setUploadedProofs([...uploadedProofs, file]);
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setUploadedProofs([...uploadedProofs, file]);
        }
    };

    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper>
                    <TaskBox heading={"Available Tasks"} tasksNub={1} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={5} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={50} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn>
                <TaskSub>Collab Manager</TaskSub>
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
                        <p>Target Community Minimum Members</p>
                        <BoldP>300</BoldP>
                    </div>

                    <div>
                        <p>Social Media</p>
                        <BoldP>Discord</BoldP>
                    </div>

                    <div>
                        <p>Allow Re-Collaboration</p>
                        <BoldP>No</BoldP>
                    </div>

                    <div>
                        <p>Task Reward:</p>
                        <BoldP>500 BMT</BoldP>
                    </div>
                </Details>
                {startTask || (
                    <>
                        <Instructions>
                            <h4>Task Instruction</h4>
                            <div className="instruction-grid">
                                <p>1.</p>
                                <p>
                                    Join the Client’s Discord Community using
                                    the provided invite link.
                                </p>
                            </div>

                            <div className="instruction-grid">
                                <p>2.</p>
                                <p>
                                    Engage in conversations and contribute at
                                    least 25 meaningful messages within the
                                    allocated time.
                                </p>
                            </div>

                            <div className="instruction-grid">
                                <p>3.</p>
                                <p>
                                    Ensure that your messages are relevant,
                                    respectful, and add value to the community
                                    discussions.
                                </p>
                            </div>

                            <div className="instruction-grid">
                                <p>4.</p>
                                <p>
                                    Be active and responsive during the task
                                    duration to encourage interactions and build
                                    connections.
                                </p>
                            </div>

                            <div className="instruction-grid">
                                <p>5.</p>
                                <p>
                                    Take screenshots as proof of completing the
                                    tasks.
                                </p>
                            </div>
                        </Instructions>

                        <div>
                            <TemplateHeading>Collab Template</TemplateHeading>
                            <TemplateBox>
                                <p>
                                    In this task you are to engage in tweets and
                                    blah blah blah. In this task you are to
                                    engage in tweets and blah blah blah. In this
                                    task you are to engage in tweets and blah
                                    blah blah. In this task you are to engage in
                                    tweets and blah blah blah. In this task you
                                    are to engage in tweets and blah blah blah.
                                </p>

                                <Copy>
                                    <CopyIcon />
                                    <p>Copy</p>
                                </Copy>
                            </TemplateBox>
                        </div>
                    </>
                )}

                {startTask || (
                    <StartButton onClick={() => setStartTask(true)}>
                        Start Task
                    </StartButton>
                )}

                {startTask && (
                    <UploadContainer>
                        <div>
                            <h4>Upload Proof</h4>
                            <UploadBox
                                onDrop={(event: DragEvent<HTMLDivElement>) =>
                                    handleDrop(event)
                                }
                                onDragEnter={(
                                    event: DragEvent<HTMLDivElement>
                                ) => event.preventDefault()}
                                onDragOver={(
                                    event: DragEvent<HTMLDivElement>
                                ) => event.preventDefault()}
                            >
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
                            <h4>Upload Link</h4>
                            <TextInput>
                                <form
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <input
                                        type="text"
                                        placeholder="Add URL"
                                        value={url}
                                        onChange={(event) =>
                                            setUrl(event.target.value)
                                        }
                                    />
                                </form>
                                <button onClick={() => addUrl()}>Upload</button>
                            </TextInput>
                        </div>

                        <UploadedDocContainer>
                            {(uploadedProofs.length !== 0 ||
                                uploadedUrl.length !== 0) && (
                                <div>
                                    <h4>Uploaded Proofs</h4>
                                    <ScreenshotContainer>
                                        {uploadedProofs?.map((item) => (
                                            <div
                                                key={uploadedProofs.indexOf(
                                                    item
                                                )}
                                            >
                                                <Image
                                                    src={imageDocIcon}
                                                    alt="Image document icon"
                                                />{" "}
                                                <p>
                                                    {item.name.slice(0, 8)}...
                                                    {item.name.slice(
                                                        item.name.lastIndexOf(
                                                            "."
                                                        )
                                                    )}
                                                </p>
                                                <Image
                                                    src={closeIcon}
                                                    alt="Close"
                                                />
                                            </div>
                                        ))}

                                        {uploadedUrl?.map((item) => (
                                            <div className="url-wrapper">
                                                <h4>Uploaded urls</h4>
                                                <div
                                                    key={uploadedUrl.indexOf(
                                                        item
                                                    )}
                                                    className="uploaded-url"
                                                >
                                                    <div>
                                                        <Image
                                                            src={linkIcon}
                                                            alt="Image document icon"
                                                        />{" "}
                                                        <p>{item}</p>
                                                    </div>
                                                    <button className="hidden-desktop">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </ScreenshotContainer>
                                </div>
                            )}
                        </UploadedDocContainer>

                        <Buttons>
                            <BorderedButton>Cancel</BorderedButton>
                            <ColoredButton>
                                {uploadedProofs.length !== 0 ||
                                uploadedUrl.length !== 0
                                    ? "Submit Task"
                                    : "Upload"}
                            </ColoredButton>
                        </Buttons>
                    </UploadContainer>
                )}
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;
