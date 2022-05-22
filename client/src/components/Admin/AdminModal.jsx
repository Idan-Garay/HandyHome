import React, { useEffect, useState } from "react";
import { Heading, Button, Box, Text } from "grommet";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Close } from "grommet-icons";


const AdminModal = ({ open, onDelete, handleClose }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: 0,
            width: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          contentLabel="Delete Modal"
          ariaHideApp={false}
          style={customStyles}
        >
            <Box>
                <Box
                    direction="row"
                    gap="auto"
                    background="brand"
                    pad="small"
                >
                    <Heading
                        level="3"
                        color="white"
                        margin={{ top: "auto", bottom: "auto" }}
                    >
                        Confirm Delete
                    </Heading>
                    <Button 
                        alignSelf="end" 
                        icon={<Close />} 
                        onClick={handleClose}
                        margin={{ left:"auto", bottom: "auto" }} 
                        />
                </Box>
                <Box
                    pad="small"
                >
                    <Text margin={{bottom:"10px"}}>Are you sure you want to delete this row?</Text>
                    <Box
                        direction="row-responsive"
                        gap="small"
                    >
                        <Button onClick={handleClose} primary margin={{left:"auto"}} label="Cancel" />
                        <Button primary fill={false} color="red" label="Delete" onClick={onDelete} />
                    </Box>
                
                </Box>
            </Box>
        </Modal>
    );
}

export default AdminModal;