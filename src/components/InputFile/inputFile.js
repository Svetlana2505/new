import { useState } from "react";
import {
  StyledLabel,
  SpanName,
  SpanUpload,
  StyledInput,
} from "./InputFile.styled";

export const InputFile = ({ register }) => {
  const [image, setImage] = useState(null);

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };
  return (
    <StyledLabel>
      <SpanUpload>Upload</SpanUpload>
      <SpanName>{image ? image.name : "Upload your photo"}</SpanName>
      <StyledInput
        type="file"
        {...register("photo", {
          onChange: handleOnChange,
        })}
      />
    </StyledLabel>
  );
};
