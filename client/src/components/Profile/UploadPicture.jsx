import React from "react";
import { Box, Button, Heading, Layer } from "grommet";
import ReactAvatar from "react-avatar-edit";

export default function UploadPicture(
  setShow,
  onCrop,
  onClose,
  onBeforeFileLoad,
  src,
  preview,
  onUpload
) {
  return (
    <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
      <Box pad="medium">
        <Heading level={3} textAlign="center">
          Edit Image
        </Heading>
        <Box direction="row" gap="small" background="white" pad="small" round>
          <ReactAvatar
            width={200}
            imageHeight={150}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={src}
          />
          <Box height="small" width="small" justify="center" align="center">
            {preview && <img src={preview} alt="Preview" />}
          </Box>
        </Box>
        <Button primary label="Upload" onClick={onUpload} />
      </Box>
    </Layer>
  );
}
